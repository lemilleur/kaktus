document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function() {
    var toggleButton = document.getElementById('toggleFilters');
    var filters = document.querySelector('.cactus-category__filter');

    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        filters.classList.toggle('active');
      });
    } else {
      console.error('Toggle button not found');
    }
  }, 100); // Задержка в 100 миллисекунд
});
