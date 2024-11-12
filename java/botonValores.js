let sec7Imgs = document.querySelectorAll(".sec7-img");

sec7Imgs.forEach((sec7Img) => {
    let bImagen = sec7Img.querySelector(".bImagen");
    let contenido = sec7Img.querySelector(".sec7-contenido2");

    bImagen.addEventListener("mouseenter", () => {
        sec7Imgs.forEach((otherSec7Img) => {
            if (otherSec7Img !== sec7Img) {
                let otherContenido = otherSec7Img.querySelector(".sec7-contenido2");
                otherContenido.classList.add("sec7-contenido2-n");
            }
        });
        contenido.classList.toggle("sec7-contenido2-n");
    });

    sec7Img.addEventListener("mouseleave", () => {
        contenido.classList.add("sec7-contenido2-n");
    });
});