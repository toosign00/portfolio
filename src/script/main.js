// 테마 모드 아이콘 임포트
import darkModeIcon from '../assets/images/dark-mode-icon.svg';
import lightModeIcon from '../assets/images/light-mode-icon.svg';

import { techStack, projects } from './data.js';
import { formatDateForDatetime } from './date-utils.js';

// ======= 테마 토글 버튼 초기화 =======
(function createThemeToggle() {
  // DOM이 준비되었는지 확인하는 함수
  const isDOMReady = () => {
    return document.getElementById('theme-toggle-container') !== null;
  };

  // 버튼 생성 함수
  const createButton = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    const container = document.getElementById('theme-toggle-container');

    if (!container) return false; // 컨테이너가 없으면 실패

    // 버튼 HTML 생성
    const buttonHTML = `
      <button class="nav--button" id="theme-toggle" aria-label="테마 모드 전환">
        <img src="${theme === 'dark' ? darkModeIcon : lightModeIcon}" class="nav--button-icon" alt="테마 모드 아이콘">
        <span class="nav--button-text">${theme === 'dark' ? 'Dark' : 'Light'}</span>
      </button>
    `;

    // 버튼 삽입
    container.innerHTML = buttonHTML;
    return true; // 버튼 생성 성공
  };

  // DOM이 준비되었는지 확인하고 버튼 생성
  if (isDOMReady()) {
    // DOM이 이미 준비되었으면 즉시 버튼 생성
    createButton();
  } else {
    // DOM이 아직 준비되지 않았으면 짧은 간격으로 체크하여 가능한 빨리 버튼 생성
    const checkInterval = setInterval(() => {
      if (isDOMReady() && createButton()) {
        clearInterval(checkInterval); // 버튼 생성 성공 시 인터벌 정지
      }
    }, 10); // 10ms 간격으로 체크
  }
})();

// ======= 라이트 모드 / 다크 모드 토글 =======

document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  const buttonText = document.querySelector('.nav--button-text');
  const buttonIcon = document.querySelector('.nav--button-icon');

  // UI 요소만 업데이트
  updateThemeUI(savedTheme);

  // 테마 전환 버튼 이벤트 리스너
  document.getElementById('theme-toggle').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // 테마 속성 설정 및 로컬 스토리지에 저장
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
  });

  // UI 업데이트 함수
  function updateThemeUI(theme) {
    buttonText.textContent = theme === 'dark' ? 'Dark' : 'Light';
    buttonIcon.src = theme === 'dark' ? darkModeIcon : lightModeIcon;
  }
});

// ======= 헤더 높이만큼 섹션 패딩을 동적으로 조정 =======
document.addEventListener('DOMContentLoaded', () => {
  let header = document.querySelector('header');
  let introSection = document.querySelector('.intro--section');

  let adjustSectionPadding = () => {
    let headerHeight = header.offsetHeight;
    introSection.style.paddingTop = `${headerHeight}px`;
  };

  // 함수 실행 및 윈도우 리사이즈 이벤트 발생 시 함수 실행
  adjustSectionPadding();
  window.addEventListener('resize', adjustSectionPadding);
});

// ======= 네비게이션 메뉴 햄버거 버튼 클릭시 메뉴 토글 =======
const navHamburger = document.querySelector('.nav--hamburger');
const navList = document.querySelector('.nav--list');
const navLinks = document.querySelectorAll('.nav--link');

// 햄버거 메뉴 클릭 시 active 클래스 토글
navHamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// 메뉴 항목 클릭 시 active 클래스 제거
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navList.classList.remove('active');
  });
});

// ======= 메뉴 클릭시 해당 섹션 이동 =======
document.addEventListener('DOMContentLoaded', () => {
  // 네비게이션 링크와 로고 링크 선택
  const navLinks = document.querySelectorAll('.nav--link');
  const logoLink = document.getElementById('logo-link');
  const headerOffset = document.querySelector('header').offsetHeight;

  // 부드러운 스크롤 함수
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - headerOffset,
        behavior: 'smooth',
      });
    }
  };

  // 네비게이션 링크들에 이벤트 리스너 추가
  navLinks.forEach((link) => {
    link.addEventListener('click', smoothScroll);
  });

  // 로고 링크에 이벤트 리스너 추가
  logoLink.addEventListener('click', smoothScroll);
});

