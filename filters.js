document.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function() {
    var toggleButton = document.getElementById('toggleFilters');
    var filters = document.querySelector('.cactus-category__filter');

    if (toggleButton) {
      toggleButton.addEventListener('click', function() {
        filters.classList.toggle('active');
        // Изменяем текст кнопки в зависимости от состояния фильтров
        if (filters.classList.contains('active')) {
          toggleButton.textContent = 'Скрыть фильтры';
        } else {
          toggleButton.textContent = 'Показать фильтры';
        }
      });
    } else {
      console.error('Toggle button not found');
    }
  }, 1000); // Задержка в 1 секунду
});
