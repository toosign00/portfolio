export const techStack = {
  html: {
    name: 'HTML5',
    imgSrc: '/src/assets/images/html-5-icon.svg',
    alt: 'HTML5',
  },
  css: {
    name: 'CSS3',
    imgSrc: '/src/assets/images/css-3-icon.svg',
    alt: 'CSS3',
  },
  javascript: {
    name: 'JavaScript',
    imgSrc: '/src/assets/images/js-icon.svg',
    alt: 'JavaScript',
  },
  nodejs: {
    name: 'Node.js',
    imgSrc: '/src/assets/images/nodejs-icon.svg',
    alt: 'Node.js',
  },
  ejs: {
    name: 'EJS',
    imgSrc: '/src/assets/images/ejs-icon.svg',
    alt: 'EJS',
  },
  mongodb: {
    name: 'MongoDB',
    imgSrc: '/src/assets/images/mongodb-icon.svg',
    alt: 'MongoDB',
  },
  gsap: {
    name: 'GSAP',
    imgSrc: '/src/assets/images/gsap-icon.svg',
    alt: 'GSAP',
  },
  jquery: {
    name: 'jQuery',
    imgSrc: '/src/assets/images/jquery-icon.svg',
    alt: 'jQuery',
  },
  git: {
    name: 'Git',
    imgSrc: '/src/assets/images/git-icon.svg',
    alt: 'Git',
  },
};

