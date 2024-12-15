# 프론트엔드 개발자 노현수 포트폴리오

<br>
<br>

## 프로젝트 소개

계원예술대학교 디지털미디어디자인 2학년 2학기 포트폴리오 수업에서 제작한 개인 포트폴리오 웹사이트입니다.
헤더 메뉴 클릭 시 스크롤 이동 기능을 구현하였고, 스킬 버튼을 클릭하면 해당 스킬의 숙련도를 타이핑 효과로 표시합니다.
또한, 프로젝트 모달 창을 통해 상세 설명을 확인할 수 있습니다.

성능 최적화, 접근성, SEO 최적화를 고려하여 개발하였으며, Google Lighthouse 평가에서 모든 항목에서 100점을 기록하였습니다.

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

또한 head 내에  로컬 저장소에 적용된 테마 정보 값에 따라 즉시 테마를 적용하는 스크립트를 배치하여 `Blocking`하고, DOM이 로드되기전에 미리 테마를 적용하여 페이지 새로고침 시에 깜빡이는 현상을 막았습니다.

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
<br>

## 주요 코드

### 라이트 / 다크모드 구현

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

### 

