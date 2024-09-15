let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

/*
* Moves the slider gallery to the next slide
*/
function moveSlider(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    const slideWidth = slides[0].clientWidth;
    const offset = -slideIndex * slideWidth;

    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}