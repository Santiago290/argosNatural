const h1Elements = document.querySelectorAll(".h1");
const iElements = document.querySelectorAll(".img");
const pElements = document.querySelectorAll(".p");

function verificar(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("ac"); 
        } else {
            entry.target.classList.remove("ac");
        }
    });
}

let observer = new IntersectionObserver(verificar, {});

h1Elements.forEach(element => {
    observer.observe(element);
});

iElements.forEach(element => {
    observer.observe(element);
});

pElements.forEach(element => {
    observer.observe(element);
});
