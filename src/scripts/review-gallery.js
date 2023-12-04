let slideIndex = 0;

const showReviews = (n) => {
    const reviewSlides = document.querySelectorAll('.slides');
    const dots = document.querySelectorAll('.dot');
    let i;

    for (i = 0; i < reviewSlides.length; i++) {
        reviewSlides[i].classList.add('hidden');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('bg-main-black');
    }

    slideIndex++;
    if (slideIndex > reviewSlides.length) {
        slideIndex = 1;
    }

    reviewSlides[slideIndex - 1].classList.remove('hidden');
    dots[slideIndex - 1].classList.add('bg-main-black');

    // if (n > reviewSlides.length) {slideIndex = 1}
    // if (n < 1) {slideIndex = reviewSlides.length}
    // for (i = 0; i < reviewSlides.length; i++) {
    // reviewSlides[i].classList.add('hidden');
    // }
    // for (i = 0; i < dots.length; i++) {
    // dots[i].classList.remove('bg-main-black');
    // }
    // reviewSlides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].classList.add('bg-main-black');
}

showReviews(slideIndex);

setInterval(showReviews, 4000);