// ======= 라이트 모드 / 다크 모드 토글 =======

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const buttonText = document.querySelector(".nav--button-text");
  const buttonIcon = document.querySelector(".nav--button-icon");

  // UI 요소만 업데이트
  updateThemeUI(savedTheme);

  // 테마 전환 버튼 이벤트 리스너
  document.getElementById("theme-toggle").addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // 테마 속성 설정 및 로컬 스토리지에 저장
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
  });

  // UI 업데이트 함수
  function updateThemeUI(theme) {
    buttonText.textContent = theme === "dark" ? "Dark" : "Light";
    buttonIcon.src = theme === "dark"
      ? "./assets/images/dark-mode-icon.svg"
      : "./assets/images/light-mode-icon.svg";
  }
});


// ======= 헤더 높이만큼 섹션 패딩을 동적으로 조정 =======
document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".site-header");
  let introSection = document.querySelector(".intro--section");

  let adjustSectionPadding = () => {
    let headerHeight = header.offsetHeight;
    introSection.style.paddingTop = `${headerHeight}px`;
  };

  // 함수 실행 및 윈도우 리사이즈 이벤트 발생 시 함수 실행
  adjustSectionPadding();
  window.addEventListener("resize", adjustSectionPadding);

});


// ======= 메뉴 클릭시 해당 섹션 이동 =======
document.addEventListener("DOMContentLoaded", () => {
  // nav--link 클래스를 가진 모든 요소를 선택
  const navLinks = document.querySelectorAll(".nav--link");
  const headerOffset = document.querySelector(".site-header").offsetHeight; // 헤더 높이 저장
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      // 링크의 기본 동작(URL 변경) 방지
      e.preventDefault();

      // href 속성값에서 '#'을 제거하여 id값만 추출
      const targetId = e.target.getAttribute("href").substring(1);

      // 추출한 id를 가진 섹션 요소 선택
      const targetSection = document.getElementById(targetId);

      // 해당 섹션이 존재하는 경우에만 스크롤 실행
      if (targetSection) {
        window.scrollTo({
          // 헤더 높이만큼 뺀 위치로 스크롤
          top: targetSection.offsetTop - headerOffset,
          behavior: "smooth"
        });
      }
    });
  });
});


// ======= SKills 섹션 스킬 박스 클릭시 해당 스킬 설명을 타이핑 효과로 출력 =======
document.addEventListener('DOMContentLoaded', () => {
  // 각 스킬 박스에 대한 설명을 담은 객체 생성
  const skillDescriptions = {
    'html-box': 'HTML5 문서 구조를 이해하며, 시멘틱 코드를 사용하고, SEO 적용을 고려하여 최적화한 경험이 있습니다.',
    'css-box': 'Media Query, CSS3, Flex-box와 CSS Grid에 능숙하며, CSS 방법론을 사용해 재사용성과 유지보수성을 고려한 코드를 작성할 수 있습니다.',
    'js-box': 'JavaScript ES6 이상 문법과 DOM 조작을 활용해 동적 웹페이지를 구현하며, Stack, Queue, Event Loop, Heap 등의 동작 원리와 비동기 처리(Callback, async/await, Promise)에 대한 이해를 갖추고 있습니다.',
    'node-box': 'Node.js와 Express.js를 활용해 서버를 구축하고, npm으로 라이브러리를 관리하며, MongoDB와의 연동이 가능합니다.',
    'git-box': 'Git을 활용한 버전 관리와 branch, merge, rebase를 통한 협업에 능숙하며, 다양한 브랜치 전략(Git flow, Trunk-based)을 적용할 수 있습니다.',
    'github-box': 'GitHub를 사용해 원격 저장소를 관리하고, Pull Request 기반의 코드 리뷰와 브랜치 보호 규칙 설정을 통해 협업 프로세스를 최적화한 경험이 있습니다.',
    'design': 'Figma와 Adobe 디자인 툴을 활용하며, UI/UX 디자인 프로세스에 대한 이해를 바탕으로 사용자 중심의 디자인을 구현할 수 있습니다.'
  };

  // 타이핑 효과를 구현하는 클래스
  class TypeWriter {
    // 생성자: 텍스트를 표시할 DOM 요소와 타이핑 timeout ID 초기화
    constructor(element) {
      this.element = element;
      this.typingTimeout = null;
    }

    // 텍스트를 타이핑 효과로 출력하는 메서드
    type(text, speed = 10) {
      // 같은 텍스트가 이미 있다면 지우고 다시 시작
      if (this.element.textContent === text) {
        this.element.textContent = '';
      }

      // 진행 중인 타이핑이 있다면 중지
      clearTimeout(this.typingTimeout);
      this.element.textContent = '';

      // 타이핑할 현재 문자의 위치
      let index = 0;

      // 한 글자씩 타이핑하는 함수
      const typeChar = () => {
        if (index < text.length) {
          this.element.textContent += text.charAt(index);
          index++;
          this.typingTimeout = setTimeout(typeChar, speed);
        }
      };

      // 타이핑 시작
      typeChar();
    }
  }

  // 설명 텍스트를 표시할 요소에 대한 타이핑 인스턴스 생성
  const typewriter = new TypeWriter(document.querySelector('.skill--description-text'));

  // 모든 스킬 박스에 클릭 이벤트 설정하는 함수
  const initializeSkillBoxes = () => {
    // 일반 스킬 박스들 이벤트 설정
    Object.keys(skillDescriptions).forEach(id => {
      if (id === 'design') return; // 디자인은 따로 처리

      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => typewriter.type(skillDescriptions[id]));
      }
    });

    // 디자인 스킬 박스들 이벤트 설정
    document.querySelectorAll('.design-box').forEach(box => {
      box.addEventListener('click', () => typewriter.type(skillDescriptions['design']));
    });
  };

  // 페이지 로드 시 초기화 실행
  initializeSkillBoxes();
});

