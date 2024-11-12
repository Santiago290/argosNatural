document.addEventListener("DOMContentLoaded", function() {
    let circulos = document.querySelectorAll(".circulo1");
    let circulos1 = document.querySelectorAll(".circulo");
    let cuadros = document.querySelectorAll(".sec2-caja-sorpresa");
    let cuadros1 = document.querySelectorAll(".sec2-caja-sorpresa1");

    circulos.forEach((circulo, index) => {
        circulo.addEventListener("mouseenter", () => {
            cuadros[index].classList.add("op");
        });

        circulo.addEventListener("mouseleave", () => {
            cuadros[index].classList.remove("op");
        });
    });

    circulos1.forEach((circulo, index) => {
        circulo.addEventListener("mouseenter", () => {
            cuadros1[index].classList.add("op1");
        });

        circulo.addEventListener("mouseleave", () => {
            cuadros1[index].classList.remove("op1");
        });
    });
});