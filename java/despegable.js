let a = document.querySelectorAll(".accordion-button");
let b = document.querySelector(".master");
let c = document.querySelector(".sec5-galeria");
let previousButton = null;

a.forEach((button) => {
  button.addEventListener("click", () => {
    if (previousButton === button && b.classList.contains("ad")) {
      b.classList.remove("ad");
      if (window.matchMedia("(max-width: 900px)").matches) {
        c.classList.remove("ad"); 
      }
      previousButton = null;
    } else {
      b.classList.add("ad");
      if (window.matchMedia("(max-width: 900px)").matches) {
        c.classList.add("ad");
      }
      previousButton = button;
    }
  });
});