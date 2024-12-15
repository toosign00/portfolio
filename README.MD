# 프론트엔드 개발자 노현수 포트폴리오

<br>
<br>

## 프로젝트 소개

계원예술대학교 디지털미디어디자인 2학년 2학기 포트폴리오 수업에서 제작한 개인 포트폴리오 웹사이트입니다.
헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였고, 스킬 버튼을 클릭하면 해당 스킬의 숙련도를 타이핑 효과로 표시합니다.
또한, 프로젝트 모달 창을 통해 상세 설명을 확인할 수 있습니다.

성능 최적화, 웹표준, 접근성, SEO 최적화를 고려하여 개발하였으며, Google Lighthouse 평가에서 모든 항목에서 100점을 기록하였습니다.

[🌐 웹사이트 보러가기](https://toosign.kr/)

<br>
<br>

## 프로젝트 개요

프로젝트 기간 : `202412` ~ 진행 중

인원 : 개인

프로젝트 목적 : 개인 포트폴리오

<br>
<br>

## 기술 스택

<div>
  <img src="https://img.shields.io/badge/HTML5-%23E33F26?style=flat&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=JavaScript&logoColor=black">
</div>

<br>
<br>

## 주요 기능

### 라이트 / 다크모드 구현

`data-theme`속성을 이용하여 라이트 / 다크모드를 구현했습니다

`localStorage`를 이용하여 사용자가 설정한 테마 정보를 저장하여, 페이지를 이동하거나 닫은 후 다시 접속하더라도 모드 값이 유지되도록 했습니다.

또한 head 내에 로컬 저장소에 적용된 테마 정보 값에 따라 즉시 테마를 적용하는 스크립트를 배치하여 `Blocking`하고, DOM이 로드되기전에 미리 테마를 적용하여 페이지 새로고침 시에 깜빡이는 현상을 막았습니다.

![2024-12-1604 04 40-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/f89a2951-e02f-4c74-bc3e-5b0a334c92b4)
<br>

### 부드러운 스크롤

헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였습니다.

![scroll](https://github.com/user-attachments/assets/c4bc9a4c-c9e6-4ec4-b943-08db38fffd79)
<br>

### 타이핑 효과

스킬 버튼을 클릭 시 해당 스킬의 숙련도를 타이핑 효과로 나타내는 기능을 구현하였습니다.

![2024-12-1603 51 17-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/94a7cc23-967e-4137-89d1-452e034ef3fd)
<br>

### 모달창 팝업 효과

모달 창 클릭 시 팝업 효과를 구현하였습니다. 프로젝트 정보를 객체로 정의하고 `ProjectModal class`를 이용해 동적으로 생성되도록 하였습니다.

![2024-12-1603 56 23-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c442fdac-a917-4d2f-99c0-88c12c85a682)
<br>

### 이메일 폼

`EmailJS`를 사용하여 간편하게 이메일을 보낼 수 있도록 구현하였습니다.

<img width="600" alt="스크린샷 2024-12-16 04 01 50" src="https://github.com/user-attachments/assets/69b5be56-1b11-4965-8e79-b98656404d2b" />
<br>

### 성능 최적화, 웹표준, 접근성, SEO 최적화

성능 최적화를 위해 다양한 `loading="lazy"` 등 다양한 방법을 고려하고 적용하였으며, 시멘틱 태그를 활용하여 웹표준을 준수했습니다.

 `alt`, `aria-label` 을 사용하여 접근성도 고려했습니다.
 
 또한 `Meta Data`, ` Open graph`, `robots.text` 그리고 `Sitemap.xml`를 적용하여 SEO 최적화를 위해 노력했습니다.

<img width="600" alt="스크린샷 2024-12-16 04 32 44 1"
src="https://github.com/user-attachments/assets/c0f0a929-13d1-4ce3-8127-b5c6da9703c4" />


<br>
<br>

## 주요 코드

### 라이트 / 다크모드 구현

```javascript
<!-- Blocking JS -->
<script>
// 헤드 내에 배치
// 페이지 로드 전에 즉시 테마 적용
(function () {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  })();
</script>

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
```

<br>

### 타이핑 효과

```javascript
document.addEventListener("DOMContentLoaded", () => {
  // 각 스킬 박스에 대한 설명을 담은 객체 생성
  const skillDescriptions = {
    "html-box": "HTML5 문서 구조를 이해하며, 시멘틱 코드를 사용하고, SEO 적용을 고려하여 최적화한 경험이 있습니다.",
    "css-box": "Media Query, CSS3, Flex-box와 CSS Grid에 능숙하며, CSS 방법론을 사용해 재사용성과 유지보수성을 고려한 코드를 작성할 수 있습니다.",
    "js-box": "JavaScript ES6 이상 문법과 DOM 조작을 활용해 동적 웹페이지를 구현하며, Stack, Queue, Event Loop, Heap 등의 동작 원리와 비동기 처리(Callback, async/await, Promise)에 대한 이해를 갖추고 있습니다.",
    "node-box": "Node.js와 Express.js를 활용해 서버를 구축하고, npm으로 라이브러리를 관리하며, MongoDB와의 연동이 가능합니다.",
    "git-box": "Git을 활용한 버전 관리와 branch, merge, rebase를 통한 협업에 능숙하며, 다양한 브랜치 전략(Git flow, Trunk-based)을 적용할 수 있습니다.",
    "github-box": "GitHub를 사용해 원격 저장소를 관리하고, Pull Request 기반의 코드 리뷰와 브랜치 보호 규칙 설정을 통해 협업 프로세스를 최적화한 경험이 있습니다.",
    design: "Figma와 Adobe 디자인 툴을 활용하며, UI/UX 디자인 프로세스에 대한 이해를 바탕으로 사용자 중심의 디자인을 구현할 수 있습니다.",
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
        this.element.textContent = "";
      }

      // 진행 중인 타이핑이 있다면 중지
      clearTimeout(this.typingTimeout);
      this.element.textContent = "";

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
  const typewriter = new TypeWriter(document.querySelector(".skill--description-text"));

  // 모든 스킬 박스에 클릭 이벤트 설정하는 함수
  const initializeSkillBoxes = () => {
    // 일반 스킬 박스들 이벤트 설정
    Object.keys(skillDescriptions).forEach((id) => {
      if (id === "design") return; // 디자인은 따로 처리

      const element = document.getElementById(id);
      if (element) {
        element.addEventListener("click", () => typewriter.type(skillDescriptions[id]));
      }
    });

    // 디자인 스킬 박스들 이벤트 설정
    document.querySelectorAll(".design-box").forEach((box) => {
      box.addEventListener("click", () => typewriter.type(skillDescriptions["design"]));
    });
  };

  // 페이지 로드 시 초기화 실행
  initializeSkillBoxes();
});
```

<br>

### 모달창 팝업 효과

```javascript
// ProjectModal 클래스 정의
class ProjectModal {
  constructor() {
    this.modal = document.getElementById("projectModal");
    this.modalClose = this.modal.querySelector(".modal--close");
    this.modalOverlay = this.modal.querySelector(".modal--overlay");
    this.bindEvents();
  }

  bindEvents() {
    this.modalClose.addEventListener("click", () => this.close());
    this.modalOverlay.addEventListener("click", () => this.close());
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isActive()) {
        this.close();
      }
    });
  }

  open(projectId) {
    const project = projects[projectId];
    if (!project) return;

    this.updateContent(project);
    this.modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  close() {
    this.modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  isActive() {
    return this.modal.classList.contains("active");
  }

  updateContent(project) {
    this.modal.querySelector(".modal--title").textContent = project.title;
    this.modal.querySelector(".modal--duration").textContent = project.duration;
    this.updateTechnologies(project.technologies);
    this.modal.querySelector(".modal--description").textContent = project.description;
    this.updateLinks(project);
  }

  updateTechnologies(technologies) {
    const techContainer = this.modal.querySelector(".modal--technologies");
    techContainer.innerHTML = technologies
      .map(
        (tech) => `
        <img 
          class="modal--tech-img" 
          src="${tech.imgSrc}" 
          alt="${tech.name}"
          title="${tech.name}"
        >
      `
      )
      .join("");
  }

  updateLinks(project) {
    const githubLink = this.modal.querySelector(".github-link");
    const deployLink = this.modal.querySelector(".deploy-link");

    githubLink.href = project.github.url;
    githubLink.setAttribute("aria-label", project.github.ariaLabel);

    // 배포 링크가 없는 경우 숨김 처리, 있으면 보이도록 설정 node.js 프로젝트는 deploy 링크가 없음, 추후 AWS를 사용하여 배포 후 링크 추가 예정
    if (project.deploy) {
      deployLink.style.display = "inline-block";
      deployLink.href = project.deploy.url;
      deployLink.setAttribute("aria-label", project.deploy.ariaLabel);
    } else {
      deployLink.style.display = "none";
    }
  }
}

// 초기화
document.addEventListener("DOMContentLoaded", () => {
  const projectsManager = new ProjectsManager();
  projectsManager.renderProjects();

  const modal = new ProjectModal();

  // 프로젝트 클릭 이벤트 위임
  document.querySelector(".projects--grid").addEventListener("click", (e) => {
    const projectItem = e.target.closest(".project--item");
    if (projectItem) {
      modal.open(projectItem.dataset.projectId);
    }
  });
});
```

<br>

### 이메일 폼

```javascript
// EmailJS 초기화
emailjs.init("환경변수");

// 이메일 유효성 검사 함수
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
}

// 폼 제출 이벤트에 대한 핸들러 등록
document.getElementById("emailForm").addEventListener("submit", async function (event) {
  // 폼의 기본 제출 동작 방지
  event.preventDefault();

  // 입력 필드와 버튼 선택
  const emailInput = this.querySelector('[name="reply_to"]');
  const submitButton = document.querySelector(".submit--btn");
  const email = emailInput.value;

  // 이메일 유효성 검사
  if (!isValidEmail(email)) {
    emailInput.setCustomValidity("올바른 이메일 형식이 아닙니다.");
    // 브라우저의 기본 검증 UI로 오류 표시
    emailInput.reportValidity();
    return;
  }

  // 이메일이 유효한 경우 이전 오류 메시지 초기화
  emailInput.setCustomValidity(""); // 유효성 메시지 초기화

  // Loading 상태 표시
  submitButton.disabled = true;
  submitButton.innerHTML = '<i class="bi bi-hourglass"></i> 전송중...';

  try {
    await emailjs.sendForm("환경변수", "환경변수", this, "_fLh71BSAA_4dy3Bh");
    alert("이메일이 성공적으로 전송되었습니다!");
    this.reset();
  } catch (error) {
    alert("전송 실패: " + error.text);
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = '보내기 <i class="bi bi-send"></i>';
  }
});
```


## 총평

### 잘된점

- 라이트 / 다크모드 사용 중 새로고침 시 깜빡거리는 현상을 방지하여 사용자 경험 향상
- 성능 최적화, 웹표준, 접근성, SEO 최적화를 고려하여 개발
- 프로젝트, 모달 데이터를 동적으로 생성


### 아쉬운 점
- 반응형 개발을 하지 못함
- 시간이 부족하여 프로젝트 섹션 설명 부족
