(() => {
  const menuContainer = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => menuContainer.classList.toggle('is-open');
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window
    .matchMedia('(min-width: 600px)')
    .addEventListener(
      'change',
      e => e.matches && menuContainer.classList.remove('is-open'),
    );
})();
