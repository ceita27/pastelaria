let slideIndex = 0;

function mostrarSlides(n) {
    const slides = document.querySelectorAll(".slide");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slides").style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}

function moverSlides(n) {
    slideIndex += n;
    mostrarSlides(slideIndex);
}

mostrarSlides(slideIndex);

