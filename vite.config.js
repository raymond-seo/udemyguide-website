// vite.config.js
import { defineConfig } from 'vite';

// Vite 설정을 정의합니다.
export default defineConfig({
  // 프로젝트 루트를 설정합니다. (UDEMY GUIDE 폴더)
  root: './', 
  
  build: {
    // 빌드된 파일들이 저장될 폴더 (기본값: dist)
    outDir: 'dist', 
    rollupOptions: {
      // 모든 HTML 파일을 명시적으로 나열하여 Vite가 빌드 대상으로 인식하게 합니다.
      // 각 HTML 파일 내에서 필요한 JS/CSS는 <script type="module" src="..."> 로 연결하면 Vite가 알아서 번들링합니다.
      input: {
        main: './index.html',
        community: './community.html',
        'notes-ai-developer-skills': './notes/ai-developer-skills.html',
        'notes-clean-code-habits': './notes/clean-code-habits.html',
        'notes-data-science-roadmap-start': './notes/data-science-roadmap-start.html',
        'notes-developer-role-in-generative-ai': './notes/developer-role-in-generative-ai.html',
        'notes-frontend-trends-2025': './notes/frontend-trends-2025.html',
        'notes-git-github-guide': './notes/git-github-guide.html',
        'notes-prompt-engineering': './notes/prompt-engineering.html',
        'notes-rest-api-best-practices': './notes/rest-api-best-practices.html',
        'notes-why-nodejs': './notes/why-nodejs.html',
        'notes-why-typescript': './notes/why-typescript.html',
      },
    },
  },
  
  // 개발 서버 설정
  server: {
    // `npm run dev` 실행 시 자동으로 `community.html`을 엽니다.
    open: '/community.html' 
  }
});