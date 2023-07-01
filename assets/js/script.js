window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.header__nav');

    const menuHandler = () => {
        menu.classList.toggle('active');
    };

    menuBtn.addEventListener('click', menuHandler)
})