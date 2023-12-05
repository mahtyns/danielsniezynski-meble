let slideIndex = 0;
const dots = document.querySelectorAll('.dot');
const reviewSlides = document.querySelectorAll('.slides');
let intervalId;

const showReviews = (n) => {
    for (let i = 0; i < reviewSlides.length; i++) {
        reviewSlides[i].classList.add('hidden');
        dots[i].classList.remove('bg-main-black');
    }

    slideIndex = n; 

    if (slideIndex >= reviewSlides.length) {
        slideIndex = 0; 
    }

    reviewSlides[slideIndex].classList.remove('hidden');
    dots[slideIndex].classList.add('bg-main-black');

    slideIndex++; 
}

showReviews(slideIndex);

intervalId = setInterval(() => {
    showReviews(slideIndex);
}, 4000);

dots.forEach((dot, index) => dot.addEventListener('click', () => {
    console.log(index);
    clearInterval(intervalId); 
    showReviews(index);
    intervalId = setInterval(() => {
        showReviews(slideIndex);
    }, 3000);
}));