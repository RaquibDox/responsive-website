const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');

const mobileMenu = () => {
    menu.classList.toggle('active-bar');
    menuLinks.classList.toggle('active-menu');
}

menu.addEventListener('click', mobileMenu);