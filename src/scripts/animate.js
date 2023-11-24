const elementsToShow = document.querySelectorAll('.reveal')
const windowHeight = window.innerHeight;

const revealElements = () => {

    elementsToShow.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 800
        if (elementTop < elementVisible) {
            element.classList.add('active')
        }

    })
  
}

window.addEventListener("scroll", revealElements);




