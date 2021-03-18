const arrowLeft = document.querySelector(".arrow--left");
const arrowRight = document.querySelector(".arrow--right");
const images = document.querySelectorAll("img");

let currentSlide = 0;

const showSlide = (slideIndex) => {
    document.querySelector(".active") && document.querySelector(".active").classList.remove("active");
    [...images][slideIndex].classList.add("active");
    currentSlide = slideIndex;
};

arrowRight.addEventListener("click", function() {
    
        if (currentSlide == images.length - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        showSlide(currentSlide);
})

arrowLeft.addEventListener("click", function() {
    if (currentSlide == 0) {
        currentSlide = images.length -1
    } else {
        currentSlide--;
    }
    showSlide(currentSlide);
})


 


// Tutaj umieść swój kod.
// Po kliknięciu na strzałkę w prawo powinien się wyświetlić następny slide.
// Po kliknięciu na strzałkę w lewo powinien się wyświetlić porpzedni slide.
// Powodzenia!

showSlide(0);
