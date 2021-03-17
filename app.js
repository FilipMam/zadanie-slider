const arrowLeft = document.querySelector(".arrow--left");
const arrowRight = document.querySelector(".arrow--right");
const images = document.querySelectorAll("img");

let currentSlide;

const showSlide = (slideIndex) => {
    document.querySelector(".active") && document.querySelector(".active").classList.remove("active");
    [...images][slideIndex].classList.add("active");
    currentSlide = slideIndex;
};


arrowLeft.addEventListener("click", () => {
    let nextSlide;
    if (currentSlide === 0) {
        nextSlide = images.length - 1;
    } else {
        nextSlide = currentSlide - 1;
    }
    showSlide(nextSlide);
});

arrowRight.addEventListener("click", () => {
    let nextSlide;
    if (currentSlide === images.length - 1) {
        nextSlide = 0;
    } else {
        nextSlide = currentSlide + 1;
    }
    showSlide(nextSlide);
});

showSlide(1);
