const hamburger = document.querySelector(".hamburger");
const menuElements = document.querySelectorAll(".nav__link");
const logo = document.querySelector(".nav__img");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  document.querySelector(".nav__menu").classList.toggle("active");
});

menuElements.forEach((element) => {
  element.addEventListener("click", () => {
    hamburger.classList.remove("active");
    document.querySelector(".nav__menu").classList.remove("active");
  });
});

logo.addEventListener("click", () => {
  hamburger.classList.remove("active");
  document.querySelector(".nav__menu").classList.remove("active");
});

window.addEventListener("load", () => {
  document.querySelector(".loader-wrapper").style.display = "none";
});
