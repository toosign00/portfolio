document.addEventListener("DOMContentLoaded", () => {
  // 시스템 다크모드 감지 및 초기 테마 설정
  // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  //   document.body.setAttribute("data-theme", "dark");
  //   document.querySelector(".nav--button-text").textContent = "Dark";
  //   document.querySelector(".nav--button-icon").src = "./assets/images/dark-mode-icon.svg";
  // }

  // 테마 토글 이벤트
  document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme") || "light";
    const isDark = currentTheme === "dark";

    body.setAttribute("data-theme", isDark ? "light" : "dark");
    document.querySelector(".nav--button-text").textContent = isDark ? "Light" : "Dark";
    document.querySelector(".nav--button-icon").src = isDark
      ? "./assets/images/light-mode-icon.svg"
      : "./assets/images/dark-mode-icon.svg";
  });
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
    'node-box': 'Node.js와 Express.js를 활용해 서버를 구축하고, npm으로 라이브러리를 관리하며, MongoDB와의 연동이 가능합니다',
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

// EmailJS 초기화 
emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

// 폼 제출 이벤트 처리
document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // 전송 버튼 비활성화
  document.querySelector('.submit--btn').disabled = true;

  // EmailJS로 이메일 전송
  emailjs.sendForm(process.env.EMAILJS_SERVICE_ID,
    process.env.EMAILJS_TEMPLATE_ID, this, {
    to_name: "노현수"
  })
    .then(function () {
      alert('이메일이 성공적으로 전송되었습니다!');
      document.getElementById('emailForm').reset();
    }, function (error) {
      alert('전송 실패: ' + error.text);
    })
    .finally(function () {
      // 전송 버튼 다시 활성화
      document.querySelector('.submit--btn').disabled = false;
    });
});