document.addEventListener('DOMContentLoaded', function() {
  var splideSlider = new Splide('.splide', {
    type: 'loop',
    padding: '25%',
    gap: 80,
  });

  splideSlider.mount();

  function updateSplideOptions() {
    var screenWidth = window.innerWidth;

    if (screenWidth < 800) { // Ejemplo: ajustar el slider si el ancho es menor a 768px
      splideSlider.destroy(); // Destruir el slider actual
      splideSlider = new Splide('.splide', {
        type: 'loop',
        padding: '100px',
        gap: 200,
      });
    } else { // Restaurar opciones originales en pantallas más grandes
      splideSlider.destroy(); // Destruir el slider actual
      splideSlider = new Splide('.splide', {
        type: 'loop',
        padding: '25%',
        gap: 80,
      });
    }

    splideSlider.mount(); // Volver a montar el slider con las nuevas opciones
  }

  // Agregar evento de cambio de tamaño de ventana
  window.addEventListener('resize', function() {
    updateSplideOptions();
  });
});