// ======= Projects 섹션  =======
// 기술 스택 객체 정의
const techStack = {
  html: {
    name: "HTML5",
    imgSrc: "./assets/images/html-5-icon.svg",
    alt: "HTML5"
  },
  css: {
    name: "CSS3",
    imgSrc: "./assets/images/css-3-icon.svg",
    alt: "CSS3"
  },
  javascript: {
    name: "JavaScript",
    imgSrc: "./assets/images/js-icon.svg",
    alt: "JavaScript"
  },
  nodejs: {
    name: "Node.js",
    imgSrc: "./assets/images/nodejs-icon.svg",
    alt: "Node.js"
  },
  ejs: {
    name: "EJS",
    imgSrc: "./assets/images/ejs-icon.svg",
    alt: "EJS"
  },
  mongodb: {
    name: "MongoDB",
    imgSrc: "./assets/images/mongodb-icon.svg",
    alt: "MongoDB"
  },
  gsap: {
    name: "GSAP",
    imgSrc: "./assets/images/gsap-icon.svg",
    alt: "GSAP"
  },
  jquery: {
    name: "jQuery",
    imgSrc: "./assets/images/jquery-icon.svg",
    alt: "jQuery"
  },
  git: {
    name: "Git",
    imgSrc: "./assets/images/git-icon.svg",
    alt: "Git"
  }
};

