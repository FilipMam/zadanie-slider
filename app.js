const arrowLeft = document.querySelector(".arrow--light");
const arrowRight = document.querySelector(".arrow--right");

const currentSlide = 0;

const showSlide = (slideIndex) => {
    [...document.querySelectorAll("img")][slideIndex].classList.add("active");
};

// Tutaj umieść swój kod.
// Po kliknięciu na strzałkę w prawo powinien się wyświetlić następny slide.
// Po kliknięciu na strzałkę w lewo powinien się wyświetlić porpzedni slide.
// Powodzenia!

showSlide(1);
