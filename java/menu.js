let menu = document.querySelector(".menu");
let hamburguesa = document.querySelector(".menu-hamburguesa");
let menuImagen = document.querySelector(".menu-hamburguesa img");

hamburguesa.addEventListener("click",()=>{
    menu.classList.toggle("menumove");
    menuImagen.classList.toggle("filtro");
})