// ======= SKills 섹션 스킬 박스 클릭시 해당 스킬 설명을 타이핑 효과로 출력 =======
document.addEventListener('DOMContentLoaded', () => {
  // 각 스킬 박스에 대한 설명을 담은 객체 생성
  const skillDescriptions = {
    'html-box': 'HTML5 문서 구조를 이해하며, 시멘틱 코드를 사용하고, SEO 적용을 고려하여 최적화한 경험이 있습니다.',
    'css-box': 'Media Query, CSS3, Flex-box와 CSS Grid에 능숙하며, CSS 방법론을 사용해 재사용성과 유지보수성을 고려한 코드를 작성할 수 있습니다.',
    'tailwind-box': 'Tailwind CSS를 활용해 빠르고 효율적으로 UI를 구성하며, 디자인 시스템을 적용하여 일관된 스타일을 유지할 수 있습니다.',
    'js-box':
      'JavaScript ES6 이상 문법과 DOM 조작을 활용해 동적 웹페이지를 구현하며, Stack, Queue, Event Loop, Heap 등의 동작 원리와 비동기 처리(Callback, async/await, Promise)에 대한 이해를 갖추고 있습니다.',
    'node-box': 'Node.js와 Express.js를 활용해 서버를 구축하고, npm으로 라이브러리를 관리하며, MongoDB와의 연동이 가능합니다.',
    'git-box':
      'Git을 활용한 버전 관리와 branch, merge, rebase를 통한 협업에 능숙하며, 다양한 브랜치 전략(Git flow, Trunk-based)을 적용할 수 있습니다.',
    'github-box':
      'GitHub를 사용해 원격 저장소를 관리하고, 애자일 방법론을 기반으로 한 스크럼마스터 경험이 있으며, Pull Request 기반의 코드 리뷰와 브랜치 보호 규칙을 통해 팀 협업을 효과적으로 주도했습니다.',
    design: 'Figma와 Adobe 디자인 툴을 활용하며, UI/UX 디자인 프로세스에 대한 이해를 바탕으로 사용자 중심의 디자인을 구현할 수 있습니다.',
  };

  // 타이핑 효과를 구현하는 클래스
  class TypeWriter {
    // 생성자: 텍스트를 표시할 DOM 요소와 타이핑 timeout ID 초기화
    constructor(element) {
      this.element = element;
      this.typingTimeout = null; // timeout ID 관리 추가
    }

    type(text, speed = 10) {
      // 진행 중인 타이핑이 있다면 중지
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
    Object.keys(skillDescriptions).forEach((id) => {
      if (id === 'design') return; // 디자인은 따로 처리

      const element = document.getElementById(id);
      if (element) {
        element.addEventListener('click', () => typewriter.type(skillDescriptions[id]));
      }
    });

    // 디자인 스킬 박스들 이벤트 설정
    document.querySelectorAll('.design-box').forEach((box) => {
      box.addEventListener('click', () => typewriter.type(skillDescriptions['design']));
    });
  };

  // 페이지 로드 시 초기화 실행
  initializeSkillBoxes();
});

// ======= Projects 섹션  =======

// ProjectModal 클래스 정의
class ProjectModal {
  constructor() {
    this.modal = null;
    this.overlay = null;
    this.scrollPosition = 0;
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  create(projectId) {
    const project = projects[projectId];

    // Overlay 생성
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Modal 생성
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'projectModal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'modalTitle');

    modal.innerHTML = `
      <div class="modal--header">
        <h2 class="modal--title" id="modalTitle">
          ${project.title} 
          <time class="modal--text-date" datetime="${formatDateForDatetime(project.duration)}">${project.duration}</time>
        </h2>
        <div class="modal--buttons">
          ${
            project.github
              ? `
            <a href="${project.github.url}" target="_blank" class="modal--button" aria-label="${project.github.ariaLabel}">
              <i class="bi bi-github"></i>
            </a>
          `
              : ''
          }
          ${
            project.deploy
              ? `
            <a href="${project.deploy.url}" target="_blank" class="modal--button" aria-label="${project.deploy.ariaLabel}">
              <i class="bi bi-link-45deg"></i>
            </a>
          `
              : ''
          }
          <button class="modal--button" aria-label="모달 닫기">
            <i class="bi bi-x"></i>
          </button>
        </div>
      </div>
      <img src="${project.images[0].url}" alt="${project.images[0].alt}" class="modal--image">
      <div class="modal--skills">
        ${project.technologies.map((tech) => `<img src="${tech.imgSrc}" alt="${tech.alt} 아이콘" class="modal--skill-icon">`).join('')}
      </div>
      <div class="modal--content">
        <div class="modal--row">
          <p class="modal--label">Type</p>
          <p class="modal--desc">${project.type === 'Team' ? project.teamDetail : project.type}</p>
        </div>
        <div class="modal--row">
          <p class="modal--label">Role</p>
          <p class="modal--desc">${project.role}</p>
        </div>
        <div class="modal--row">
          <p class="modal--label">Details</p>
          <p class="modal--desc">${project.description}</p>
        </div>
      </div>
    `;

    this.modal = modal;
    this.overlay = overlay;

    // 스크롤 위치 저장
    this.scrollPosition = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${this.scrollPosition}px`;

    // DOM에 추가
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // 트랜지션을 위한 타이밍
    requestAnimationFrame(() => {
      overlay.classList.add('open');
      modal.classList.add('open');
    });

    // 이벤트 리스너 추가
    document.addEventListener('keydown', this.handleKeyDown);
    this.addEventListeners();
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  addEventListeners() {
    const closeButton = this.modal.querySelector('.bi-x').parentElement;
    closeButton.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });
  }

  close() {
    if (!this.modal) return;

    const scrollPosition = this.scrollPosition;

    this.modal.classList.remove('open');
    this.overlay.classList.remove('open');

    setTimeout(() => {
      this.modal.remove();
      this.overlay.remove();

      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';

      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPosition,
          behavior: 'instant',
        });
      });

      document.removeEventListener('keydown', this.handleKeyDown);
      this.modal = null;
      this.overlay = null;
    }, 300);
  }

  open(projectId) {
    if (this.modal) {
      this.close();
    }
    this.create(projectId);
  }
}

// ProjectsManager 클래스 정의
class ProjectsManager {
  constructor() {
    this.projectsGrid = document.querySelector('.projects--grid');
    this.projectModal = new ProjectModal();
    this.setupEventListeners();
  }

  createProjectCard(projectId, project) {
    return `
      <article class="project--item" data-project-id="${projectId}" tabindex="0">
        <div class="project--thumbnail">
          <img src="${project.images[0].url}" alt="${project.title} 프로젝트 썸네일" loading="lazy">
        </div>
        <div class="project--info">
          <div class="project--title-wrapper">
            <h3 class="project--title">${project.title}</h3>
            <p class="project--type-icon">${project.type}</p>
          </div>
          <time class="project--duration" datetime="${formatDateForDatetime(project.duration)}">${project.duration}</time>
          <p class="project--description">${project.summary}</p>
          <div class="project--tags">
            ${this.createTechnologyTags(project.technologies)}
          </div>
        </div>
      </article>
    `;
  }

  createTechnologyTags(technologies) {
    return technologies.map((tech) => `<img src="${tech.imgSrc}" alt="${tech.alt}" title="${tech.name}">`).join('');
  }

  renderProjects() {
    const projectsHTML = Object.entries(projects)
      .map(([id, project]) => this.createProjectCard(id, project))
      .join('');

    this.projectsGrid.innerHTML = projectsHTML;
  }

  setupEventListeners() {
    this.projectsGrid.addEventListener('click', (e) => {
      const projectItem = e.target.closest('.project--item');
      if (projectItem) {
        const projectId = projectItem.dataset.projectId;
        this.projectModal.open(projectId);
      }
    });

    // 키보드 접근성
    this.projectsGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.classList.contains('project--item')) {
        const projectId = e.target.dataset.projectId;
        this.projectModal.open(projectId);
      }
    });
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  const projectsManager = new ProjectsManager();
  projectsManager.renderProjects();
});

// ======= Contact 섹션 =======
// EmailJS 초기화
emailjs.init('_fLh71BSAA_4dy3Bh');

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
