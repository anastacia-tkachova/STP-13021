const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');

// Відкриття меню
burgerBtn.addEventListener('click', () => {
  const closeBtnEl = document.querySelector('[data-action="close"]');
});

// Закриття меню кнопкою Х
closeBtnEl.addEventListener('click', e => {
  burgerMenuEl.dataset.visible = 'close';
});
