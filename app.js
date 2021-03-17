const arrowLeft = document.querySelector(".arrow--light");
const arrowRight = document.querySelector(".arrow--right");
const images = document.querySelectorAll("img");

const currentSlide;

const showSlide = (slideIndex) => {
    document.querySelector(".active") && document.querySelector(".active").classList.remove("active");
    [...images][slideIndex].classList.add("active");
    currentSlide = slideIndex;
};

// Tutaj umieść swój kod.
// Po kliknięciu na strzałkę w prawo powinien się wyświetlić następny slide.
// Po kliknięciu na strzałkę w lewo powinien się wyświetlić porpzedni slide.
// Powodzenia!

showSlide(1);
