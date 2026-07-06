const faqItems = document.querySelectorAll('[data-faq-item]');

faqItems.forEach(item => {
  const trigger = item.querySelector('[data-faq-trigger]');

  const iconToOpen = trigger.querySelector('[data-to-open]');
  const iconToClose = trigger.querySelector('[data-to-close]');

  const answear = item.querySelector('[data-faq-answear]');

  trigger.addEventListener('click', () => {
    const isCurrentlyOpen = answear.dataset.visible === 'open';

    faqItems.forEach(el => {
      const elTrigger = el.querySelector('[data-faq-trigger]');
      const elToOpenIcon = elTrigger.querySelector('[data-to-open]');
      const elToCloseIcon = elTrigger.querySelector('[data-to-close]');
      const elAnswear = el.querySelector('[data-faq-answear]');

      if (elAnswear) elAnswear.dataset.visible = 'close';
      if (elToOpenIcon) elToOpenIcon.dataset.visible = 'open';
      if (elToCloseIcon) elToCloseIcon.dataset.visible = 'close';
    });

    if (!isCurrentlyOpen) {
      answear.dataset.visible = 'open';
      iconToOpen.dataset.visible = 'close';
      iconToClose.dataset.visible = 'open';
    }
  });
});