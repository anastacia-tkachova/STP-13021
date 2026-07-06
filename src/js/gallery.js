import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.gallery-slider', {
  modules: [Navigation, Autoplay],

  loop: true,
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: '.gallery-next',
    prevEl: '.gallery-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  speed: 1000,

  slidesPerView: 1,
  spaceBetween: 16,

  breakpoints: {
    1440: {
      slidesPerView: 3,
    },
  },
});

swiper.autoplay.stop();

let idleTimer;

function startIdleAnimation() {
  if (window.innerWidth < 1440) return;

  swiper.autoplay.start();
}

function stopIdleAnimation() {
  swiper.autoplay.stop();
}

function resetIdleTimer() {
  stopIdleAnimation();

  clearTimeout(idleTimer);

  idleTimer = setTimeout(() => {
    startIdleAnimation();
  }, 10000);
}

['mousemove', 'mousedown', 'wheel', 'touchstart', 'keydown', 'scroll'].forEach(
  event => {
    window.addEventListener(event, resetIdleTimer, { passive: true });
  }
);

resetIdleTimer();
