const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;
let timer;

function showSlide(i) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    slides[i].classList.add("active");
    dots[i].classList.add("active");

    index = i;
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function startSlider() {
    timer = setInterval(nextSlide, 3000);
}

function resetSlider() {
    clearInterval(timer);
    startSlider();
}

next.addEventListener("click", () => {
    nextSlide();
    resetSlider();
});

prev.addEventListener("click", () => {
    prevSlide();
    resetSlider();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        resetSlider();
    });
});

startSlider();