// 프로젝트 정보 객체 정의
const projects = {
  'portfolio': {
    title: "포트폴리오",
    type: "Personal",
    duration: "2024.12 ~ 진행 중",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "프론트엔드 개발자 노현수의 포트폴리오",
    description: "개인 포트폴리오 웹사이트로, HTML, CSS, JavaScript를 사용해 제작했습니다. 라이트/다크 모드 전환 기능과 Skills 섹션에서 스킬 박스를 클릭하면 해당 기술에 대한 설명을 타이핑 효과로 출력하는 기능을 구현했습니다. Project 섹션에서 프로젝트 데이터를 객체로 분리하고 ProjectsManager와 ProjectModal 클래스를 구현하여 프로젝트 카드와 모달을 동적으로 생성하도록 리팩토링했습니다. 또한, 이메일을 보내는 기능을 구현하기 위해 EmailJS API를 사용했습니다.",
    github: "https://github.com/toosign00/toosign00.github.io",
    deploy: "https://toosign.kr/"
  },
  'meme-archive': {
    title: "짤방 저장소",
    type: "Personal",
    duration: "2024.10 ~ 2024.12",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript,
      techStack.nodejs,
      techStack.ejs,
      techStack.mongodb
    ],
    summary: "세상의 모든 짤을 모으기",
    description: "Node.js와 MongoDB를 사용해 짤을 올릴 수 있는 웹사이트를 제작했습니다. Express 프레임워크를 사용하여 서버를 구축하고, EJS 템플릿 엔진을 사용하여 동적인 페이지를 렌더링했습니다. JWT 토큰을 사용한 사용자 인증 시스템을 구축하고, 이미지 업로드를 위한 Multer 미들웨어와 MongoDB를 연동하여 사용자가 업로드한 짤을 저장하고 조회할 수 있도록 구현했습니다.",
    github: "https://github.com/toosign00/meme-archive"
  },
  'my-life-story': {
    title: "나의 인생 일대기",
    type: "Personal",
    duration: "2024.10 ~ 2024.12",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "9가지 취미로 알아보는 나의 인생 일대기",
    description: "나의 인생 일대기를 9가지의 취미로 표현한 웹사이트입니다. 각 취미마다 다양한 인터렉션을 적용하여 사용자가 즐겁게 경험할 수 있도록 구현했습니다.",
    github: "https://github.com/toosign00/my-life-story",
    deploy: "https://my-life-story.vercel.app/"
  },
  'ora-gung': {
    title: "오라, 궁",
    type: "Team",
    duration: "2024.09 ~ 2024.12",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript,
      techStack.gsap,
      techStack.jquery,
      techStack.git
    ],
    summary: "서울 4대 궁궐 투어 앱 '오라, 궁' 소개 웹사이트",
    description: "계원예술대학교 디지털미디어디자인과 졸업전시에서 서울 4대 궁궐 투어 앱 '오라, 궁' 서비스의 소개 웹사이트 개발을 담당했습니다. GSAP 라이브러리를 활용한 부드러운 가로 스크롤 애니메이션과 Transform, Intersection Observer API를 활용한 인터랙티브 3D 캐러셀을 구현했습니다. feature 브랜치 전략을 활용한 Git 버전 관리와 pull request를 통한 코드 리뷰로 팀 협업을 진행했습니다.",
    github: "https://github.com/toosign00/ora-gung",
    deploy: "https://ora-gung.vercel.app"
  },
  'type': {
    title: "TYPE",
    type: "Personal",
    duration: "2024.05 ~ 2024.07",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "타이포그래피 소개 웹사이트",
    description: "타이포그래피를 소개하는 웹사이트를 제작했습니다. JavaScript의 이벤트 시스템과 DOM 조작을 활용하여 사용자가 자간, 행간, 크기, 무게를 실시간으로 조절할 수 있는 인터랙티브한 인터페이스를 구현했습니다. 라이트/다크 모드 전환 기능을 추가하고, sessionStorage를 통해 사용자 설정값을 효율적으로 관리했습니다. 또한 미디어 쿼리를 활용한 반응형 웹 디자인을 적용하여 다양한 디바이스에서의 일관된 사용자 경험을 제공했습니다.",
    github: "https://github.com/toosign00/typography",
    deploy: "https://toosign00.github.io/typography"
  },
  'olly': {
    title: "올리",
    type: "Team",
    duration: "2024.03 ~ 2024.07",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "치매 도우미 앱 올리 소개 웹사이트",
    description: "올리",
    github: "https://github.com/toosign00/OLLY",
    deploy: "https://toosign00.github.io/OLLY"
  },
  'minigame': {
    title: "기묘한 이야기 미니게임",
    type: "Personal",
    duration: "2024.05 ~ 2024.07",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "카드 짝 맞추기 게임",
    description: "JavaScript로 구현한 카드 짝 맞추기 게임입니다. 기묘한 이야기 컨셉으로 제작했습니다. 카드 매칭 로직, 타이머 기능, 애니메이션을 구현했습니다. DOM 조작을 통해 동적으로 카드를 생성하고 Math.random()으로 무작위 배치했으며, localStorage로 사용자의 게임 기록을 저장하고 단계별 난이도 시스템을 적용했습니다.",
    github: "https://github.com/toosign00/minigame",
    deploy: "https://toosign00.github.io/minigame"
  },
  'film-magazine': {
    title: "Film Magazine",
    type: "Personal",
    duration: "2023.09 ~ 2024.12",
    technologies: [
      techStack.html,
      techStack.css,
      techStack.javascript
    ],
    summary: "필름 매거진 컨셉의 웹사이트",
    description: "필름 매거진 컨셉의 웹사이트",
    github: "https://github.com/toosign00/film_magazine",
    deploy: "https://toosign00.github.io/film_magazine"
  }
};

// ProjectsManager 클래스 정의
class ProjectsManager {
  constructor() {
    this.projectsGrid = document.querySelector('.projects--grid');
  }

