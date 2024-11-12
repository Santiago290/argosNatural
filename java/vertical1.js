document.addEventListener("DOMContentLoaded", function() {
    const vertical = document.querySelector(".sec1-cont2 img");

    function verificarTamañoVentana() {
        if (window.innerWidth <= 800) {
            vertical.src = 'imagenes/Productos-verticales-GomaDeTara.webp';
        } else {
            vertical.src = 'imagenes/GomaDeTara3.webp';
        }
    }

    verificarTamañoVentana();

    window.addEventListener('resize', verificarTamañoVentana);
});
