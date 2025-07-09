document.addEventListener('DOMContentLoaded', () => {
    // =======================================================
    // 1. DOM 요소 선택 (스크립트 시작 시 가장 먼저 수행)
    // =======================================================
    const courseListDiv = document.querySelector('.course-list');
    const roadmapCategoryListDiv = document.querySelector('.roadmap-category-list');
    const roadmapDetailDiv = document.getElementById('roadmap-detail');
    const roadmapDetailTitle = document.getElementById('roadmap-detail-title');
    const roadmapDetailDescription = document.getElementById('roadmap-detail-description');
    const roadmapSectionsDiv = document.getElementById('roadmap-sections');
    const backToRoadmapsButton = document.getElementById('backToRoadmaps');
    const roadmapsSection = document.getElementById('roadmaps');
    const notesListDiv = document.querySelector('.notes-list');
    
    // Notes 섹션의 새로운 DOM 요소들
    const loadMoreNotesButton = document.getElementById('loadMoreNotes');
    // filterButtons는 HTML에서 'category-filter' div 안에 있는 버튼들을 선택합니다.
    const filterButtons = document.querySelectorAll('.filter-button'); 

    // =======================================================
    // 2. 데이터 정의 (모든 데이터는 DOMContentLoaded 내부에서 정의)
    // =======================================================

    // --- 최신 추천 강의 데이터 (Udemy Guide) ---
    const courses = [
        {
            id: 1,
            title: "The Web Developer Bootcamp 2025",
            instructor: "Colt Steele",
            description: "웹 개발의 모든 것을 배우는 최고의 부트캠프! 프론트엔드부터 백엔드까지 한 번에.",
            image: "https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg",
            price: "₩17,000",
            link: "https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 2,
            title: "Python for Data Science and Machine Learning Bootcamp",
            instructor: "Jose Portilla",
            description: "파이썬으로 데이터 과학과 머신러닝의 기초를 완벽하게 마스터하세요.",
            image: "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg",
            price: "₩19,000",
            link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 3,
            title: "CSS - The Complete Guide 2025 (incl. Flexbox, Grid & Sass)",
            instructor: "Maximilian Schwarzmüller",
            description: "HTML과 CSS의 심층적인 이해를 통해 웹 디자인 스킬을 향상시키세요.",
            image: "https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg",
            price: "₩12,000",
            link: "https://www.udemy.com/course/the-complete-guide-to-dhtml-and-css/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 4,
            title: "AWS Certified Solutions Architect - Associate",
            instructor: "Stephane Maarek",
            description: "가장 인기 있는 클라우드 자격증, AWS SAA 시험을 위한 완벽 대비 강의.",
            image: "https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg",
            price: "₩22,000",
            link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 5,
            title: "The Complete 2025 Web Development Bootcamp",
            instructor: "Angela Yu",
            description: "풀스택 웹 개발자가 되기 위한 종합 부트캠프. 100일 만에 개발 전문가로 변신!",
            image: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
            price: "₩18,000",
            link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 6,
            title: "【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",
            instructor: "Colt Steele",
            description: "JavaScript로 알고리즘과 자료구조를 깊이 있게 배우고 문제 해결 능력을 키웁니다.",
            image: "https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg",
            price: "₩15,000",
            link: "https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 7,
            title: "Modern React with Redux",
            instructor: "Stephen Grider",
            description: "React와 Redux를 사용하여 현대적인 웹 애플리케이션을 구축하는 방법을 배웁니다.",
            image: "https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg",
            price: "₩20,000",
            link: "https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        },
        {
            id: 8,
            title: "Complete Python Pro Bootcamp for 2025",
            instructor: "Angela Yu",
            description: "파이썬 초보자를 위한 100일 코딩 챌린지. 웹 개발, 게임, 앱 등 다양한 프로젝트를 만듭니다.",
            image: "https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg",
            price: "₩16,000",
            link: "https://www.udemy.com/course/100-days-of-code/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx"
        }
    ];

    // --- 로드맵 데이터 (Udemy Guide의 직무별 학습 로드맵) ---
    const roadmaps = [
        {
            "id": "frontend-developer",
            "title": "프론트엔드 개발자 로드맵",
            "description": "웹사이트의 사용자 인터페이스를 구축하고, 사용자 경험을 책임지는 프론트엔드 개발자가 되기 위한 체계적인 학습 경로입니다. HTML, CSS, JavaScript 기초부터 React/Vue/Angular 프레임워크 활용까지 커버합니다.",
            "image": "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
            "careers": ["웹 개발자", "프론트엔드 엔지니어", "UI 개발자"],
            "sections": [
                {
                    "sectionTitle": "STEP 1: 웹 개발 핵심 기초 (HTML, CSS, JavaScript)",
                    "courses": [
                        {
                            "udemyCourseId": "the-web-developer-bootcamp",
                            "title": "The Web Developer Bootcamp 2025",
                            "instructor": "Colt Steele",
                            "link": "https://www.udemy.com/course/the-web-developer-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "웹 개발의 가장 기본적인 언어인 HTML, CSS, JavaScript를 탄탄하게 배우는 올인원 강의입니다. 웹사이트를 직접 만들어보며 실력을 키울 수 있습니다.",
                            "skills": ["HTML5", "CSS3", "JavaScript (ES6+)"],
                            "image": "https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg"
                        },
                        {
                            "udemyCourseId": "complete-javascript-course",
                            "title": "The Complete JavaScript Course 2025: From Zero to Expert!",
                            "instructor": "Jonas Schmedtmann",
                            "link": "https://www.udemy.com/course/the-complete-javascript-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "자바스크립트의 핵심 개념부터 비동기 프로그래밍, 객체 지향 프로그래밍까지 심도 있게 다룹니다. 실전 프로젝트를 통해 실제 애플리케이션을 개발하는 능력을 길러줍니다.",
                            "skills": ["JavaScript (Advanced)", "DOM Manipulation", "AJAX", "OOP"],
                            "image": "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg"
                        },
                        {
                            "udemyCourseId": "javascript-algorithms-data-structures",
                            "title": "【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스",
                            "instructor": "Colt Steele",
                            "link": "https://www.udemy.com/course/best-javascript-data-structures/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "JavaScript로 알고리즘과 자료구조를 깊이 있게 이해하고, 코딩 테스트 및 문제 해결 능력을 향상시킵니다.",
                            "skills": ["Algorithms", "Data Structures", "Big O Notation"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4305113_68d5_4.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 2: 프레임워크/라이브러리 학습 (React, Vue, Angular)",
                    "courses": [
                        {
                            "udemyCourseId": "react-the-complete-guide",
                            "title": "【한글자막】 React 완벽 가이드 2025 with React Router & Redux",
                            "instructor": "Maximilian Schwarzmüller",
                            "link": "https://www.udemy.com/course/best-react/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "가장 인기 있는 JavaScript 라이브러리인 React를 마스터하세요. Hooks, React Router, Redux 등 최신 기능을 활용하여 복잡한 SPA(Single Page Application)를 구축하는 방법을 배웁니다.",
                            "skills": ["ReactJS", "React Hooks", "Redux", "React Router"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4298905_17e3_2.jpg"
                        },
                        {
                            "udemyCourseId": "vue-js-3-composition-api",
                            "title": "【한글자막】 Vue - 완벽 가이드 (Router 및 Composition API 포함)",
                            "instructor": "Maximilian Schwarzmüller",
                            "link": "https://www.udemy.com/course/vue-router-composition-api/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "Vue.js 3의 모든 것을 배우고, Composition API, Vue Router, Pinia를 활용하여 강력한 웹 애플리케이션을 개발합니다.",
                            "skills": ["Vue.js 3", "Composition API", "Vuex/Pinia", "Vue Router"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4861998_7208_4.jpg"
                        },
                        {
                            "udemyCourseId": "angular-the-complete-guide",
                            "title": "【한글자막】 Angular 완벽 가이드 : 기초 문법부터 TypeScript 기반 최신 문법까지",
                            "instructor": "Maximilian Schwarzmüller",
                            "link": "https://www.udemy.com/course/angular-2021/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "구글의 프레임워크 Angular를 이용해 견고하고 확장 가능한 웹 앱을 만드는 방법을 배웁니다.",
                            "skills": ["Angular", "TypeScript", "RxJS", "NGRX"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4234850_7d29_4.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 3: 심화 학습 및 백엔드 지식",
                    "courses": [
                        {
                            "udemyCourseId": "nextjs-react-nodejs",
                            "title": "【한글자막】 Next.js 15 & React - 완벽 가이드",
                            "instructor": "Maximilian Schwarzmüller",
                            "link": "https://www.udemy.com/course/nextjs-react-incl-two-paths/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "Next.js를 활용하여 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 구현하는 방법을 배우고, 풀스택 애플리케이션을 구축합니다.",
                            "skills": ["Next.js", "SSR", "SSG", "API Routes"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4699864_c9d5_3.jpg"
                        },
                        {
                            "udemyCourseId": "nodejs-express-mongodb",
                            "title": "Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",
                            "instructor": "Jonas Schmedtmann",
                            "link": "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",
                            "skills": ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "data-scientist",
            "title": "데이터 사이언티스트 로드맵",
            "description": "데이터를 수집, 분석, 해석하고 이를 통해 비즈니스 인사이트를 도출하는 데이터 사이언티스트가 되기 위한 학습 경로입니다. 파이썬 기초부터 머신러닝, 딥러닝, 데이터 시각화까지 다룹니다.",
            "image": "https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg",
            "careers": ["데이터 분석가", "머신러닝 엔지니어", "AI 개발자"],
            "sections": [
                {
                    "sectionTitle": "STEP 1: 파이썬 프로그래밍 및 통계 기초",
                    "courses": [
                        {
                            "udemyCourseId": "python-for-data-science",
                            "title": "Python for Data Science and Machine Learning Bootcamp",
                            "instructor": "Jose Portilla",
                            "link": "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "데이터 과학에 필요한 파이썬 기본기를 다지고, Numpy, Pandas, Matplotlib 등 핵심 라이브러리를 배웁니다.",
                            "skills": ["Python", "Numpy", "Pandas", "Matplotlib", "Seaborn"],
                            "image": "https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg"
                        },
                        {
                            "udemyCourseId": "statistics-for-data-science",
                            "title": "Statistics for Data Science and Business Analysis",
                            "instructor": "365 Careers",
                            "link": "https://www.udemy.com/course/statistics-for-data-science-and-business-analysis/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "데이터 과학에 필수적인 통계학 개념을 이해하고, 실제 비즈니스 문제에 적용하는 방법을 배웁니다.",
                            "skills": ["Statistics", "Probability", "Hypothesis Testing", "Regression"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1298780_731f_4.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 2: 머신러닝 및 딥러닝",
                    "courses": [
                        {
                            "udemyCourseId": "machine-learning-a-z",
                            "title": "【한글자막】 머신러닝의 모든 것 with AI, Python & R + ChatGPT Prize [2025]",
                            "instructor": "Kirill Eremenko, Hadelin de Ponteves",
                            "link": "https://www.udemy.com/course/machinelearning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "좋은 성능의 머신러닝 모델을 만들기 위해 반드시 알아야 할 수학적 개념과 30여개 주요 모델 및 이론, 그리고 실습 예제들을 배웁니다.",
                            "skills": ["Machine Learning", "Regression", "Classification", "Scikit-learn"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4294148_ba63_4.jpg"
                        },
                        {
                            "udemyCourseId": "deep-learning-pytorch",
                            "title": "PyTorch for Deep Learning Bootcamp",
                            "instructor": "Andrei Neagoie, Daniel Bourke",
                            "link": "https://www.udemy.com/course/pytorch-for-deep-learning/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "PyTorch 프레임워크를 사용하여 딥러닝 모델을 구축하고 훈련하는 방법을 배웁니다. 이미지 인식, 자연어 처리 등 다양한 딥러닝 프로젝트를 경험합니다.",
                            "skills": ["Deep Learning", "PyTorch", "Neural Networks", "CNN", "RNN", "GANs"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4734870_4de8.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 3: 데이터 시각화 및 배포",
                    "courses": [
                        {
                            "udemyCourseId": "tableau-desktop-mastery",
                            "title": "【한글자막】 태블로 Tableau 완벽 실전 교육! 커리어 업그레이드 하기",
                            "instructor": "Kirill Eremenko",
                            "link": "https://www.udemy.com/course/best-tableau-2020/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "데이터 시각화를 습득하여 고객 구매 행동, 판매 동향, 생산 방해 요소 같은 데이터 패턴을 시각화하는 방법을 배웁니다.",
                            "skills": ["Tableau", "Data Visualization", "Dashboarding"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4294154_9dde_4.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "ui-ux-designer",
            "title": "UI/UX 디자이너 로드맵",
            "description": "사용자에게 직관적이고 만족스러운 경험을 제공하는 UI(사용자 인터페이스)와 UX(사용자 경험)를 디자인하는 전문가가 되기 위한 로드맵입니다. 디자인 원칙부터 툴 활용, 포트폴리오 구축까지 다룹니다.",
            "image": "https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg",
            "careers": ["UI 디자이너", "UX 디자이너", "제품 디자이너"],
            "sections": [
                {
                    "sectionTitle": "STEP 1: 디자인 기초 및 사용자 경험 이해",
                    "courses": [
                        {
                            "udemyCourseId": "ux-ui-design-from-scratch",
                            "title": "Figma + Adobe XD Bootcamp: Learn UI/UX Design A–Z",
                            "instructor": "The Knowledge Hub",
                            "link": "https://www.udemy.com/course/figma-adobe-xd-bootcamp-learn-uiux-design-az/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "UI/UX 디자인의 핵심 원칙을 배우고, Figma, Adobe XD 같은 인기 디자인 툴을 활용하는 방법을 익힙니다.",
                            "skills": ["UI Design", "UX Design", "Figma", "Adobe XD", "Prototyping"],
                            "image": "https://img-c.udemycdn.com/course/240x135/6650391_c37e_2.jpg"
                        },
                        {
                            "udemyCourseId": "design-thinking-process",
                            "title": "Complete Design Thinking Masterclass | eBook included",
                            "instructor": "UX Design Institute",
                            "link": "https://www.udemy.com/course/design-thinking-the-complete-certification-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "디자인 씽킹 프로세스를 통해 사용자 문제를 해결하고 혁신적인 솔루션을 도출하는 방법을 배웁니다.",
                            "skills": ["Design Thinking", "User Research", "Ideation", "Prototyping"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1799242_1268_4.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 2: 인터랙션 디자인 및 포트폴리오",
                    "courses": [
                        {
                            "udemyCourseId": "adobe-illustrator-cc",
                            "title": "Adobe Illustrator CC – Advanced Training Course",
                            "instructor": "Daniel Walter Scott",
                            "link": "https://www.udemy.com/course/adobe-illustrator-cc-advanced-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "일러스트레이터를 활용하여 벡터 그래픽 및 아이콘 디자인 스킬을 향상시킵니다.",
                            "skills": ["Adobe Illustrator", "Vector Graphics", "Icon Design"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1623798_db31_6.jpg"
                        },
                        {
                            "udemyCourseId": "build-a-portfolio",
                            "title": "Figma UI UX Design Essentials",
                            "instructor": "Daniel Walter Scott",
                            "link": "https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "성공적인 UI/UX 디자이너 포트폴리오를 만들고 취업 기회를 높이는 방법을 배웁니다.",
                            "skills": ["Portfolio Creation", "Case Study", "Presentation Skills"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4359576_b9e1_2.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "fullstack-developer",
            "title": "풀스택 개발자 로드맵",
            "description": "프론트엔드와 백엔드 모두를 다루는 만능 풀스택 개발자가 되기 위한 로드맵입니다. 웹의 모든 계층을 이해하고 애플리케이션을 처음부터 끝까지 구축할 수 있는 능력을 키웁니다.",
            "image": "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg",
            "careers": ["웹 풀스택 개발자", "백엔드 개발자", "데브옵스 엔지니어"],
            "sections": [
                {
                    "sectionTitle": "STEP 1: 프론트엔드 핵심 (HTML, CSS, JS, React)",
                    "courses": [
                        {
                            "udemyCourseId": "the-web-developer-bootcamp",
                            "title": "T【한글자막】 The Web Developer 부트캠프 2025",
                            "instructor": "Colt Steele",
                            "link": "https://www.udemy.com/course/the-web-developer-bootcamp-2021-korea/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "프론트엔드 개발의 기초를 탄탄하게 다지는 필수 강의입니다. 반응형 웹 디자인과 인터랙티브한 UI 구현 능력을 키웁니다.",
                            "skills": ["HTML5", "CSS3", "JavaScript"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4297574_42d1_4.jpg"
                        },
                        {
                            "udemyCourseId": "modern-react-with-redux",
                            "title": "Modern React with Redux",
                            "instructor": "Stephen Grider",
                            "link": "https://www.udemy.com/course/react-redux/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "최신 React와 Redux를 사용하여 복잡한 프론트엔드 애플리케이션 상태 관리를 배우고, SPA 개발 능력을 향상시킵니다.",
                            "skills": ["React", "Redux", "Hooks", "Context API"],
                            "image": "https://img-c.udemycdn.com/course/240x135/705264_caa9_13.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 2: 백엔드 개발 (Node.js, Express, MongoDB)",
                    "courses": [
                        {
                            "udemyCourseId": "nodejs-express-mongodb",
                            "title": "Node.js, Express, MongoDB & More: The Complete Bootcamp 2025",
                            "instructor": "Jonas Schmedtmann",
                            "link": "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "JavaScript 기반의 Node.js 환경에서 강력한 백엔드 API를 구축하고 데이터베이스(MongoDB)와 연동하는 방법을 배웁니다.",
                            "skills": ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Authentication"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1672410_9ff1_5.jpg"
                        },
                        {
                            "udemyCourseId": "mongodb-the-complete-developer-guide",
                            "title": "MongoDB - The Complete Developer's Guide 2025",
                            "instructor": "Maximilian Schwarzmüller",
                            "link": "https://www.udemy.com/course/mongodb-the-complete-developers-guide/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "NoSQL 데이터베이스인 MongoDB의 심층적인 이해를 통해 데이터 모델링, 쿼리 최적화, 데이터베이스 관리 기술을 습득합니다.",
                            "skills": ["MongoDB", "Mongoose", "NoSQL", "Database Design"],
                            "image": "https://img-c.udemycdn.com/course/240x135/1906852_93c6_2.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 3: 클라우드 및 배포",
                    "courses": [
                        {
                            "udemyCourseId": "aws-certified-solutions-architect",
                            "title": "【한글자막】 AWS Certified Solutions Architect Associate시험합격! 2025",
                            "instructor": "Stephane Maarek",
                            "link": "https://www.udemy.com/course/best-aws-certified-solutions-architect-associate/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "클라우드 환경에 애플리케이션을 배포하고 관리하는 데 필요한 AWS 서비스를 이해하고 활용하는 방법을 배웁니다.",
                            "skills": ["AWS EC2", "S3", "RDS", "VPC", "Lambda"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4389576_a7d6_9.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "digital-marketing-specialist",
            "title": "디지털 마케팅 스페셜리스트 로드맵",
            "description": "온라인 환경에서 제품과 서비스를 효과적으로 홍보하고 판매하는 디지털 마케팅 전문가가 되기 위한 로드맵입니다. SEO, 소셜 미디어 마케팅, 콘텐츠 마케팅, 광고 전략 등을 배웁니다.",
            "image": "https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg",
            "careers": ["콘텐츠 마케터", "SEO 전문가", "소셜 미디어 매니저", "퍼포먼스 마케터"],
            "sections": [
                {
                    "sectionTitle": "STEP 1: 디지털 마케팅 기초 및 전략",
                    "courses": [
                        {
                            "udemyCourseId": "digital-marketing-masterclass",
                            "title": "The Complete Digital Marketing Course - 12 Courses in 1",
                            "instructor": "Rob Percival, Daragh Walsh",
                            "link": "https://www.udemy.com/course/learn-digital-marketing-course/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "SEO, YouTube, Facebook, Instagram, Google Ads 등 디지털 마케팅의 모든 핵심 분야를 한 번에 배웁니다.",
                            "skills": ["Digital Marketing", "SEO", "Social Media Marketing", "Content Marketing", "Email Marketing"],
                            "image": "https://img-c.udemycdn.com/course/240x135/914296_3670_8.jpg"
                        }
                    ]
                },
                {
                    "sectionTitle": "STEP 2: SEO 및 콘텐츠 마케팅",
                    "courses": [
                        {
                            "udemyCourseId": "seo-training-2025",
                            "title": "【한글자막】 SEO 트레이닝 마스터클래스 2025: 완전 초보자에서 완벽 전문가 되기",
                            "instructor": "Alex Genadinik",
                            "link": "https://www.udemy.com/course/master-seo-training/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "검색 엔진 최적화(SEO)의 모든 기술을 배우고, 웹사이트 트래픽을 늘리는 방법을 익힙니다.",
                            "skills": ["SEO", "Keyword Research", "On-page SEO", "Off-page SEO", "Technical SEO"],
                            "image": "https://img-c.udemycdn.com/course/240x135/4563876_1177_11.jpg"
                        },
                        {
                            "udemyCourseId": "copywriting-course",
                            "title": "Alan Sharpe's 30-hr Copywriting Masterclass + ChatGPT tips",
                            "instructor": "Alan Sharpe",
                            "link": "https://www.udemy.com/course/alan-sharpe-copywriting-masterclass/?ranMID=xxxx&ranEAID=xxxx&ranSiteID=xxxx",
                            "description": "매력적인 콘텐츠를 작성하고, 독자의 마음을 사로잡는 카피라이팅 기술을 배웁니다.",
                            "skills": ["Copywriting", "Content Strategy", "Storytelling", "AI for Content"],
                            "image": "https://img-c.udemycdn.com/course/240x135/3026298_8fa8_13.jpg"
                        }
                    ]
                }
            ]
        }
    ];

    // --- Notes 데이터 (Udemy Guide의 블로그 포스트) ---
    const notes = [
        {
            id: 1,
            title: "2025년 프론트엔드 개발 트렌드 5가지",
            description: "올해 주목해야 할 프론트엔드 기술과 라이브러리, 그리고 학습 방향에 대한 가이드입니다.",
            image: "https://images.unsplash.com/photo-1542062700-9b61ccbc1696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.01.15",
            category: "개발 트렌드",
            link: "notes/frontend-trends-2025"
        },
        {
            id: 2,
            title: "AI 시대, 개발자가 갖춰야 할 역량은?",
            description: "AI 기술이 빠르게 발전하는 시대에 개발자들이 어떻게 적응하고 성장해야 할지 고민해봅니다.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.02.01",
            category: "커리어",
            link: "notes/ai-developer-skills"
        },
        {
            id: 3,
            title: "클린 코드 작성을 위한 5가지 습관",
            description: "효율적이고 유지보수하기 쉬운 코드를 작성하는 데 도움이 되는 실용적인 팁들입니다.",
            image: "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.02.20",
            category: "개발 팁",
            link: "notes/clean-code-habits"
        },
        {
            id: 4,
            title: "TypeScript, 왜 배워야 할까?",
            description: "JavaScript의 상위 집합인 TypeScript가 왜 현대 웹 개발에서 중요해졌는지 알아봅니다.",
            image: "https://images.unsplash.com/photo-1699885960867-56d5f5262d38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.03.05",
            category: "개발 언어",
            link: "notes/why-typescript"
        },
        {
            id: 5,
            title: "프롬프트 엔지니어링, 이제는 필수!",
            description: "챗GPT 등 AI 도구를 효과적으로 활용하기 위한 프롬프트 엔지니어링의 기본과 팁.",
            image: "https://images.unsplash.com/photo-1675557009483-e6cf3867976b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.03.18",
            category: "AI",
            link: "notes/prompt-engineering"
        },
        {
            id: 6,
            title: "Git & GitHub, 협업의 필수 도구",
            description: "버전 관리 시스템 Git과 GitHub를 활용한 효율적인 협업 방법에 대해 알아봅니다.",
            image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.04.02",
            category: "개발 도구",
            link: "notes/git-github-guide"
        },
        {
            id: 7,
            title: "백엔드 개발자에게 Node.js를 추천하는 이유",
            description: "JavaScript 기반의 Node.js가 백엔드 개발에 강력한 이유를 알아봅니다.",
            image: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.04.10",
            category: "개발 언어",
            link: "notes/why-nodejs"
        },
        {
            id: 8,
            title: "REST API 설계 베스트 프랙티스",
            description: "효율적이고 일관된 REST API를 설계하기 위한 모범 사례들을 소개합니다.",
            image: "https://images.unsplash.com/photo-1634633111555-48907980b902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.04.25",
            category: "개발 팁",
            link: "notes/rest-api-best-practices"
        },
        {
            id: 9,
            title: "데이터 과학 로드맵 시작하기",
            description: "데이터 과학 분야로 진입하기 위한 첫 걸음과 필수 학습 내용을 안내합니다.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.05.01",
            category: "커리어",
            link: "notes/data-science-roadmap-start"
        },
        {
            id: 10,
            title: "생성형 AI 시대, 개발자의 역할 변화",
            description: "생성형 AI가 발전하면서 개발자에게 요구되는 역할과 능력에 대해 탐구합니다.",
            image: "https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "2025.05.15",
            category: "AI",
            link: "notes/developer-role-in-generative-ai"
        },
        //  {
        //     id: 11,
        //     title: "모던 웹 애니메이션 기술 총정리",
        //     description: "웹사이트에 생동감을 불어넣는 최신 애니메이션 기술들을 파헤쳐봅니다.",
        //     image: "https://images.unsplash.com/photo-1555099962-4168e325c5d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     date: "2025.05.20",
        //     category: "개발 팁",
        //     link: "notes/web-animation-techniques.html"
        // },
        // {
        //     id: 12,
        //     title: "클라우드 컴퓨팅, 개발자에게 왜 중요한가?",
        //     description: "클라우드 서비스의 기본 개념과 개발자가 클라우드를 알아야 하는 이유를 설명합니다.",
        //     image: "https://images.unsplash.com/photo-1598471383842-88686a6358c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     date: "2025.06.01",
        //     category: "개발 도구",
        //     link: "notes/cloud-computing-for-devs.html"
        // },
        // {
        //     id: 13,
        //     title: "데이터베이스 종류별 특징과 선택 가이드",
        //     description: "SQL과 NoSQL 데이터베이스의 주요 특징을 비교하고 선택 기준을 제시합니다.",
        //     image: "https://images.unsplash.com/photo-1549490349-ae15277884d5?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     date: "2025.06.10",
        //     category: "개발 팁",
        //     link: "notes/database-types.html"
        // },
        // {
        //     id: 14,
        //     title: "웹 성능 최적화, 사용자 경험의 시작",
        //     description: "웹사이트 로딩 속도를 높이고 사용자 만족도를 향상시키는 방법들을 알아봅니다.",
        //     image: "https://images.unsplash.com/photo-1591871680375-76b91c107142?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     date: "2025.06.20",
        //     category: "개발 팁",
        //     link: "notes/web-performance-optimization.html"
        // },
        // {
        //     id: 15,
        //     title: "소프트웨어 아키텍처 패턴 이해하기",
        //     description: "모놀리식부터 마이크로서비스까지, 주요 소프트웨어 아키텍처 패턴을 소개합니다.",
        //     image: "https://images.unsplash.com/photo-1547658742-fa3213054179?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        //     date: "2025.06.25",
        //     category: "개발 트렌드",
        //     link: "notes/software-architecture-patterns.html"
        // }
    ];

    // =======================================================
    // 3. 함수 정의 (모든 함수는 DOMContentLoaded 내부에서 정의)
    // =======================================================

    // 최신 추천 강의 표시 함수
    function displayCourses(coursesToDisplay) {
        courseListDiv.innerHTML = ''; // 기존 내용 지우기
        coursesToDisplay.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');

            courseCard.innerHTML = `
                <img src="${course.image}" alt="${course.title}">
                <div class="course-card-content">
                    <h3>${course.title}</h3>
                    <p><strong>강사:</strong> ${course.instructor}</p>
                    <p>${course.description}</p>
                    <p class="price">${course.price}</p>
                    <a href="${course.link}" target="_blank" class="link">강의 보러가기</a>
                </div>
            `;
            courseListDiv.appendChild(courseCard);
        });
    }

    // 로드맵 카테고리 목록 표시 함수
    function displayRoadmapCategories() {
        roadmapCategoryListDiv.innerHTML = ''; // 기존 내용 지우기
        roadmaps.forEach(roadmap => {
            const roadmapCard = document.createElement('div');
            roadmapCard.classList.add('roadmap-card');
            roadmapCard.dataset.roadmapId = roadmap.id; // 데이터 ID 설정

            roadmapCard.innerHTML = `
                <img src="${roadmap.image}" alt="${roadmap.title}">
                <h3>${roadmap.title}</h3>
                <p>${roadmap.description.substring(0, 80)}...</p>
                <p><strong>관련 직무:</strong> ${roadmap.careers.join(', ')}</p>
            `;
            roadmapCategoryListDiv.appendChild(roadmapCard);

            // 클릭 이벤트 리스너 추가: 로드맵 카드 클릭 시 상세 페이지 표시
            roadmapCard.addEventListener('click', () => showRoadmapDetail(roadmap.id));
        });

        // 상태 관리: 상세 페이지 숨기고 목록 페이지 보이기
        roadmapDetailDiv.style.display = 'none';
        roadmapCategoryListDiv.style.display = 'grid'; // CSS grid로 설정
    }

    // 로드맵 상세 페이지 표시 함수
    function showRoadmapDetail(roadmapId) {
        const selectedRoadmap = roadmaps.find(r => r.id === roadmapId);

        if (selectedRoadmap) {
            roadmapDetailTitle.textContent = selectedRoadmap.title;
            roadmapDetailDescription.textContent = selectedRoadmap.description;
            roadmapSectionsDiv.innerHTML = ''; // 기존 섹션 내용 지우기

            selectedRoadmap.sections.forEach((section, index) => {
                const sectionDiv = document.createElement('div');
                sectionDiv.classList.add('roadmap-section');

                // 아코디언 헤더 (클릭 가능한 부분)
                const sectionHeader = document.createElement('div');
                sectionHeader.classList.add('roadmap-section-header');
                sectionHeader.innerHTML = `
                    <h4>${section.sectionTitle}</h4>
                    <span class="accordion-icon">➕️</span>
                `;
                sectionDiv.appendChild(sectionHeader);

                // 아코디언 콘텐츠 (강의 목록, 초기에는 숨김)
                const courseContent = document.createElement('div');
                courseContent.classList.add('roadmap-section-content');
                // 기본적으로 첫 번째 섹션은 열려있도록 설정 (선택 사항)
                if (index === 0) {
                    courseContent.style.display = 'block';
                    sectionHeader.querySelector('.accordion-icon').textContent = '➖️';
                } else {
                    courseContent.style.display = 'none';
                }

                section.courses.forEach(course => {
                    const courseItemDiv = document.createElement('div');
                    courseItemDiv.classList.add('roadmap-course-item');
                    courseItemDiv.innerHTML = `
                        <img src="${course.image}" alt="${course.title}">
                        <div class="roadmap-course-info">
                            <h5>${course.title}</h5>
                            <p><strong>강사:</strong> ${course.instructor}</p>
                            <p>${course.description}</p>
                            <p class="skills">
                                ${course.skills.map(skill => `<span>${skill}</span>`).join('')}
                            </p>
                            <a href="${course.link}" target="_blank">Udemy 강의 보러가기</a>
                        </div>
                    `;
                    courseContent.appendChild(courseItemDiv);
                });
                sectionDiv.appendChild(courseContent);
                roadmapSectionsDiv.appendChild(sectionDiv);

                // 아코디언 토글 기능 추가
                sectionHeader.addEventListener('click', () => {
                    const icon = sectionHeader.querySelector('.accordion-icon');
                    if (courseContent.style.display === 'none') {
                        courseContent.style.display = 'block';
                        icon.textContent = '➖️';
                    } else {
                        courseContent.style.display = 'none';
                        icon.textContent = '➕️';
                    }
                });
            });

            // 상태 관리: 목록 페이지 숨기고 상세 페이지 보이기
            roadmapCategoryListDiv.style.display = 'none';
            roadmapDetailDiv.style.display = 'block';
            // 로드맵 섹션의 맨 위로 스크롤 이동하여 사용자 경험 개선
            roadmapsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Notes 섹션의 블로그 포스트 표시 관련 변수
    let notesPerPage = 6; // 한 번에 표시할 Notes 수
    let currentNotesPage = 0; // 현재 페이지 (0부터 시작)
    let filteredNotes = []; // 현재 필터링된 Notes 배열

    // Notes 섹션의 블로그 포스트 표시 함수 (페이지네이션/더보기, 필터링 적용)
    function displayNotes(notesToDisplay, append = false) {
        if (!append) { // append가 false면 (필터 변경 등) 기존 내용 지우고 새로 시작
            notesListDiv.innerHTML = '';
            currentNotesPage = 0; // 페이지 초기화 (새로운 필터 적용 시)
        }

        const startIndex = currentNotesPage * notesPerPage;
        const notesToRender = notesToDisplay.slice(startIndex, startIndex + notesPerPage); // 항상 notesPerPage 만큼만 자름

        notesToRender.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.classList.add('note-card');

            noteCard.innerHTML = `
                <img src="${note.image}" alt="${note.title}">
                <div class="note-card-content">
                    <h3>${note.title}</h3>
                    <p>${note.description}</p>
                    <p class="meta">날짜: ${note.date} | 카테고리: ${note.category}</p>
                    <a href="${note.link}" class="read-more">자세히 보기</a>
                </div>
            `;
            notesListDiv.appendChild(noteCard);
        });

        currentNotesPage++; // 다음 페이지를 위해 페이지 카운트 증가

        // "더 보기" 버튼의 가시성 조절
        // 현재까지 렌더링된 총 Notes 개수가 전체 Notes 개수보다 적을 때만 버튼을 보여줍니다.
        if (notesToDisplay.length > (currentNotesPage * notesPerPage)) {
            loadMoreNotesButton.style.display = 'block';
        } else {
            loadMoreNotesButton.style.display = 'none';
        }
    }

    // Notes 필터링 로직
    function filterNotesByCategory(category) {
        // 모든 필터 버튼의 active 클래스 제거
        filterButtons.forEach(button => {
            button.classList.remove('active');
        });
        // 현재 클릭된 필터 버튼에 active 클래스 추가
        document.querySelector(`.filter-button[data-category="${category}"]`).classList.add('active');

        if (category === 'all') {
            filteredNotes = notes;
        } else {
            filteredNotes = notes.filter(note => note.category === category);
        }
        currentNotesPage = 0; // 필터 변경 시 페이지 초기화
        displayNotes(filteredNotes); // 필터링된 Notes를 처음부터 다시 표시 (append = false)
    }

    // =======================================================
    // 4. 이벤트 리스너 설정
    // =======================================================

    // "로드맵 목록으로 돌아가기" 버튼 클릭 이벤트
    backToRoadmapsButton.addEventListener('click', displayRoadmapCategories);

    // "더 많은 Notes 보기" 버튼 클릭 이벤트
    loadMoreNotesButton.addEventListener('click', () => {
        displayNotes(filteredNotes, true); // 기존 Notes에 추가 (append = true)
    });

    // Notes 필터 버튼 클릭 이벤트
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterNotesByCategory(category);
        });
    });

    // =======================================================
    // 5. 초기화: 페이지 로드 시 실행될 함수들
    // =======================================================
    displayCourses(courses); // 최신 추천 강의 표시
    displayRoadmapCategories(); // 로드맵 카테고리 표시
    // 페이지 로드 시 '전체' 카테고리로 Notes를 표시하고 "더보기" 버튼 로직을 활성화합니다.
    filterNotesByCategory('all'); 
});