// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // 프로젝트 루트가 웹 서버의 루트가 됨
  build: {
    outDir: 'dist', // 번들링된 파일이 저장될 폴더 (기본값)
    rollupOptions: {
      input: {
        main: './index.html', // index.html을 진입점으로 설정
        community: './community.html' // community.html도 진입점으로 설정 (여러 페이지인 경우)
      },
    },
  },
  // 개발 서버 설정
  server: {
    open: '/community.html' // 개발 서버 시작 시 자동으로 community.html 열기
  }
});