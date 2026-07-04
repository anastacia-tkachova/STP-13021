const burgerBtnEl = document.querySelector('[data-action="open"]');
const burgerMenuEl = document.querySelector('.mobile-menu[data-visible]');
const bodyEl = document.body;

burgerBtnEl.addEventListener('click', () => {
  const isOpen = burgerMenuEl.dataset.visible === 'open';

  const iconEl = burgerBtnEl.querySelector('svg');
  const letterEl = burgerBtnEl.querySelector('span');

  if (isOpen) {
    burgerMenuEl.dataset.visible = 'close';

    iconEl.dataset.visible = 'open';
    letterEl.dataset.visible = 'close';
    bodyEl.removeAttribute('data-scroll');
  } else {
    burgerMenuEl.dataset.visible = 'open';

    iconEl.dataset.visible = 'close';
    letterEl.dataset.visible = 'open';
    bodyEl.setAttribute('data-scroll', 'lock');
  }
});

const menuLinks = document.querySelectorAll('.mobile-nav-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    const iconEl = burgerBtnEl.querySelector('svg');
    const letterEl = burgerBtnEl.querySelector('span');

    burgerMenuEl.dataset.visible = 'close';

    iconEl.dataset.visible = 'open';
    letterEl.dataset.visible = 'close';
    bodyEl.removeAttribute('data-scroll');
  });
});
