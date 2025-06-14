import portfolioThumb from '@/assets/images/thumbnail-portfolio.webp';
import memeRepoThumb from '@/assets/images/thumbnail-meme-repository.webp';
import myLifeStoryThumb from '@/assets/images/thumbnail-my-life-story.webp';
import willieThumb from '@/assets/images/thumbnail-willie-library.webp';
import oraGungThumb from '@/assets/images/thumbnail-ora-gung.webp';
import filmMagazineThumb from '@/assets/images/thumbnail-film-magazine.webp';
import typeThumb from '@/assets/images/thumbnail-type.webp';
import ollyThumb from '@/assets/images/thumbnail-olly.webp';
import minigameThumb from '@/assets/images/thumbnail-minigame.webp';

export const skills = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  react: 'React',
  nextjs: 'Next.js',
  nodejs: 'Node.js',
  tailwindCSS: 'Tailwind CSS',
  gsap: 'GSAP',
  jquery: 'jQuery',
  git: 'Git',
  ejs: 'EJS',
  mongodb: 'MongoDB',
} as const;

interface Image {
  url: string;
  alt: string;
}

interface Link {
  url: string;
  ariaLabel?: string;
}

export interface Project {
  id: string;
  title: string;
  type: 'Team' | 'Personal';
  teamDetail?: string;
  role: string;
  summary: string;
  description: string;
  duration: string;
  technologies: string[];
  github: Link;
  deploy?: Link;
  thumbnail: string;
  images: Image[];
  memberCount?: number;
  period?: string;
  blogLink?: string;
  details?: string[];
  color?: 'blue' | 'pink' | 'yellow';
}

