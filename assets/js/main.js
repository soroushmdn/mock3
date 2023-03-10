// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@      SHOW & REMOVE MENU      @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const navToggle = document.querySelector('.nav__toggle'),
  navClose = document.querySelector('.nav__close'),
  navMenu = document.querySelector('.nav__menu'),
  navLogo = document.querySelector('.nav__menu-logo'),
  overlay = document.querySelector('.overlay');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
  overlay.classList.add('show-overlay');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
});

navLogo.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
  overlay.classList.remove('show-overlay');
});

const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@    SHOW & REMOVE DROPDOWN    @@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const dropdownButtons = document.querySelectorAll('.dropdown-box');
dropdownButtons.forEach((e) => {
  e.addEventListener('click', function () {
    this.parentElement.classList.toggle('active');
  });
});

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@      HOME TITLE ANIMATION      @@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const homeText = document.querySelector('.home__animation-text');

function homeAnimation() {
  setTimeout(() => {
    homeText.textContent = 'متفاوت ترین';
  }, 0);

  setTimeout(() => {
    homeText.textContent = 'جامع ترین';
  }, 4000);

  setTimeout(() => {
    homeText.textContent = 'بروز ترین';
  }, 8000);
}

homeAnimation();
setInterval(homeAnimation, 12000);
