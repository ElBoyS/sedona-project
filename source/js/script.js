isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

const mainNav = document.querySelector(".main-nav");
isMobile.any()
  ? document
      .querySelector(".page-header__toggle")
      .classList.add("page-header--closed")
  : null;

isMobile.any() ? mainNav.classList.add("main-nav--closed") : null;

const toggleOpen = document.querySelector(".page-header__toggle");
const toggleClose = document.querySelector(".main-nav__toggle");

toggleOpen.addEventListener("click", () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    console.log(1);
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--open");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--open");
  }
});

toggleClose.addEventListener("click", () => {
  if (mainNav.classList.contains("main-nav--closed")) {
    console.log(1);
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--open");
  } else {
    mainNav.classList.add("main-nav--closed");
    mainNav.classList.remove("main-nav--open");
  }
});