// 프로젝트 정보 객체 정의
export const projects: Project[] = [
  {
    id: 'willie-library',
    title: '윌리의 서재',
    type: 'Team',
    teamDetail: '4명(FE 4)',
    role: '스크럼 마스터 / index 페이지 구현 / main title, button 컴포넌트 개발 / main 페이지 주요 섹션 제작 / 문서 정리',
    summary: '밀리의 서재 클론 코딩',
    description:
      '밀리의 서재 클론 코딩 프로젝트입니다. HTML, CSS, Tailwind CSS, JavaScript로 반응형 웹사이트를 구현했습니다. 스크럼 마스터로서 일일 스크럼 회의를 주관하고 GitHub를 통해 프로젝트를 관리했습니다. index 페이지와 메인 타이틀, 버튼 컴포넌트를 개발하고 main 페이지의 주요 섹션을 제작했습니다. 또한 프로젝트 구조와 사용법에 관한 문서화를 담당했습니다. 이 협업을 통해 웹 개발의 다양한 측면을 경험할 수 있었습니다.',
    duration: '2024.03.14 ~ 2024.03.25',
    technologies: [skills.html, skills.css, skills.tailwindCSS, skills.javascript, skills.git],
    github: {
      url: 'https://github.com/FRONTENDBOOTCAMP-13th/9RoDigital',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://9rodigital-willie.netlify.app',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: willieThumb,
    images: [{ url: willieThumb, alt: '메인 화면' }],
    memberCount: 4,
    period: '2024.03',
    details: [
      '프로젝트 진행 중 발생한 문제점',
      '스크럼 마스터의 역할과 중요성',
      '팀원들과의 원활한 커뮤니케이션 방법',
    ],
    color: 'blue',
  },
  {
    id: 'portfolio',
    title: '포트폴리오',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '프론트엔드 개발자 노현수의 포트폴리오',
    description:
      '개인 포트폴리오 웹사이트입니다. 헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였고, 스킬 버튼을 클릭하면 해당 스킬의 숙련도를 타이핑 효과로 표시합니다. 또한, 프로젝트 모달 창을 통해 상세 설명을 확인할 수 있습니다. 성능 최적화, 웹표준, 접근성, SEO 최적화를 고려하여 개발하였으며, Google Lighthouse 평가에서 모든 항목에서 100점을 기록하였습니다.',
    duration: '2024.12 ~ 진행 중',
    technologies: [skills.tailwindCSS, skills.typescript, skills.react],
    github: {
      url: 'https://github.com/toosign00/toosign00.github.io',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign.kr',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: portfolioThumb,
    images: [{ url: portfolioThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2024.12 ~',
    details: [
      '프로젝트 진행 중 발생한 문제점',
      '스킬 타이핑 효과의 구현 방법',
      'SEO 최적화를 위한 최적의 코드 작성',
    ],
    color: 'yellow',
  },
  {
    id: 'meme-repository',
    title: '짤방 저장소',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '세상의 모든 짤을 모으기',
    description:
      'Node.js와 MongoDB를 사용해 짤을 올릴 수 있는 웹사이트를 제작했습니다. Express 프레임워크를 사용하여 서버를 구축하고, EJS 템플릿 엔진을 사용하여 동적인 페이지를 렌더링했습니다. JWT 토큰을 사용한 사용자 인증 시스템을 구축하고, 이미지 업로드를 위한 Multer 미들웨어와 MongoDB를 연동하여 사용자가 업로드한 짤을 저장하고 조회할 수 있도록 구현했습니다.',
    duration: '2024.10 ~ 2024.12',
    technologies: [skills.javascript, skills.nodejs, skills.ejs, skills.mongodb],
    github: {
      url: 'https://github.com/toosign00/meme-repository',
      ariaLabel: 'GitHub 저장소 링크',
    },
    thumbnail: memeRepoThumb,
    images: [{ url: memeRepoThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2024.10 ~ 2024.12',
    details: [
      '데이터베이스 연동 과정에서의 문제점',
      'JWT 토큰을 활용한 보안 문제',
      '이미지 업로드 기능의 구현',
    ],
    color: 'pink',
  },
  {
    id: 'my-life-story',
    title: '나의 인생 일대기',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '9가지 취미로 알아보는 나의 인생 일대기',
    description:
      '나의 인생 일대기를 9가지의 취미로 표현한 웹사이트입니다. 각 취미마다 다양한 인터렉션을 적용하여 사용자가 즐겁게 경험할 수 있도록 구현했습니다.',
    duration: '2024.10 ~ 2024.12',
    technologies: [skills.html, skills.css, skills.javascript],
    github: {
      url: 'https://github.com/toosign00/my-life-story',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://my-life-story.vercel.app/',
    },
    thumbnail: myLifeStoryThumb,
    images: [{ url: myLifeStoryThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2024.10 ~ 2024.12',
    details: ['취미 표현의 다양성', '인터렉션의 구현 방법', '웹사이트의 활용성 향상'],
    color: 'yellow',
  },
  {
    id: 'ora-gung',
    title: '오라, 궁',
    type: 'Team',
    teamDetail: '6명(PM 2 / UX/UI 2 / FE 2)',
    role: '개발 총괄 / 환경 구성 / 웹사이트 구현 / Git 관리',
    duration: '2024.09 ~ 2024.12',
    technologies: [
      skills.html,
      skills.css,
      skills.javascript,
      skills.gsap,
      skills.jquery,
      skills.git,
    ],
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
    thumbnail: oraGungThumb,
    images: [{ url: oraGungThumb, alt: '메인 화면' }],
    memberCount: 4,
    period: '2024.09 ~ 2024.12',
    details: ['팀원들과의 원활한 커뮤니케이션', '3D 캐러셀의 구현 방법', 'Git 버전 관리 전략'],
    color: 'blue',
  },
  {
    id: 'type',
    title: 'TYPE',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '타이포그래피 소개 웹사이트',
    description:
      '타이포그래피를 소개하는 웹사이트를 제작했습니다. JavaScript의 이벤트 시스템과 DOM 조작을 활용하여 사용자가 자간, 행간, 크기, 무게를 실시간으로 조절할 수 있는 인터랙티브한 인터페이스를 구현했습니다. 라이트/다크 모드 전환 기능을 추가하고, sessionStorage를 통해 사용자 설정값을 효율적으로 관리했습니다. 또한 미디어 쿼리를 활용한 반응형 웹 디자인을 적용하여 다양한 디바이스에서의 일관된 사용자 경험을 제공했습니다.',
    duration: '2024.05 ~ 2024.07',
    technologies: [skills.html, skills.css, skills.javascript],
    github: {
      url: 'https://github.com/toosign00/typography',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/typography',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: typeThumb,
    images: [{ url: typeThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2024.05 ~ 2024.07',
    details: ['인터랙티브한 인터페이스의 구현', '라이트/다크 모드 전환 기능', '성능 최적화 방법'],
    color: 'pink',
  },
  {
    id: 'olly',
    title: '올리',
    type: 'Team',
    teamDetail: '4명(UX/UI 2 / FE 1)',
    role: '서비스 기획 / 웹사이트 구현',
    summary: '치매 도우미 앱 올리 소개 웹사이트',
    description:
      '올리 서비스의 기획 일부분과 서비스 소개 웹사이트 제작을 담당했습니다. AOS 스크롤 애니메이션 라이브러리를 활용하여 스크롤에 따라 요소가 나타나고 사라지는 효과를 구현했습니다. 제30회 국제커뮤니케이션공모전에서 디지털미디어디자인 분야 우수상을 수상한 프로젝트입니다.',
    duration: '2024.03 ~ 2024.07',
    technologies: [skills.html, skills.css, skills.javascript],
    github: {
      url: 'https://github.com/toosign00/OLLY',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/OLLY',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: ollyThumb,
    images: [{ url: ollyThumb, alt: '메인 화면' }],
    memberCount: 2,
    period: '2024.03 ~ 2024.07',
    details: ['AOS 스크롤 애니메이션의 구현', '서비스 소개 웹사이트의 디자인', '우수상 수상 경험'],
    color: 'yellow',
  },
  {
    id: 'minigame',
    title: '기묘한 이야기 미니게임',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '카드 짝 맞추기 게임',
    description:
      'JavaScript로 구현한 카드 짝 맞추기 게임입니다. 기묘한 이야기 컨셉으로 제작했습니다. 카드 매칭 로직, 타이머 기능, 애니메이션을 구현했습니다. DOM 조작을 통해 동적으로 카드를 생성하고 Math.random()으로 무작위 배치했으며, localStorage로 사용자의 게임 기록을 저장하고 단계별 난이도 시스템을 적용했습니다.',
    duration: '2024.05 ~ 2024.07',
    technologies: [skills.html, skills.css, skills.javascript],
    github: {
      url: 'https://github.com/toosign00/minigame',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/minigame',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: minigameThumb,
    images: [{ url: minigameThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2024.05 ~ 2024.07',
    details: ['카드 매칭 로직의 구현', '타이머 기능의 구현', '애니메이션의 구현'],
    color: 'blue',
  },
  {
    id: 'film-magazine',
    title: 'Film Magazine',
    type: 'Personal',
    role: '프로젝트 전과정 담당',
    summary: '필름 매거진 컨셉의 웹사이트',
    description:
      '필름 매거진 컨셉의 웹사이트입니다. 시멘틱 마크업과 Flexbox 레이아웃을 사용하여 웹을 디자인 하였으며, 반응형 구현을 위해 미디어 쿼리를 사용하였습니다. 또한 JavaScript를 활용하여 스크롤 이벤트, 모달 창 등의 인터렉션을 구현 했습니다.',
    duration: '2023.09 ~ 2024.12',
    technologies: [skills.html, skills.css, skills.javascript],
    github: {
      url: 'https://github.com/toosign00/film_magazine',
      ariaLabel: 'GitHub 저장소 링크',
    },
    deploy: {
      url: 'https://toosign00.github.io/film_magazine',
      ariaLabel: '배포된 웹사이트 링크',
    },
    thumbnail: filmMagazineThumb,
    images: [{ url: filmMagazineThumb, alt: '메인 화면' }],
    memberCount: 1,
    period: '2023.09 ~ 2024.12',
    details: ['시멘틱 마크업의 사용', 'Flexbox 레이아웃의 사용', '반응형 웹 디자인'],
    color: 'pink',
  },
];
