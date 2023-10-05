const menu = document.getElementById('burger-menu')
const closeBtn = document.getElementById("closeBtn")
const responsiveLinks = document.getElementById('responsive-links')

closeBtn.addEventListener('click', () => {
    responsiveLinks.classList.add('hidden')
})

menu.addEventListener('click', () => {
    responsiveLinks.classList.remove('hidden')
})