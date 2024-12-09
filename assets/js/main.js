// 페이지 로드 시 실행 
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

// 헤더 높이만큼 section padding-top 조정
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

// 네비게이션 메뉴 클릭 시 해당 section으로 이동
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

document.addEventListener('DOMContentLoaded', () => {
  // 설명 텍스트 객체 생성
  const skillsMap = {
    'html-box': 'HTML5 문서 구조를 이해하며, 시멘틱 코드를 사용하고, SEO 적용을 고려하여 최적화한 경험이 있습니다.',
    'css-box': 'Media Query, CSS3, Flex-box와 CSS Grid에 능숙하며, CSS 방법론을 사용해 재사용성과 유지보수성을 고려한 코드를 작성할 수 있습니다.',
    'js-box': 'JavaScript ES6 이상 문법과 DOM 조작을 활용해 동적 웹페이지를 구현하며, Stack, Queue, Event Loop, Heap 등의 동작 원리와 비동기 처리(Callback, async/await, Promise)에 대한 이해를 갖추고 있습니다.',
    'node-box': 'Node.js와 Express.js를 활용해 서버를 구축하고, npm으로 라이브러리를 관리하며, MongoDB와의 연동이 가능합니다.',
    'git-box': 'Git을 활용한 버전 관리와 branch, merge, rebase를 통한 협업에 능숙하며, 다양한 브랜치 전략(Git flow, Trunk-based)을 적용할 수 있습니다.',
    'github-box': 'GitHub를 사용해 원격 저장소를 관리하고, Pull Request 기반의 코드 리뷰와 브랜치 보호 규칙 설정을 통해 협업 프로세스를 최적화한 경험이 있습니다.'
  };

  // 타이핑 효과 함수
  const resultsText = document.getElementById('results--text');
  let typingTimeout;

  const typeWriter = text => {
    if (resultsText.textContent === text) return;

    // 타이핑 중인 경우 타이핑 중지
    clearTimeout(typingTimeout);
    resultsText.textContent = '';
    let index = 0;

    // 타이핑 효과
    const type = () => {
      if (index < text.length) {
        resultsText.textContent += text.charAt(index);
        index++;
        typingTimeout = setTimeout(type, 10);
      }
    };

    // 타이핑 시작
    type();
  };

  // 개별 스킬 박스 이벤트 리스너
  Object.keys(skillsMap).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('click', () => typeWriter(skillsMap[id]));
    }
  });

  // 디자인 박스 공통 이벤트 리스너
  const designText = 'Figma와 Adobe 디자인 툴을 활용하며, UI/UX 디자인 프로세스에 대한 이해를 바탕으로 사용자 중심의 디자인을 구현할 수 있습니다.';
  document.querySelectorAll('.design-box').forEach(box => {
    box.addEventListener('click', () => typeWriter(designText));
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project--item');
  const modal = document.getElementById('projectModal');
  const modalOverlay = modal.querySelector('.modal--overlay');
  const modalClose = modal.querySelector('.modal--close');

  function openModal(projectData) {
    // 모달 내용 업데이트
    modal.querySelector('.modal--image').src = projectData.querySelector('img').src;
    modal.querySelector('.modal--title').textContent = projectData.querySelector('.project--title').textContent;
    modal.querySelector('.modal--duration').textContent = projectData.querySelector('.project--duration').textContent;
    modal.querySelector('.modal--description').textContent = projectData.querySelector('.project--description').textContent;

    // 태그 복사
    const tagsContainer = modal.querySelector('.modal--tags');
    tagsContainer.innerHTML = '';
    const projectTags = projectData.querySelector('.project--tags');
    if (projectTags) {
      // project--tags의 내용을 그대로 복사
      const newTags = projectTags.cloneNode(true);
      tagsContainer.appendChild(newTags);
    }

    // 모달 표시
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // 스크롤 복원
  }

  // 이벤트 리스너 등록
  projectItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
  });
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // ESC 키로 모달 닫기
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});

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


// const tags = document.querySelectorAll('.project--tags');

// tags.forEach(tag => {
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   tag.addEventListener('mousedown', (e) => {
//     isDown = true;
//     tag.style.cursor = 'grabbing';
//     startX = e.pageX - tag.offsetLeft;
//     scrollLeft = tag.scrollLeft;
//   });

//   tag.addEventListener('mouseleave', () => {
//     isDown = false;
//     tag.style.cursor = 'grab';
//   });

//   tag.addEventListener('mouseup', () => {
//     isDown = false;
//     tag.style.cursor = 'grab';
//   });

//   tag.addEventListener('mousemove', (e) => {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - tag.offsetLeft;
//     const walk = (x - startX);
//     tag.scrollLeft = scrollLeft - walk;
//   });
// });