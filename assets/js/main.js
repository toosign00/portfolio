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
let navHome = document.querySelector("#nav--home");

navHome.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.getElementById("theme-toggle").addEventListener("click", function() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");

  if (currentTheme === "dark") {
    body.setAttribute("data-theme", "light");
    document.querySelector(".nav--button-text").textContent = "Light";
    document.querySelector(".nav--button-icon").src = "./assets/images/light-mode-icon.svg";
  } else {
    body.setAttribute("data-theme", "dark");
    document.querySelector(".nav--button-text").textContent = "Dark";
    document.querySelector(".nav--button-icon").src = "./assets/images/dark-mode-icon.svg";
  }
});