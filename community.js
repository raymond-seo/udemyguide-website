// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// ★★★ Cloud Firestore SDK 함수들을 가져옵니다 ★★★
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    updateDoc, 
    deleteDoc, 
    query, 
    orderBy, 
    onSnapshot, 
    serverTimestamp // 서버 타임스탬프를 사용하기 위해 임포트
} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBvmvQ1hUtO0E8umAPGlbAhe3rVdqu5lQ",
  authDomain: "mktdash-940f1.firebaseapp.com",
  projectId: "mktdash-940f1",
  storageBucket: "mktdash-940f1.firebasestorage.app",
  messagingSenderId: "157652211467",
  appId: "1:157652211467:web:2d296b31255efbec15340e",
  measurementId: "G-V992ECHF0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // 애널리틱스를 사용하지 않으면 이 줄은 제거해도 됩니다.

// ★★★ Firestore 서비스 인스턴스를 가져옵니다 ★★★
const db = getFirestore(app);


document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('posts-container');
    const noPostsMessage = document.querySelector('.no-posts-message');

    // 모달 관련 요소
    const postFormModal = document.getElementById('post-form-modal');
    const openPostFormButton = document.getElementById('open-post-form-button');
    const closeModalButton = postFormModal.querySelector('.close-button');
    const modalPasswordCheck = document.getElementById('password-check-modal');

    // 페이지네이션 관련 요소
    const paginationControls = document.getElementById('pagination-controls');

    // ★★★ 추가: body 요소 참조 ★★★
    const body = document.body;

    const postsPerPage = 10; // 한 화면에 표시할 게시글 수
    let currentPage = 1; // 현재 페이지 번호 (1부터 시작)

    // posts 배열은 이제 Firestore onSnapshot 리스너에 의해 채워집니다.
    let posts = []; 

    // 게시글 렌더링 함수
    function renderPosts() {
        postsContainer.innerHTML = ''; // 기존 내용 모두 지우기
        const startIndex = (currentPage - 1) * postsPerPage;
        const postsToRender = posts.slice(startIndex, startIndex + postsPerPage);

        if (posts.length === 0) { // 전체 게시글이 없을 때
            noPostsMessage.style.display = 'block';
            paginationControls.style.display = 'none'; // 페이지네이션 숨기기
            return;
        } else {
            noPostsMessage.style.display = 'none';
            paginationControls.style.display = 'flex'; // 페이지네이션 보이기
        }

        postsToRender.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-card');
            postElement.dataset.id = post.id; // Firestore 문서 ID 사용

            // 이미지 포함 여부에 따라 내용 구성 (줄바꿈 처리 포함)
            const postContentHtml = post.content.replace(/\n/g, '<br>') +
                                     (post.image ? `<img src="${post.image}" alt="${post.title} 이미지">` : '');

            // 강의명만 별도로 상단에 표시
            const courseTitleDisplay = post.udemyCourseName ? `<span class="course-title-display">(${post.udemyCourseName})</span>` : '';

            // Firestore timestamp는 toDate()로 변환 후 toLocaleString()
            const displayDate = post.timestamp ? new Date(post.timestamp.toDate()).toLocaleString() : '날짜 없음';

            const courseInfoHtml = (post.udemyCourseUrl || post.udemyCourseSection)
                ? `
                <div class="course-info">
                    ${post.udemyCourseUrl ? `<p><strong>강의 URL:</strong> <a href="${post.udemyCourseUrl}" target="_blank">${post.udemyCourseUrl}</a></p>` : ''}
                    ${post.udemyCourseSection ? `<p><strong>강의 섹션/위치:</strong> ${post.udemyCourseSection}</p>` : ''}
                </div>
                `
                : '';

            postElement.innerHTML = `
                <div class="post-card-header">
                    <h4>${post.title} ${courseTitleDisplay}</h4>
                    <span class="accordion-icon">➕️</span>
                </div>
                <p class="meta">작성자: ${post.nickname} | 날짜: ${displayDate}</p>
                
                <div class="post-card-content-wrapper">
                    <p class="content-body">${postContentHtml}</p>
                    ${courseInfoHtml}
                    <div class="post-actions">
                        <button class="edit-post">수정</button>
                        <button class="delete-post delete">삭제</button>
                    </div>
                    <div class="comments-section">
                        <h5>댓글</h5>
                        <div class="comments-list">
                            ${(post.comments || []).map(comment => `
                                <div class="comment-card">
                                    <p class="meta">작성자: ${comment.nickname} | 날짜: ${new Date(comment.timestamp.toDate()).toLocaleString()}</p>
                                    <p>${comment.content.replace(/\n/g, '<br>')}</p>
                                    <div class="comment-actions">
                                        <button class="edit-comment" data-comment-id="${comment.id}">수정</button>
                                        <button class="delete-comment delete" data-comment-id="${comment.id}">삭제</button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <form class="comment-form">
                            <div class="form-group">
                                <label for="comment-nickname-${post.id}">닉네임:</label>
                                <input type="text" id="comment-nickname-${post.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-password-${post.id}">비밀번호:</label>
                                <input type="password" id="comment-password-${post.id}" required maxlength="20">
                            </div>
                            <div class="form-group">
                                <label for="comment-content-${post.id}">댓글 내용:</label>
                                <textarea id="comment-content-${post.id}" rows="3" required></textarea>
                            </div>
                            <button type="submit" class="button">댓글 등록</button>
                        </form>
                    </div>
                </div>
            `;
            postsContainer.appendChild(postElement);

            // 아코디언 토글 이벤트
            postElement.querySelector('.post-card-header').addEventListener('click', () => {
                postElement.classList.toggle('active');
                const contentWrapper = postElement.querySelector('.post-card-content-wrapper');
                const icon = postElement.querySelector('.accordion-icon');
                if (postElement.classList.contains('active')) {
                    contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px"; // 실제 높이로 설정
                    icon.textContent = '➖️';
                } else {
                    contentWrapper.style.maxHeight = '0';
                    icon.textContent = '➕️';
                }
            });

            // 댓글 폼 제출 이벤트 리스너
            const commentForm = postElement.querySelector('.comment-form');
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // trim() 적용
                const nickname = commentForm.querySelector(`#comment-nickname-${post.id}`).value.trim();
                const password = commentForm.querySelector(`#comment-password-${post.id}`).value.trim();
                const content = commentForm.querySelector(`#comment-content-${post.id}`).value;
                addComment(post.id, nickname, password, content, commentForm);
            });

            // 게시글 수정/삭제 이벤트 리스너
            postElement.querySelector('.edit-post').addEventListener('click', (e) => {
                e.stopPropagation(); // 아코디언 토글 방지
                showPasswordModal(post.id, 'post', 'edit');
            });
            postElement.querySelector('.delete-post').addEventListener('click', (e) => {
                e.stopPropagation(); // 아코디언 토글 방지
                showPasswordModal(post.id, 'post', 'delete');
            });

            // 댓글 수정/삭제 이벤트 리스너
            postElement.querySelectorAll('.edit-comment').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // 아코디언 토글 방지
                    const commentId = e.target.dataset.commentId;
                    showPasswordModal(post.id, 'comment', 'edit', commentId);
                });
            });
            postElement.querySelectorAll('.delete-comment').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // 아코디언 토글 방지
                    const commentId = e.target.dataset.commentId;
                    showPasswordModal(post.id, 'comment', 'delete', commentId);
                });
            });
        });
        renderPaginationControls(); // 게시글 렌더링 후 페이지네이션 컨트롤 렌더링
    }

    // 페이지네이션 컨트롤 렌더링 함수
    function renderPaginationControls() {
        paginationControls.innerHTML = '';
        const totalPages = Math.ceil(posts.length / postsPerPage);

        if (totalPages <= 1) {
            paginationControls.style.display = 'none';
            return;
        }

        paginationControls.style.display = 'flex';

        // 이전 페이지 버튼
        const prevButton = document.createElement('button');
        prevButton.textContent = '◀';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderPosts();
            window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' });
        });
        paginationControls.appendChild(prevButton);

        // 페이지 번호 버튼
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.toggle('active', i === currentPage);
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPosts();
                window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' });
            });
            paginationControls.appendChild(pageButton);
        }

        // 다음 페이지 버튼
        const nextButton = document.createElement('button');
        nextButton.textContent = '▶';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderPosts();
            window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' });
        });
        paginationControls.appendChild(nextButton);
    }

    // 이미지 파일 리더 및 미리보기
    const postImageUpload = document.getElementById('post-image-upload');
    const postImagePreview = document.getElementById('post-image-preview');
    let uploadedImageBase64 = null;

    postImageUpload.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                postImagePreview.src = e.target.result;
                postImagePreview.style.display = 'block';
                uploadedImageBase64 = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            postImagePreview.src = '#';
            postImagePreview.style.display = 'none';
            uploadedImageBase64 = null;
        }
    });

    // 새 게시글 추가
    newPostForm.addEventListener('submit', async (e) => { // async 추가
        e.preventDefault();
        const newPost = {
            nickname: document.getElementById('post-nickname').value.trim(),
            password: document.getElementById('post-password').value.trim(), // 실제 서비스 시 해싱 필수!
            title: document.getElementById('post-title').value,
            content: document.getElementById('post-content').value,
            image: uploadedImageBase64,
            udemyCourseName: document.getElementById('udemy-course-name').value,
            udemyCourseUrl: document.getElementById('udemy-course-url').value,
            udemyCourseSection: document.getElementById('udemy-course-section').value,
            timestamp: serverTimestamp(), // Firestore 서버 타임스탬프
        };

        try {
            await addDoc(collection(db, 'posts'), newPost); // Firestore에 문서 추가
            alert('질문이 성공적으로 등록되었습니다.');
            newPostForm.reset();
            postImagePreview.src = '#';
            postImagePreview.style.display = 'none';
            uploadedImageBase64 = null;
            postFormModal.style.display = 'none';
            body.style.overflow = ''; // 게시글 제출 후 모달 닫힐 때 body 스크롤 복원
            // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
        } catch (error) {
            console.error("Error adding document: ", error);
            alert('질문 등록에 실패했습니다. 관리자에게 문의하세요.');
        }
    });

    // 댓글 추가 함수
    async function addComment(postId, nickname, password, content, commentForm) { // async 추가 및 파라미터 변경
        const newComment = {
            nickname: nickname,
            password: password, // 실제 서비스 시 해싱 필수!
            content: content,
            timestamp: serverTimestamp()
        };

        try {
            await addDoc(collection(db, 'posts', postId, 'comments'), newComment); // 특정 게시글의 서브컬렉션에 댓글 추가
            alert('댓글이 성공적으로 등록되었습니다.');
            commentForm.reset();
            // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
        } catch (error) {
            console.error("Error adding comment: ", error);
            alert('댓글 등록에 실패했습니다. 관리자에게 문의하세요.');
        }
    }

    // 비밀번호 확인 모달 표시 함수
    function showPasswordModal(itemId, type, action, commentId = null) {
        modalPasswordCheck.style.display = 'flex';
        body.style.overflow = 'hidden'; // 비밀번호 모달 열릴 때 body 스크롤 숨김

        const modalPasswordInput = document.getElementById('modal-password');
        const modalConfirmButton = document.getElementById('modal-confirm');
        const modalCancelButton = document.getElementById('modal-cancel');
        modalPasswordInput.value = '';

        // 기존 이벤트 리스너 중복 방지를 위해 초기화
        modalConfirmButton.onclick = null;
        modalCancelButton.onclick = null;

        modalConfirmButton.onclick = async () => { // async 추가
            const enteredPassword = modalPasswordInput.value.trim(); // .trim() 적용

            if (type === 'post') {
                try {
                    const postRef = doc(db, 'posts', itemId);
                    const postDoc = await getDoc(postRef); // getDoc 임포트 필요

                    if (!postDoc.exists()) {
                        alert('게시글을 찾을 수 없습니다.');
                        modalPasswordCheck.style.display = 'none';
                        body.style.overflow = '';
                        return;
                    }
                    const postData = postDoc.data();

                    if (postData.password === enteredPassword) {
                        if (action === 'edit') {
                            editPost(itemId); // editPost 함수는 이미 prompt로 비밀번호 받지 않도록 수정했음
                        } else if (action === 'delete') {
                            deletePost(itemId);
                        }
                    } else {
                        alert('비밀번호가 일치하지 않습니다.');
                    }
                } catch (error) {
                    console.error("Error fetching post for password check: ", error);
                    alert('오류가 발생했습니다. 다시 시도해 주세요.');
                }
            } else if (type === 'comment') {
                try {
                    const postRef = doc(db, 'posts', itemId);
                    const commentRef = doc(postRef, 'comments', commentId);
                    const commentDoc = await getDoc(commentRef); // getDoc 임포트 필요

                    if (!commentDoc.exists()) {
                        alert('댓글을 찾을 수 없습니다.');
                        modalPasswordCheck.style.display = 'none';
                        body.style.overflow = '';
                        return;
                    }
                    const commentData = commentDoc.data();

                    if (commentData.password === enteredPassword) {
                        if (action === 'edit') {
                            editComment(itemId, commentId);
                        } else if (action === 'delete') {
                            deleteComment(itemId, commentId);
                        }
                    } else {
                        alert('비밀번호가 일치하지 않습니다.');
                    }
                } catch (error) {
                    console.error("Error fetching comment for password check: ", error);
                    alert('오류가 발생했습니다. 다시 시도해 주세요.');
                }
            }
            // 비밀번호 확인 로직 완료 후 모달 닫기 (비밀번호 일치 여부와 관계없이)
            modalPasswordCheck.style.display = 'none';
            body.style.overflow = ''; // 비밀번호 모달 닫힐 때 body 스크롤 복원
        };

        modalCancelButton.onclick = () => {
            modalPasswordCheck.style.display = 'none';
            body.style.overflow = ''; // 비밀번호 모달 취소 시 body 스크롤 복원
        };
    }

    // 게시글 수정 함수
    async function editPost(postId) { // async 추가
        const post = posts.find(p => p.id === postId); // posts 배열은 onSnapshot으로 최신 상태 유지
        if (!post) return;

        // 비밀번호는 showPasswordModal에서 이미 검증되었으므로 여기서는 다시 묻지 않습니다.
        const newTitle = prompt('새 제목을 입력하세요:', post.title);
        const newContent = prompt('새 내용을 입력하세요:', post.content);
        const newCourseName = prompt('새 Udemy 강의명 (선택 사항):', post.udemyCourseName || '');
        const newCourseUrl = prompt('새 Udemy 강의 URL (선택 사항):', post.udemyCourseUrl || '');
        const newCourseSection = prompt('새 강의 섹션/위치 (선택 사항):', post.udemyCourseSection || '');
        const newImage = prompt('새 이미지 URL을 입력하거나 비워두면 삭제됩니다 (현재: ' + (post.image || '없음') + '):', post.image || '');

        if (newTitle !== null && newContent !== null) {
            try {
                await updateDoc(doc(db, 'posts', postId), {
                    title: newTitle,
                    content: newContent,
                    udemyCourseName: newCourseName,
                    udemyCourseUrl: newCourseUrl,
                    udemyCourseSection: newCourseSection,
                    image: newImage
                });
                alert('게시글이 수정되었습니다.');
                // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
            } catch (error) {
                console.error("Error updating document: ", error);
                alert('게시글 수정에 실패했습니다.');
            }
        }
    }

    // 게시글 삭제 함수
    async function deletePost(postId) { // async 추가
        // 비밀번호는 showPasswordModal에서 이미 검증되었으므로 여기서는 다시 묻지 않습니다.
        if (confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
            try {
                // 해당 게시글의 모든 서브컬렉션(댓글) 삭제
                const commentsRef = collection(db, 'posts', postId, 'comments');
                const commentsSnapshot = await getDocs(commentsRef);
                // Firestore는 서브컬렉션을 자동으로 삭제하지 않으므로, 모든 댓글을 수동으로 삭제
                for (const commentDoc of commentsSnapshot.docs) {
                    await deleteDoc(doc(db, 'posts', postId, 'comments', commentDoc.id));
                }

                await deleteDoc(doc(db, 'posts', postId)); // 게시글 문서 삭제
                alert('게시글이 삭제되었습니다.');
                // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
            } catch (error) {
                console.error("Error deleting document: ", error);
                alert('게시글 삭제에 실패했습니다.');
            }
        }
    }

    // 댓글 수정 함수
    async function editComment(postId, commentId) { // async 추가
        const postRef = doc(db, 'posts', postId);
        const commentRef = doc(postRef, 'comments', commentId);

        try {
            const commentDoc = await getDoc(commentRef);
            if (!commentDoc.exists()) {
                alert('댓글을 찾을 수 없습니다.');
                return;
            }
            const commentData = commentDoc.data();

            // 비밀번호는 showPasswordModal에서 이미 검증되었으므로 여기서는 다시 묻지 않습니다.
            const newContent = prompt('새 댓글 내용을 입력하세요:', commentData.content);

            if (newContent !== null) {
                await updateDoc(commentRef, { content: newContent });
                alert('댓글이 수정되었습니다.');
                // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
            }
        } catch (error) {
            console.error("Error updating comment: ", error);
            alert('댓글 수정에 실패했습니다.');
        }
    }

    // 댓글 삭제 함수
    async function deleteComment(postId, commentId) { // async 추가
        if (confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
            const postRef = doc(db, 'posts', postId);
            const commentRef = doc(postRef, 'comments', commentId);

            try {
                // 비밀번호는 showPasswordModal에서 이미 검증되었으므로 여기서는 다시 묻지 않습니다.
                await deleteDoc(commentRef);
                alert('댓글이 삭제되었습니다.');
                // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
            } catch (error) {
                console.error("Error deleting comment: ", error);
                alert('댓글 삭제에 실패했습니다.');
            }
        }
    }

    // ★★★ 이벤트 리스너 추가 (모달 열기/닫기) ★★★
    openPostFormButton.addEventListener('click', () => {
        body.style.overflow = 'hidden'; // 모달 열릴 때 body 스크롤 숨김
        
        // setTimeout은 더 이상 필요하지 않을 수 있습니다.
        // 현재는 요청에 따라 유지하되, 필요 없으면 삭제해도 됩니다.
        setTimeout(() => {
            postFormModal.style.display = 'flex'; 
        }, 50); 
        
        newPostForm.reset();
        postImagePreview.src = '#';
        postImagePreview.style.display = 'none';
        uploadedImageBase64 = null;
    });

    closeModalButton.addEventListener('click', () => {
        postFormModal.style.display = 'none';
        body.style.overflow = ''; // 모달 닫힐 때 body 스크롤 복원
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target === postFormModal) {
            postFormModal.style.display = 'none';
            body.style.overflow = ''; // 모달 외부 클릭 시 닫힐 때도 복원
        }
    });

    // 초기 로드: Firebase onSnapshot 리스너가 게시글을 불러와 renderPosts를 호출합니다.
    // 따라서 이 renderPosts() 초기 호출은 필요 없습니다.
    // renderPosts(); 
});