// 프로젝트 정보 객체 정의
export const projects = {
  portfolio: {
    title: '포트폴리오',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '프론트엔드 개발자 노현수의 포트폴리오',
    description:
      '개인 포트폴리오 웹사이트입니다. 헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였고, 스킬 버튼을 클릭하면 해당 스킬의 숙련도를 타이핑 효과로 표시합니다. 또한, 프로젝트 모달 창을 통해 상세 설명을 확인할 수 있습니다. 성능 최적화, 웹표준, 접근성, SEO 최적화를 고려하여 개발하였으며, Google Lighthouse 평가에서 모든 항목에서 100점을 기록하였습니다.',
    duration: '2024.12 ~ 진행 중',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/toosign00.github.io',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign.kr',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-portfolio.webp', alt: '메인 화면' }],
  },
  'meme-repository': {
    title: '짤방 저장소',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '세상의 모든 짤을 모으기',
    description:
      'Node.js와 MongoDB를 사용해 짤을 올릴 수 있는 웹사이트를 제작했습니다. Express 프레임워크를 사용하여 서버를 구축하고, EJS 템플릿 엔진을 사용하여 동적인 페이지를 렌더링했습니다. JWT 토큰을 사용한 사용자 인증 시스템을 구축하고, 이미지 업로드를 위한 Multer 미들웨어와 MongoDB를 연동하여 사용자가 업로드한 짤을 저장하고 조회할 수 있도록 구현했습니다.',
    duration: '2024.10 ~ 2024.12',
    technologies: [techStack.html, techStack.css, techStack.javascript, techStack.nodejs, techStack.ejs, techStack.mongodb],
    github: {
      url: 'https://github.com/toosign00/meme-repository',
      ariaLabel: 'GitHub 저장소 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-meme-repository.webp', alt: '메인 화면' }],
  },
  'my-life-story': {
    title: '나의 인생 일대기',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '9가지 취미로 알아보는 나의 인생 일대기',
    description:
      '나의 인생 일대기를 9가지의 취미로 표현한 웹사이트입니다. 각 취미마다 다양한 인터렉션을 적용하여 사용자가 즐겁게 경험할 수 있도록 구현했습니다.',
    duration: '2024.10 ~ 2024.12',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/my-life-story',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://my-life-story.vercel.app/',
    },
    images: [{ url: '/src/assets/images/thumbnail-my-life-story.webp ', alt: '메인 화면' }],
  },
  'ora-gung': {
    title: '오라, 궁',
    type: 'Team',
    teamDetail: 'Team : 기획 2명 / 디자인 2명 / 개발 2명',
    role: '개발 총괄 / 환경 구성 / 웹사이트 구현 / Git 관리',
    duration: '2024.09 ~ 2024.12',
    technologies: [techStack.html, techStack.css, techStack.javascript, techStack.gsap, techStack.jquery, techStack.git],
    summary: "서울 4대 궁궐 투어 앱 '오라, 궁' 소개 웹사이트",
    description:
      "계원예술대학교 디지털미디어디자인과 졸업전시에서 서울 4대 궁궐 투어 앱 '오라, 궁' 서비스의 소개 웹사이트 개발을 담당했습니다. GSAP 라이브러리를 활용한 부드러운 가로 스크롤 애니메이션과 Transform, Intersection Observer API를 활용한 인터랙티브 3D 캐러셀을 구현했습니다. feature 브랜치 전략을 활용한 Git 버전 관리와 pull request를 통한 코드 리뷰로 팀 협업을 진행했습니다.",
    github: {
      url: 'https://github.com/toosign00/ora-gung',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://ora-gung.vercel.app',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-ora-gung.webp', alt: '메인 화면' }],
  },
  type: {
    title: 'TYPE',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '타이포그래피 소개 웹사이트',
    description:
      '타이포그래피를 소개하는 웹사이트를 제작했습니다. JavaScript의 이벤트 시스템과 DOM 조작을 활용하여 사용자가 자간, 행간, 크기, 무게를 실시간으로 조절할 수 있는 인터랙티브한 인터페이스를 구현했습니다. 라이트/다크 모드 전환 기능을 추가하고, sessionStorage를 통해 사용자 설정값을 효율적으로 관리했습니다. 또한 미디어 쿼리를 활용한 반응형 웹 디자인을 적용하여 다양한 디바이스에서의 일관된 사용자 경험을 제공했습니다.',
    duration: '2024.05 ~ 2024.07',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/typography',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/typography',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-type.webp', alt: '메인 화면' }],
  },
  olly: {
    title: '올리',
    type: 'Team',
    teamDetail: 'Team : 디자인 2명 / 개발 2명',
    role: '서비스 기획 / 웹사이트 구현',
    summary: '치매 도우미 앱 올리 소개 웹사이트',
    description:
      '올리 서비스의 기획 일부분과 서비스 소개 웹사이트 제작을 담당했습니다. AOS 스크롤 애니메이션 라이브러리를 활용하여 스크롤에 따라 요소가 나타나고 사라지는 효과를 구현했습니다. 제30회 국제커뮤니케이션공모전에서 디지털미디어디자인 분야 우수상을 수상한 프로젝트입니다.',
    duration: '2024.03 ~ 2024.07',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/OLLY',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/OLLY',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-olly.webp', alt: '메인 화면' }],
  },
  minigame: {
    title: '기묘한 이야기 미니게임',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '카드 짝 맞추기 게임',
    description:
      'JavaScript로 구현한 카드 짝 맞추기 게임입니다. 기묘한 이야기 컨셉으로 제작했습니다. 카드 매칭 로직, 타이머 기능, 애니메이션을 구현했습니다. DOM 조작을 통해 동적으로 카드를 생성하고 Math.random()으로 무작위 배치했으며, localStorage로 사용자의 게임 기록을 저장하고 단계별 난이도 시스템을 적용했습니다.',
    duration: '2024.05 ~ 2024.07',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/minigame',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/minigame',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-minigame.webp', alt: '메인 화면' }],
  },
  'film-magazine': {
    title: 'Film Magazine',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '필름 매거진 컨셉의 웹사이트',
    description:
      '필름 매거진 컨셉의 웹사이트입니다. 시멘틱 마크업과 Flexbox 레이아웃을 사용하여 웹을 디자인 하였으며, 반응형 구현을 위해 미디어 쿼리를 사용하였습니다. 또한 JavaScript를 활용하여 스크롤 이벤트, 모달 창 등의 인터렉션을 구현 했습니다.',
    duration: '2023.09 ~ 2024.12',
    technologies: [techStack.html, techStack.css, techStack.javascript],
    github: {
      url: 'https://github.com/toosign00/film_magazine',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/film_magazine',
      ariaLabel: '배포된 웹사이트 링크',
    },
    images: [{ url: '/src/assets/images/thumbnail-film-magazine.webp', alt: '메인 화면' }],
  },
};
