

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show-menu");
});



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const verBtn = document.querySelectorAll(".btn-ver");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide) => (slide.style.transform = `translateX(-${slideIndex * 100}%)`));
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function navigateToProduct(){
        window.location.href = "./pages/producto.html";
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    verBtn.forEach(btn => {
        btn.addEventListener("click", navigateToProduct);
    })

    setInterval(nextSlide, 4500);
});


document.addEventListener("DOMContentLoaded", function () {
    const volverBtn = document.querySelector(".btn-volver");
    volverBtn.addEventListener("click", function () {
        history.back(); // Regresar a la página anterior en el historial del navegador
    });
});