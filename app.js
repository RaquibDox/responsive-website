const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navlogo =document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('active-bar');
    menuLinks.classList.toggle('active-menu');
}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling

const highlightMenu =() =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home_page');
    const aboutMenu = document.querySelector('#about_page');
    const servicesMenu = document.querySelector('#services_page');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);

    //adds 'highlight' class to menu items
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close moble menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.active-bar');
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('active-bar');
        menuLinks.classList.remove('active-menu');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
navlogo.addEventListener('click', hideMobileMenu);