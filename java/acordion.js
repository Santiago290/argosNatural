document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(function (item, index) {
      item.addEventListener('click', function () {
        
        accordionItems.forEach(function (otherItem, otherIndex) {
          if (otherIndex !== index) {
            otherItem.querySelector('.accordion-collapse').classList.remove('show');
          }
        });
      });
    });
  });