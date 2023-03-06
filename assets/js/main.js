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



