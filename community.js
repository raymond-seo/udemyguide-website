// 필요한 Firebase SDK 함수들을 가져옵니다.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // 애널리틱스를 사용하지 않으면 이 줄은 제거해도 됩니다.
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    getDoc, // 특정 문서(게시글/댓글)를 가져오기 위해 임포트
    doc,
    updateDoc,
    deleteDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp // 서버 타임스탬프를 사용하기 위해 임포트
} from "firebase/firestore";


// 여러분의 웹 앱 Firebase 설정 (Firebase 콘솔에서 가져온 정보)
const firebaseConfig = {
  apiKey: "AIzaSyDBvmvQ1hUtO0E8umAPGlbAhe3rVdqu5lQ",
  authDomain: "mktdash-940f1.firebaseapp.com",
  projectId: "mktdash-940f1",
  storageBucket: "mktdash-940f1.firebasestorage.app",
  messagingSenderId: "157652211467",
  appId: "1:157652211467:web:2d296b31255efbec15340e",
  measurementId: "G-V992ECHF0V" // 선택 사항, getAnalytics를 사용하지 않으면 이 줄도 제거
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // 선택 사항, 사용하지 않으면 이 줄도 제거

// Firestore 서비스 인스턴스 가져오기
const db = getFirestore(app);


document.addEventListener('DOMContentLoaded', () => {
    const newPostForm = document.getElementById('new-post-form');
    const postsContainer = document.getElementById('posts-container');
    const noPostsMessage = document.querySelector('.no-posts-message');

    // 모달 관련 DOM 요소들
    const postFormModal = document.getElementById('post-form-modal');
    const openPostFormButton = document.getElementById('open-post-form-button');
    const closeModalButton = postFormModal.querySelector('.close-button');
    const modalPasswordCheck = document.getElementById('password-check-modal');

    // 페이지네이션 관련 DOM 요소
    const paginationControls = document.getElementById('pagination-controls');

    // body 요소 참조 (스크롤 제어용)
    const body = document.body;

    // 햄버거 메뉴 작동
    const hamburgerButton = document.querySelector('.hamburger-menu-button');
    const mainNav = document.querySelector('.main-nav');
    // 메뉴가 열렸을 때 배경을 덮을 오버레이 추가 (JS에서 생성)
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);
    // 햄버거 메뉴 작동


    const postsPerPage = 10; // 페이지당 게시글 수
    let currentPage = 1; // 현재 페이지 번호 (1부터 시작)

    // posts 배열은 Firestore onSnapshot 리스너에 의해 실시간으로 채워집니다.
    let posts = [];

    // ★★★ 게시글 작성/수정 모달 상태 관리 변수 ★★★
    let isEditingPost = false; // 현재 모달이 게시글 수정 모드인지 여부
    let currentEditingPostId = null; // 현재 수정 중인 게시글의 Firestore 문서 ID

    // ★★★ 게시글 폼 모달 열기 및 초기화/내용 채우기 함수 ★★★
    // post 객체가 전달되면 수정 모드, 없으면 새 글 작성 모드로 작동
    function openPostFormModalForEdit(post = null) {
        newPostForm.reset(); // 폼 필드 초기화
        document.getElementById('post-password').value = ''; // 비밀번호 필드는 항상 비워둡니다.
        
        postImagePreview.src = '#'; // 이미지 미리보기 초기화
        postImagePreview.style.display = 'none';
        uploadedImageBase64 = null; // 업로드된 이미지 데이터 초기화 (File Reader에서 채워짐)

        const modalTitleElement = postFormModal.querySelector('h3');
        const submitButton = newPostForm.querySelector('button[type="submit"]');

        if (post) { // 수정 모드 (post 객체가 전달된 경우)
            isEditingPost = true;
            currentEditingPostId = post.id; // 수정할 게시글의 ID 저장
            modalTitleElement.textContent = '질문 수정하기';
            submitButton.textContent = '수정 완료';

            // 기존 게시글 데이터로 폼 필드 채우기
            document.getElementById('post-nickname').value = post.nickname || '';
            document.getElementById('post-title').value = post.title || '';
            document.getElementById('post-content').value = post.content || '';
            if (post.image) { // 기존 이미지가 있다면 미리보기 표시
                postImagePreview.src = post.image;
                postImagePreview.style.display = 'block';
                uploadedImageBase64 = post.image; // 기존 이미지 데이터 유지
            }
            document.getElementById('udemy-course-name').value = post.udemyCourseName || '';
            document.getElementById('udemy-course-url').value = post.udemyCourseUrl || '';
            document.getElementById('udemy-course-section').value = post.udemyCourseSection || '';

        } else { // 새 글 작성 모드 (post 객체가 없는 경우)
            isEditingPost = false;
            currentEditingPostId = null;
            modalTitleElement.textContent = '새 질문 작성하기';
            submitButton.textContent = '질문 등록';
        }

        body.style.overflow = 'hidden'; // 모달이 뜨면 배경 스크롤 잠금
        postFormModal.style.display = 'flex'; // 모달 표시
    }

    // 모바일 내비게이션 토글 함수
    function toggleMobileNav() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        // body 스크롤 제어
        if (mainNav.classList.contains('active')) {
            body.style.overflow = 'hidden'; // 메뉴가 열리면 스크롤 잠금
        } else {
            body.style.overflow = ''; // 메뉴가 닫히면 스크롤 해제
        }
    }

    // 게시글 렌더링 함수
    function renderPosts() {
        postsContainer.innerHTML = ''; // 기존 게시글 목록 비우기
        const startIndex = (currentPage - 1) * postsPerPage;
        const postsToRender = posts.slice(startIndex, startIndex + postsPerPage);

        if (posts.length === 0) { // 게시글이 하나도 없을 때 메시지 표시
            noPostsMessage.style.display = 'block';
            paginationControls.style.display = 'none'; // 페이지네이션 숨김
            return;
        } else {
            noPostsMessage.style.display = 'none';
            paginationControls.style.display = 'flex'; // 페이지네이션 표시
        }

        postsToRender.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post-card');
            postElement.dataset.id = post.id; // Firestore 문서 ID를 data-id로 설정

            // 게시글 내용과 이미지 HTML 구성
            const postContentHtml = post.content.replace(/\n/g, '<br>') +
                                     (post.image ? `<img src="${post.image}" alt="${post.title} 이미지">` : '');

            // 강의명 표시 (선택 사항)
            const courseTitleDisplay = post.udemyCourseName ? `<span class="course-title-display">(${post.udemyCourseName})</span>` : '';

            // Firestore 타임스탬프를 로컬 시간 문자열로 변환하여 표시
            const displayDate = post.timestamp && typeof post.timestamp.toDate === 'function'
                                ? new Date(post.timestamp.toDate()).toLocaleString()
                                : '날짜 없음';

            // 강의 정보 섹션 HTML 구성
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
                            ${(post.comments || []).map(comment => {
                                const commentDisplayDate = comment.timestamp && typeof comment.timestamp.toDate === 'function'
                                                           ? new Date(comment.timestamp.toDate()).toLocaleString()
                                                           : '날짜 없음';
                                return `
                                <div class="comment-card">
                                    <p class="meta">작성자: ${comment.nickname} | 날짜: ${commentDisplayDate}</p>
                                    <p>${comment.content.replace(/\n/g, '<br>')}</p>
                                    <div class="comment-actions">
                                        <button class="edit-comment" data-comment-id="${comment.id}">수정</button>
                                        <button class="delete-comment delete" data-comment-id="${comment.id}">삭제</button>
                                    </div>
                                </div>
                                `;
                            }).join('')}
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

            // 아코디언 토글 이벤트 리스너
            postElement.querySelector('.post-card-header').addEventListener('click', () => {
                postElement.classList.toggle('active');
                const contentWrapper = postElement.querySelector('.post-card-content-wrapper');
                const icon = postElement.querySelector('.accordion-icon');
                if (postElement.classList.contains('active')) {
                    contentWrapper.style.maxHeight = contentWrapper.scrollHeight + "px"; // 실제 높이로 설정하여 펼침
                    icon.textContent = '➖️';
                } else {
                    contentWrapper.style.maxHeight = '0'; // 닫힘
                    icon.textContent = '➕️';
                }
            });

            // 댓글 폼 제출 이벤트 리스너
            const commentForm = postElement.querySelector('.comment-form');
            commentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                // 폼 필드 값 가져오기 및 공백 제거
                const nickname = commentForm.querySelector(`#comment-nickname-${post.id}`).value.trim();
                const password = commentForm.querySelector(`#comment-password-${post.id}`).value.trim();
                const content = commentForm.querySelector(`#comment-content-${post.id}`).value;
                addComment(post.id, nickname, password, content, commentForm);
            });

            // 게시글 수정/삭제 버튼 이벤트 리스너
            postElement.querySelector('.edit-post').addEventListener('click', (e) => {
                e.stopPropagation(); // 부모 요소의 아코디언 토글 방지
                showPasswordModal(post.id, 'post', 'edit');
            });
            postElement.querySelector('.delete-post').addEventListener('click', (e) => {
                e.stopPropagation(); // 부모 요소의 아코디언 토글 방지
                showPasswordModal(post.id, 'post', 'delete');
            });

            // 댓글 수정/삭제 버튼 이벤트 리스너
            postElement.querySelectorAll('.edit-comment').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // 부모 요소의 아코디언 토글 방지
                    const commentId = e.target.dataset.commentId;
                    showPasswordModal(post.id, 'comment', 'edit', commentId);
                });
            });
            postElement.querySelectorAll('.delete-comment').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.stopPropagation(); // 부모 요소의 아코디언 토글 방지
                    const commentId = e.target.dataset.commentId;
                    showPasswordModal(post.id, 'comment', 'delete', commentId);
                });
            });
        });
        renderPaginationControls(); // 게시글 렌더링 후 페이지네이션 컨트롤 업데이트
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

        // '이전' 페이지 버튼
        const prevButton = document.createElement('button');
        prevButton.textContent = '◀';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderPosts();
            window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' }); // 게시글 목록 상단으로 스크롤
        });
        paginationControls.appendChild(prevButton);

        // 페이지 번호 버튼
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.classList.toggle('active', i === currentPage); // 현재 페이지 활성화 표시
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPosts();
                window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' }); // 게시글 목록 상단으로 스크롤
            });
            paginationControls.appendChild(pageButton);
        }

        // '다음' 페이지 버튼
        const nextButton = document.createElement('button');
        nextButton.textContent = '▶';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderPosts();
            window.scrollTo({ top: postsContainer.offsetTop, behavior: 'smooth' }); // 게시글 목록 상단으로 스크롤
        });
        paginationControls.appendChild(nextButton);
    }

    // 이미지 파일 로드 및 미리보기 기능
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

    // 새 게시글 추가 또는 기존 게시글 수정 로직
    newPostForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const postData = {
            nickname: document.getElementById('post-nickname').value.trim(),
            password: document.getElementById('post-password').value.trim(), // 실제 서비스 시에는 비밀번호 해싱 필수!
            title: document.getElementById('post-title').value,
            content: document.getElementById('post-content').value,
            image: uploadedImageBase64, // Base64 문자열 또는 이미지 URL을 가정
            udemyCourseName: document.getElementById('udemy-course-name').value,
            udemyCourseUrl: document.getElementById('udemy-course-url').value,
            udemyCourseSection: document.getElementById('udemy-course-section').value,
        };

        if (isEditingPost) { // 수정 모드일 경우
            try {
                // (showPasswordModal에서 이미 비밀번호 검증되었지만, 폼 제출 시 다시 한번 확인하는 것이 안전)
                const enteredPassword = document.getElementById('post-password').value.trim();
                const originalPostRef = doc(db, 'posts', currentEditingPostId);
                const originalPostDoc = await getDoc(originalPostRef);
                const originalPostData = originalPostDoc.data();

                if (originalPostData.password === enteredPassword) { // 비밀번호 일치 시
                    await updateDoc(originalPostRef, postData); // Firestore 문서 업데이트
                    alert('게시글이 성공적으로 수정되었습니다.');
                } else {
                    alert('비밀번호가 일치하지 않습니다. 수정에 실패했습니다.');
                }
            } catch (error) {
                console.error("게시글 업데이트 중 오류 발생: ", error);
                alert('게시글 수정에 실패했습니다. 관리자에게 문의하세요.');
            }
        } else { // 새 글 작성 모드일 경우
            postData.timestamp = serverTimestamp(); // 새 글에는 서버 타임스탬프 추가
            try {
                await addDoc(collection(db, 'posts'), postData); // Firestore에 새 문서 추가
                alert('질문이 성공적으로 등록되었습니다.');
            } catch (error) {
                console.error("새 문서 추가 중 오류 발생: ", error);
                alert('질문 등록에 실패했습니다. 관리자에게 문의하세요.');
            }
        }

        // 공통적으로 모달 닫기 및 폼 초기화
        newPostForm.reset();
        postImagePreview.src = '#';
        postImagePreview.style.display = 'none';
        uploadedImageBase64 = null;
        postFormModal.style.display = 'none';
        body.style.overflow = ''; // 배경 스크롤 복원
        // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출할 필요 없음
    });


    // 댓글 추가 함수
    async function addComment(postId, nickname, password, content, commentForm) {
        const newComment = {
            nickname: nickname,
            password: password, // 실제 서비스 시에는 비밀번호 해싱 필수!
            content: content,
            timestamp: serverTimestamp() // 서버 타임스탬프
        };

        try {
            await addDoc(collection(db, 'posts', postId, 'comments'), newComment); // 특정 게시글의 서브컬렉션에 댓글 추가
            alert('댓글이 성공적으로 등록되었습니다.');
            commentForm.reset(); // 댓글 폼 초기화
            // onSnapshot 리스너가 자동 업데이트하므로 renderPosts() 직접 호출 필요 없음
        } catch (error) {
            console.error("댓글 추가 중 오류 발생: ", error);
            alert('댓글 등록에 실패했습니다. 관리자에게 문의하세요.');
        }
    }

    // 비밀번호 확인 모달 표시 및 작업 처리 함수
    function showPasswordModal(itemId, type, action, commentId = null) {
        modalPasswordCheck.style.display = 'flex'; // 비밀번호 모달 표시
        body.style.overflow = 'hidden'; // 배경 스크롤 잠금

        const modalPasswordInput = document.getElementById('modal-password');
        const modalConfirmButton = document.getElementById('modal-confirm');
        const modalCancelButton = document.getElementById('modal-cancel');
        modalPasswordInput.value = ''; // 비밀번호 입력 필드 초기화

        // 기존 이벤트 리스너 중복 방지를 위해 초기화
        modalConfirmButton.onclick = null;
        modalCancelButton.onclick = null;

        modalConfirmButton.onclick = async () => {
            const enteredPassword = modalPasswordInput.value.trim(); // 입력된 비밀번호 공백 제거

            if (type === 'post') { // 게시글 작업 (수정/삭제)
                try {
                    const postRef = doc(db, 'posts', itemId);
                    const postDoc = await getDoc(postRef); // Firestore에서 게시글 문서 가져오기

                    if (!postDoc.exists()) { // 게시글이 존재하지 않으면
                        alert('게시글을 찾을 수 없습니다.');
                        modalPasswordCheck.style.display = 'none';
                        body.style.overflow = '';
                        return;
                    }
                    const postData = postDoc.data();

                    if (postData.password === enteredPassword) { // 비밀번호 일치
                        if (action === 'edit') {
                            modalPasswordCheck.style.display = 'none'; // 비밀번호 모달 닫기
                            body.style.overflow = ''; // 배경 스크롤 복원
                            // 게시글 수정 모드로 메인 작성 모달 열기 (기존 데이터 채움)
                            openPostFormModalForEdit({ id: itemId, ...postData });
                        } else if (action === 'delete') {
                            modalPasswordCheck.style.display = 'none'; // 비밀번호 모달 닫기
                            body.style.overflow = ''; // 배경 스크롤 복원
                            deletePost(itemId); // 게시글 삭제 함수 호출
                        }
                    } else { // 비밀번호 불일치
                        alert('비밀번호가 일치하지 않습니다.');
                        modalPasswordCheck.style.display = 'none'; // 모달 닫기
                        body.style.overflow = '';
                    }
                } catch (error) {
                    console.error("게시글 비밀번호 확인 중 오류 발생: ", error);
                    alert('오류가 발생했습니다. 다시 시도해 주세요.');
                    modalPasswordCheck.style.display = 'none';
                    body.style.overflow = '';
                }
            } else if (type === 'comment') { // 댓글 작업 (수정/삭제)
                try {
                    const postRef = doc(db, 'posts', itemId);
                    const commentRef = doc(postRef, 'comments', commentId);
                    const commentDoc = await getDoc(commentRef); // Firestore에서 댓글 문서 가져오기

                    if (!commentDoc.exists()) { // 댓글이 존재하지 않으면
                        alert('댓글을 찾을 수 없습니다.');
                        modalPasswordCheck.style.display = 'none';
                        body.style.overflow = '';
                        return;
                    }
                    const commentData = commentDoc.data();

                    if (commentData.password === enteredPassword) { // 비밀번호 일치
                        if (action === 'edit') {
                            // 현재 댓글 수정은 prompt로 새 내용을 입력받음
                            modalPasswordCheck.style.display = 'none';
                            body.style.overflow = '';
                            editComment(itemId, commentId);
                        } else if (action === 'delete') {
                            modalPasswordCheck.style.display = 'none';
                            body.style.overflow = '';
                            deleteComment(itemId, commentId); // 댓글 삭제 함수 호출
                        }
                    } else { // 비밀번호 불일치
                        alert('비밀번호가 일치하지 않습니다.');
                        modalPasswordCheck.style.display = 'none';
                        body.style.overflow = '';
                    }
                } catch (error) {
                    console.error("댓글 비밀번호 확인 중 오류 발생: ", error);
                    alert('오류가 발생했습니다. 다시 시도해 주세요.');
                    modalPasswordCheck.style.display = 'none';
                    body.style.overflow = '';
                }
            }
        };

        // 비밀번호 모달 취소 버튼 클릭 시
        modalCancelButton.onclick = () => {
            modalPasswordCheck.style.display = 'none';
            body.style.overflow = ''; // 배경 스크롤 복원
        };
    }

    // 게시글 수정 함수 (이제 showPasswordModal에서 openPostFormModalForEdit를 직접 호출하므로,
    // 이 함수는 게시글 수정 로직을 실제로 처리하지는 않고, 주로 디버깅/참고용으로 남겨둡니다.)
    async function editPost(postId) {
        console.log(`게시글 ${postId} 수정 로직 시작 (UI는 모달로 위임).`);
        // 실제 수정 UI는 openPostFormModalForEdit({ id: postId, ...postData }) 호출을 통해 이루어집니다.
    }

    // 게시글 삭제 함수
    async function deletePost(postId) {
        if (confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
            try {
                // 해당 게시글의 모든 서브컬렉션(댓글)을 먼저 삭제해야 합니다.
                // Firestore는 서브컬렉션을 자동으로 삭제하지 않습니다.
                const commentsRef = collection(db, 'posts', postId, 'comments');
                const commentsSnapshot = await getDocs(commentsRef);
                for (const commentDoc of commentsSnapshot.docs) {
                    await deleteDoc(doc(db, 'posts', postId, 'comments', commentDoc.id));
                }

                await deleteDoc(doc(db, 'posts', postId)); // 게시글 문서 삭제
                alert('게시글이 삭제되었습니다.');
            } catch (error) {
                console.error("게시글 삭제 중 오류 발생: ", error);
                alert('게시글 삭제에 실패했습니다. 관리자에게 문의하세요.');
            }
        }
    }

    // 댓글 수정 함수 (현재는 prompt를 사용하여 새 내용을 입력받습니다.)
    async function editComment(postId, commentId) {
        const postRef = doc(db, 'posts', postId);
        const commentRef = doc(postRef, 'comments', commentId);

        try {
            const commentDoc = await getDoc(commentRef);
            if (!commentDoc.exists()) {
                alert('댓글을 찾을 수 없습니다.');
                return;
            }
            const commentData = commentDoc.data();

            const newContent = prompt('새 댓글 내용을 입력하세요:', commentData.content);

            if (newContent !== null) { // 사용자가 prompt에서 '취소'를 누르지 않았다면
                await updateDoc(commentRef, { content: newContent });
                alert('댓글이 수정되었습니다.');
            }
        } catch (error) {
            console.error("댓글 수정 중 오류 발생: ", error);
            alert('댓글 수정에 실패했습니다. 관리자에게 문의하세요.');
        }
    }

    // 댓글 삭제 함수
    async function deleteComment(postId, commentId) {
        if (confirm('정말로 이 댓글을 삭제하시겠습니까?')) {
            const postRef = doc(db, 'posts', postId);
            const commentRef = doc(postRef, 'comments', commentId);

            try {
                await deleteDoc(commentRef); // 댓글 문서 삭제
                alert('댓글이 삭제되었습니다.');
            } catch (error) {
                console.error("댓글 삭제 중 오류 발생: ", error);
                alert('댓글 삭제에 실패했습니다. 관리자에게 문의하세요.');
            }
        }
    }

    // ★★★ Firestore 게시글 실시간 리스너 (DOM Content Loaded 시점부터 시작) ★★★
    // 이 리스너가 Firebase 데이터 변경을 감지하고 posts 배열을 업데이트하며 renderPosts()를 호출하여 UI를 갱신합니다.
    onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), async (snapshot) => {
        posts = []; // 기존 posts 배열 초기화
        const fetchCommentsPromises = []; // 각 게시글의 댓글을 비동기로 가져올 Promise들을 저장할 배열

        for (const postDoc of snapshot.docs) { // 각 게시글 문서에 대해 반복
            const postData = postDoc.data();
            const postId = postDoc.id;

            // 각 게시글에 대한 댓글 서브컬렉션에서 댓글을 가져오는 Promise 생성
            const commentsPromise = getDocs(query(collection(postDoc.ref, 'comments'), orderBy('timestamp', 'asc')))
                .then(commentsSnapshot => {
                    return commentsSnapshot.docs.map(commentDoc => ({
                        id: commentDoc.id, // 댓글 문서의 ID도 포함
                        ...commentDoc.data()
                    }));
                })
                .catch(error => {
                    console.error(`게시글 ${postId}의 댓글을 가져오는 중 오류 발생: `, error);
                    return []; // 오류 발생 시 빈 배열 반환하여 Promise.all을 방해하지 않음
                });

            fetchCommentsPromises.push(commentsPromise); // Promise 배열에 추가
            // posts 배열에 게시글 데이터만 먼저 추가하고, comments는 임시로 빈 배열로 둡니다.
            // 모든 commentsPromise가 완료된 후 comments 배열이 채워질 것입니다.
            posts.push({ id: postId, ...postData, comments: [] });
        }

        // 모든 댓글 가져오기 Promise들이 완료될 때까지 기다림 (비동기 병렬 처리)
        const allComments = await Promise.all(fetchCommentsPromises);

        // posts 배열에 각 게시글에 해당하는 댓글 데이터 채워넣기
        allComments.forEach((comments, index) => {
            posts[index].comments = comments;
        });

        currentPage = 1; // 새로운 데이터가 로드되면 페이지네이션을 위해 현재 페이지를 첫 페이지로 재설정
        renderPosts(); // 데이터가 업데이트되면 게시글 목록 다시 렌더링
    }, error => {
        console.error("Firestore에서 게시글을 가져오는 중 오류 발생: ", error);
        alert("게시글을 불러오는 데 오류가 발생했습니다. 네트워크 연결을 확인하거나 관리자에게 문의하세요.");
    });


    // ★★★ 이벤트 리스너들 ★★★

    // '새 질문 작성하기' 버튼 클릭 시
    openPostFormButton.addEventListener('click', () => {
        openPostFormModalForEdit(); // 새 글 작성 모드로 모달 열기
    });

    // 모달 닫기 버튼 (X 버튼) 클릭 시
    closeModalButton.addEventListener('click', () => {
        postFormModal.style.display = 'none';
        body.style.overflow = ''; // 배경 스크롤 복원
    });

    // 모달 외부 영역 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target === postFormModal) {
            postFormModal.style.display = 'none';
            body.style.overflow = ''; // 배경 스크롤 복원
        }
    });

    // 햄버거 버튼 클릭 이벤트
    hamburgerButton.addEventListener('click', toggleMobileNav);

    // 오버레이 클릭 이벤트 (메뉴 닫기)
    overlay.addEventListener('click', toggleMobileNav);

    // 내비게이션 메뉴 항목 클릭 시 메뉴 닫기 (anchor 링크에만 적용)
    // .main-nav 내의 모든 링크에 이벤트 리스너를 추가
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // 외부 링크나 다른 HTML 페이지로 이동하는 링크는 제외 (새로고침되므로)
            // 현재 페이지 내의 섹션으로 이동하는 (hash 링크) 경우에만 메뉴 닫기
            // community 페이지에서는 모든 메뉴가 다른 페이지로 이동하므로,
            // 이 페이지에서는 단순히 클릭 시 메뉴를 닫도록 합니다.
            toggleMobileNav();
        });
    });


    // 페이지 초기 로드 시 renderPosts()를 직접 호출할 필요 X
    // 위에 있는 Firestore onSnapshot 리스너가 초기 데이터를 불러와 자동으로 renderPosts를 호출
});