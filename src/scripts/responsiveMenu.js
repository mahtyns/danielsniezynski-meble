const menu = document.querySelector('.burger-menu')
const closeBtn = document.querySelector(".responsive-close")
const menuLinks = document.querySelectorAll('.menu-mobile-links li')

const closeMenu = () => {
    const links = document.querySelector('.menu-mobile-links');
    links.classList.add('closed')
}

const openMenu = () => {
    const links = document.querySelector('.menu-mobile-links');
    links.classList.remove('closed')
}


closeBtn.addEventListener('click', closeMenu);
menu.addEventListener('click', openMenu)
menuLinks.forEach(link => link.addEventListener('click', closeMenu))