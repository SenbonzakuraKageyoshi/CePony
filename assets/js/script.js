window.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const menu = document.querySelector('.header__nav');

    const modal = document.querySelector('.modal');
    const modalTriggers = document.querySelectorAll('#modal-trigger');
    const closeModalButton = document.querySelector('.close-modal');

    const openModal = () => {
        modal.classList.add('active');
    };
    
    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeModalButton.addEventListener('click', closeModal);
    modalTriggers.forEach((el) => el.addEventListener('click', openModal))

    const menuHandler = () => {
        menu.classList.toggle('active');
    };

    menuBtn.addEventListener('click', menuHandler);

    const subMenuBtns = document.querySelectorAll('.submenu-button');

    const submenuHandler = (e) => {
        if(e.target.closest('li').querySelector('.header__nav-sublink__list.active')){
            return e.target.closest('li').querySelector('ul').classList.remove('active');
        }
        document.querySelectorAll('.header__nav-sublink__list').forEach((el) => el.classList.remove('active'))
        e.target.closest('li').querySelector('ul').classList.toggle('active');
    }

    subMenuBtns.forEach((el) => el.addEventListener('click', (e) => submenuHandler(e)))
})