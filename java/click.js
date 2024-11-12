const botones = document.querySelectorAll(".btn");
const elementos = document.querySelectorAll(".sec5-box");

botones.forEach((boton, index) => {
  boton.addEventListener("mouseover", function() {
    elementos.forEach((elemento, i) => {
      if (i === index) {
        elemento.classList.remove("ac");
      } else {
        elemento.classList.add("ac");
      }
    });
  });
});