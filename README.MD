# 프론트엔드 개발자 노현수 포트폴리오

<br>
<br>

## 📚 목차
  - [📝 프로젝트 소개](#프로젝트-소개)
  - [🛠 기술 스택](#기술-스택)
  - [🗂 프로젝트 구조](#프로젝트-구조)
  - [✨ 주요 기능](#주요-기능)
  - [💻 주요 코드](#주요-기능)
  - [💡 문제 해결](#문제-해결)
  - [📊 회고](#회고)

<br>
<br>

## 📝 프로젝트 소개

계원예술대학교 디지털미디어디자인 2학년 2학기 포트폴리오 수업에서 제작한 개인 포트폴리오 웹사이트입니다.
헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였고, 스킬 버튼을 클릭하면 해당 스킬의 숙련도를 타이핑 효과로 표시합니다.
또한, 프로젝트 모달 창을 통해 상세 설명을 확인할 수 있습니다.

성능 최적화, 웹표준, 접근성, SEO 최적화를 고려하여 개발하였으며, Google Lighthouse 평가에서 모든 항목에서 100점을 기록하였습니다.
<br>

### 개요
프로젝트명 : 포트폴리오 웹사이트  

프로젝트 기간 : `202412` ~ 진행 중

인원 : 개인

프로젝트 목적 : 개인 포트폴리오

배포 URL : [https://toosign.kr](https://toosign.kr)

GitHub : [저장소 링크](https://github.com/toosign00/toosign00.github.io)

<br>
<br>

## 🛠 기술 스택

### Front-end
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Tools & Deployment
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Development Environment
![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<br>
<br>

## 🗂 프로젝트 구조

```
📦 포트폴리오
 ┣ 📂.vercel              # Vercel 배포 설정
 ┣ 📂.vscode              # VS Code 설정
 ┃ ┗ 📜settings.json
 ┣ 📂assets              # 정적 자원 관리
 ┃ ┣ 📂css               # 스타일시트 파일
 ┃ ┣ 📂images            # 이미지 파일
 ┃ ┣ 📂js                # 자바스크립트 파일
 ┃ ┗ 📂pdf               # PDF 문서
 ┣ 📜.gitignore          # Git 제외 파일 설정
 ┣ 📜index.html          # 메인 HTML 파일
 ┣ 📜project.json        # 프로젝트 설정
 ┣ 📜README.md           # 프로젝트 문서
 ┣ 📜robots.txt          # 검색 엔진 크롤링 설정
 ┗ 📜sitemap.xml         # 사이트맵
 ```

<br>
<br>

## ✨ 주요 기능
| 기능 | 설명 |
|:---:|---|
| <img src="https://github.com/user-attachments/assets/f89a2951-e02f-4c74-bc3e-5b0a334c92b4" width="100%" style="max-width: 500px" alt="라이트/다크모드"/> | **🌗 라이트/다크 모드** <br><br> • `data-theme` 속성을 이용한 테마 전환 구현 <br> • `localStorage`로 사용자 테마 설정 유지 <br> • DOM 로드 전 테마 적용으로 깜빡임 현상 방지 <br><br> 👉 [코드 보기](#라이트--다크모드-구현) |
| <img src="https://github.com/user-attachments/assets/c4bc9a4c-c9e6-4ec4-b943-08db38fffd79" width="100%" style="max-width: 500px" alt="스크롤"/> | **📜 부드러운 스크롤** <br><br> • 헤더 메뉴 클릭 시 부드러운 스크롤 이동 <br> • CSS `scroll-behavior: smooth` 활용 <br> • 사용자 경험 향상을 위한 자연스러운 애니메이션 <br><br> 👉 [코드 보기](#부드러운-스크롤) |
| <img src="https://github.com/user-attachments/assets/94a7cc23-967e-4137-89d1-452e034ef3fd" width="100%" style="max-width: 500px" alt="타이핑"/> | **⌨️ 타이핑 효과** <br><br> • 스킬 버튼 클릭 시 타이핑 애니메이션 구현 <br> • TypeWriter 클래스를 활용한 모듈화 <br> • 중복 클릭 방지 로직 구현 <br><br> 👉 [코드 보기](#타이핑-효과) |
| <img src="https://github.com/user-attachments/assets/c442fdac-a917-4d2f-99c0-88c12c85a682" width="100%" style="max-width: 500px" alt="모달"/> | **🔲 모달창 팝업** <br><br> • ProjectModal 클래스로 동적 생성 <br> • 키보드 접근성 고려 (ESC 키 지원) <br> • 프로젝트 정보 동적 렌더링 <br><br> 👉 [코드 보기](#모달창-팝업-효과) |

## ✨ 주요 기능

### 라이트 / 다크모드 구현

`data-theme`속성을 이용하여 라이트 / 다크모드를 구현했습니다

`localStorage`를 이용하여 사용자가 설정한 테마 정보를 저장하여, 페이지를 이동하거나 닫은 후 다시 접속하더라도 모드 값이 유지되도록 했습니다.

또한 head 내에 로컬 저장소에 적용된 테마 정보 값에 따라 즉시 테마를 적용하는 스크립트를 배치하여 `Blocking`하고, DOM이 로드되기전에 미리 테마를 적용하여 페이지 새로고침 시에 깜빡이는 현상을 막았습니다.

![2024-12-1604 04 40-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/f89a2951-e02f-4c74-bc3e-5b0a334c92b4)
<br>
<br>

### 부드러운 스크롤

헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였습니다.

![scroll](https://github.com/user-attachments/assets/c4bc9a4c-c9e6-4ec4-b943-08db38fffd79)
<br>
<br>

### 타이핑 효과

스킬 버튼을 클릭 시 해당 스킬의 숙련도를 타이핑 효과로 나타내는 기능을 구현하였습니다.

![2024-12-1603 51 17-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/94a7cc23-967e-4137-89d1-452e034ef3fd)
<br>
<br>

### 모달창 팝업 효과

모달 창 클릭 시 팝업 효과를 구현하였습니다. 프로젝트 정보를 객체로 정의하고 `ProjectModal class`를 이용해 동적으로 생성되도록 하였습니다.

![2024-12-1603 56 23-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/c442fdac-a917-4d2f-99c0-88c12c85a682)
<br>
<br>

### 이메일 폼

`EmailJS`를 사용하여 간편하게 이메일을 보낼 수 있도록 구현하였습니다.

<img width="600" alt="스크린샷 2024-12-16 04 01 50" src="https://github.com/user-attachments/assets/69b5be56-1b11-4965-8e79-b98656404d2b" />
<br>
<br>

### 성능 최적화, 웹표준, 접근성, SEO 최적화

성능 최적화를 위해 `loading="lazy"` 등 다양한 방법을 고려하고 적용하였으며, 시멘틱 태그를 활용하여 웹표준을 준수했습니다. `alt`, `aria-label` 을 사용하여 접근성도 고려했습니다.
 
 또한 `Meta Data`, ` Open graph`, `robots.text` 그리고 `Sitemap.xml`를 적용하여 SEO 최적화를 위해 노력했습니다.

<img width="600" alt="스크린샷 2024-12-16 04 32 44 1"
src="https://github.com/user-attachments/assets/c0f0a929-13d1-4ce3-8127-b5c6da9703c4" />


<br>
<br>

## 💻 주요 코드

### 라이트 / 다크모드 구현

```html
<!-- head 태그 내에 Blocking JS 적용 -->
    <script>
      // 페이지 로드 전에 즉시 테마 적용
      (function () {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
      })();
```

```javascript
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
    await emailjs.sendForm("Portfolio_Email_Form", "환경변수", this, "환경변수");
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
<br>
<br>

## 💡 문제 해결

### 1. 테마 전환 시 깜빡임 현상 (FOUC)

#### 문제 상황
- 페이지 새로고침 시 라이트/다크 테마가 늦게 적용되어 깜빡임 현상 발생
- 기존 코드는 DOM이 로드된 후에 테마를 적용하여 사용자 경험 저하

#### 해결 방법
```html
<!-- head 태그 내에 Blocking JS 적용 -->
<script>
  (function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  })();
</script>
```

- DOM 로드 전에 즉시 실행되는 Blocking JS 구현
- localStorage에서 사용자가 설정한 테마 정보를 가져와 즉시 적용
- head 태그 내에 스크립트를 배치하여 페이지 렌더링 전에 테마 적용

#### 개선 결과
- 페이지 새로고침 시 깜빡임 현상 완전 제거
- 부드러운 사용자 경험 제공
<br>

### 2. 연속적인 타이핑 효과 충돌

#### 문제 상황
- 스킬 버튼 연속 클릭 시 타이핑 효과들이 충돌하는 현상 발생
- 이전 타이핑이 완료되기 전에 새로운 타이핑이 시작되어 텍스트가 깨지는 현상

#### 해결 방법
```javascript
class TypeWriter {
  constructor(element) {
    this.element = element;
    this.typingTimeout = null;  // timeout ID 관리 추가
  }

  type(text, speed = 10) {
    // 진행 중인 타이핑이 있다면 중지
    clearTimeout(this.typingTimeout);
    this.element.textContent = "";
    
    let index = 0;
    const typeChar = () => {
      if (index < text.length) {
        this.element.textContent += text.charAt(index);
        index++;
        this.typingTimeout = setTimeout(typeChar, speed);
      }
    };
    typeChar();
  }
}
```

- TypeWriter 클래스에 timeout ID를 저장하여 관리하는 기능 추가
- 새로운 타이핑 시작 전 진행 중인 타이핑을 중단하는 로직 구현
- 텍스트 초기화 후 새로운 타이핑 시작

#### 개선 결과
- 연속 클릭 시에도 타이핑 효과가 자연스럽게 동작
- 사용자 인터랙션에 대한 즉각적인 반응성 확보
<br>

### 향후 개선 계획

1. **UI/UX 개선**
   - alert 대신 모달 또는 토스트 메시지로 알림 UI 개선
   - 로딩 상태에 대한 시각적 피드백 추가

2. **반응형 웹 개선**
   - 모바일 우선(Mobile First) 설계 방식 적용
   - 미디어 쿼리 브레이크포인트 최적화 (모바일, 태블릿, 데스크톱)


이러한 문제 해결 과정을 통해 사용자 경험을 개선하고, 코드의 안정성과 유지보수성을 향상시켰습니다.


## 📝 회고

<table>
  <tr>
    <th>✨ 잘된 점</th>
    <th>🤔 아쉬운 점</th>
  </tr>
  <tr>
    <td>
      • 라이트/다크모드 깜빡임 현상 방지<br>
      • 성능, 웹표준, 접근성 최적화<br>
      • 동적 데이터 처리
    </td>
    <td>
      • 반응형 디자인 미구현<br>
      • 프로젝트 설명 부족
    </td>
  </tr>
</table>