  createProjectCard(projectId, project) {
    return `
      <article class="project--item" data-project-id="${projectId}">
        <div class="project--thumbnail">
          <img src="./assets/images/thumbnail-${projectId}.webp" alt="${project.title} 프로젝트 썸네일" loading="lazy">
        </div>
        <div class="project--info">
          <div class="project--title-wrapper">
            <h3 class="project--title">${project.title}</h3>
            <p class="project--type">${project.type}</p>
          </div>
          <p class="project--duration">${project.duration}</p>
          <p class="project--description">${project.summary}</p>
          <div class="project--tags">
            ${this.createTechnologyTags(project.technologies)}
          </div>
        </div>
      </article>
    `;
  }

  createTechnologyTags(technologies) {
    return technologies
      .map(tech => `<img src="${tech.imgSrc}" alt="${tech.alt}" title="${tech.name}">`)
      .join('');
  }

  renderProjects() {
    const projectsHTML = Object.entries(projects)
      .map(([id, project]) => this.createProjectCard(id, project))
      .join('');

    this.projectsGrid.innerHTML = projectsHTML;
  }
}

// ProjectModal 클래스 정의
class ProjectModal {
  constructor() {
    this.modal = document.getElementById('projectModal');
    this.modalClose = this.modal.querySelector('.modal--close');
    this.modalOverlay = this.modal.querySelector('.modal--overlay');
    this.bindEvents();
  }

  bindEvents() {
    this.modalClose.addEventListener('click', () => this.close());
    this.modalOverlay.addEventListener('click', () => this.close());
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isActive()) {
        this.close();
      }
    });
  }

  open(projectId) {
    const project = projects[projectId];
    if (!project) return;

    this.updateContent(project);
    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  isActive() {
    return this.modal.classList.contains('active');
  }

  updateContent(project) {
    this.modal.querySelector('.modal--title').textContent = project.title;
    this.modal.querySelector('.modal--duration').textContent = project.duration;
    this.updateTechnologies(project.technologies);
    this.modal.querySelector('.modal--description').textContent = project.description;
    this.updateLinks(project);
  }

  updateTechnologies(technologies) {
    const techContainer = this.modal.querySelector('.modal--technologies');
    techContainer.innerHTML = technologies
      .map(tech => `
        <img 
          class="modal--tech-img" 
          src="${tech.imgSrc}" 
          alt="${tech.name}"
          title="${tech.name}"
        >
      `)
      .join('');
  }

  updateLinks(project) {
    const githubLink = this.modal.querySelector('.github-link');
    const deployLink = this.modal.querySelector('.deploy-link');

    githubLink.href = project.github;

    if (project.deploy) {
      deployLink.style.display = 'inline-block';
      deployLink.href = project.deploy;
    } else {
      deployLink.style.display = 'none';
    }
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  const projectsManager = new ProjectsManager();
  projectsManager.renderProjects();

  const modal = new ProjectModal();

  // 프로젝트 클릭 이벤트 위임
  document.querySelector('.projects--grid').addEventListener('click', (e) => {
    const projectItem = e.target.closest('.project--item');
    if (projectItem) {
      modal.open(projectItem.dataset.projectId);
    }
  });
});


// ======= Contact 섹션 =======
// EmailJS 초기화
emailjs.init("_fLh71BSAA_4dy3Bh");

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// 폼 제출 이벤트에 대한 핸들러 등록
document.getElementById('emailForm').addEventListener('submit', async function (event) {
  // 폼의 기본 제출 동작 방지
  event.preventDefault();

  // 입력 필드와 버튼 선택
  const emailInput = this.querySelector('[name="reply_to"]');
  const submitButton = document.querySelector('.submit--btn');
  const email = emailInput.value;

  // 이메일 유효성 검사
  if (!isValidEmail(email)) {
    emailInput.setCustomValidity('올바른 이메일 형식이 아닙니다.');
    // 브라우저의 기본 검증 UI로 오류 표시
    emailInput.reportValidity();
    return;
  }

  // 이메일이 유효한 경우 이전 오류 메시지 초기화
  emailInput.setCustomValidity(''); // 유효성 메시지 초기화

  // Loading 상태 표시
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="bi bi-hourglass"></i> 전송중...';

  try {
    await emailjs.sendForm('Portfolio_Email_Form', 'template_7a418yv', this, '_fLh71BSAA_4dy3Bh');
    alert('이메일이 성공적으로 전송되었습니다!');
    this.reset();
  } catch (error) {
    alert('전송 실패: ' + error.text);
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = '보내기 <i class="bi bi-send"></i>';
  }
});