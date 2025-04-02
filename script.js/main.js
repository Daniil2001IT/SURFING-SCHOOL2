
const menuBtn = document.querySelector(
    '.menu__btn');

const menu = document.querySelector('.menu');


const menuList = document.querySelector('.header-menu__list');
menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu_open');
});



menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu_open')
});

















