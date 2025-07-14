const fs = require('fs'); // 파일 시스템 모듈을 불러옵니다. 파일을 읽거나 쓸 때 사용해요.
const path = require('path'); // 경로 모듈을 불러옵니다. 파일 경로를 다룰 때 유용해요.

const domain = 'https://udemyguide.com'; // 
const notesDirPath = path.join(__dirname, 'notes'); // 'notes' 폴더의 절대 경로를 설정합니다.
const sitemapPath = path.join(__dirname, 'dist', 'sitemap.xml');  // sitemap.xml 파일이 생성될 경로 (프로젝트 루트)를 설정합니다.

// 현재 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
// (sitemap.xml에 <lastmod> 태그에 사용됩니다.)
const getCurrentDate = () => {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // 월이 한 자리 숫자일 때 앞에 0 붙이기 (예: 1월 -> 01)
    const day = String(d.getDate()).padStart(2, '0');     // 일이 한 자리 숫자일 때 앞에 0 붙이기 (예: 5일 -> 05)
    return `${year}-${month}-${day}`;
};

// Sitemap을 생성하는 메인 함수
const generateSitemap = () => {
    // sitemap.xml 파일의 시작 부분과 메인 페이지(홈) 정보
    let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>${domain}/</loc>
        <lastmod>${getCurrentDate()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>\n`; // 메인 페이지(홈)의 URL, 마지막 수정일, 변경 빈도, 우선순위 설정

    // 'notes' 폴더 안의 파일 목록을 읽어옵니다.
    fs.readdir(notesDirPath, (err, files) => {
        if (err) {
            // 'notes' 폴더를 읽는 데 오류가 발생하면 콘솔에 메시지를 출력합니다.
            console.error('Notes 폴더를 읽는 중 오류 발생:', err);
            return; // 함수 실행을 중단합니다.
        }

        // 각 파일을 순회하며 처리합니다.
        files.forEach(file => {
            // 파일 확장자가 '.html'인 경우만 sitemap에 추가합니다.
            if (path.extname(file) === '.html') {
                // 파일 이름에서 '.html' 확장자를 제거합니다.
                const fileNameWithoutExt = path.basename(file, '.html');
                // 최종적으로 웹사이트에서 접근할 'Clean URL'을 만듭니다.
                const url = `${domain}/notes/${fileNameWithoutExt}`;

                // 해당 URL 정보를 sitemapContent에 추가합니다.
                sitemapContent += `    <url>
        <loc>${url}</loc>
        <lastmod>${getCurrentDate()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>\n`; // Notes 글의 URL, 마지막 수정일, 변경 빈도, 우선순위 설정
            }
        });

        sitemapContent += `</urlset>`; // sitemap.xml 파일의 끝 태그

         // ★★★ dist 폴더가 존재하지 않으면 생성합니다. ★★★
        const distDirPath = path.join(__dirname, 'dist');
        if (!fs.existsSync(distDirPath)) {
            fs.mkdirSync(distDirPath);
        }

        fs.writeFile(sitemapPath, sitemapContent, (err) => {
            if (err) {
                console.error('sitemap.xml 파일 생성 중 오류 발생:', err);
            } else {
                console.log('sitemap.xml 파일이 성공적으로 업데이트되었습니다. (경로: dist/sitemap.xml)');
            }
        });
    });
};

// 스크립트가 실행될 때 generateSitemap 함수를 호출합니다.
generateSitemap();