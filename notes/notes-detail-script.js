document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu-button');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // 메뉴가 열렸을 때 배경을 덮을 오버레이 추가 (JS에서 생성)
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    // 모바일 내비게이션 토글 함수
    function toggleMobileNav() {
        mainNav.classList.toggle('active');
        overlay.classList.toggle('active');
        if (mainNav.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    }

    // 햄버거 버튼 클릭 이벤트
    if (hamburgerButton) { // 버튼이 존재할 때만 이벤트 리스너 추가 (안전 장치)
        hamburgerButton.addEventListener('click', toggleMobileNav);
    }

    // 오버레이 클릭 이벤트 (메뉴 닫기)
    if (overlay) {
        overlay.addEventListener('click', toggleMobileNav);
    }

    // 메뉴 항목 클릭 시 메뉴 닫기 (현재 페이지는 Notes 글이므로, 모든 링크는 외부로 이동하거나 메인 페이지로 이동)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Notes 글 페이지에서는 대부분의 메뉴가 다른 페이지로 이동하므로,
            // 클릭 시 메뉴를 닫아주는 것이 사용자 경험에 좋습니다.
            toggleMobileNav();
        });
    });
});