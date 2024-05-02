document.addEventListener('DOMContentLoaded', function() {
  // Код, который нужно выполнить после загрузки всей страницы
  // Функции и логика для работы с фильтрами, создания кнопки и проверки ширины экрана
  function isMobileScreen() {
    return window.innerWidth <= 990;
  }

  function hideFilters() {
    var filters = document.querySelectorAll('.cactus-category__filter');
    if (filters) {
      filters.forEach(function(filter) {
        filter.style.display = 'none';
      });
    }
  }

  function showFilters() {
    var filters = document.querySelectorAll('.cactus-category__filter');
    if (filters) {
      filters.forEach(function(filter) {
        filter.style.display = 'block';
      });
    }
  }

  function createToggleButton() {
    var button = document.createElement('button');
    button.textContent = 'Фильтры';
    button.className = 'cactus-category__filter-button';
    button.style.backgroundColor = 'transparent';
    button.style.border = '1px solid #aaa';
    button.style.color = '#888';
    button.style.height = '40px';
    button.style.width = '100%';
    button.style.maxWidth = '250px';
    button.style.cursor = 'pointer';
    button.onclick = function() {
      var filters = document.querySelectorAll('.cactus-category__filter');
      if (filters[0].style.display === 'none') {
        showFilters();
        button.textContent = 'Скрыть фильтры';
      } else {
        hideFilters();
        button.textContent = 'Показать фильтры';
      }
    };
    return button;
  }

  if (isMobileScreen()) {
    hideFilters();
    var button = createToggleButton();
    var filtersContainer = document.querySelector('.cactus-category__filter');
    if (filtersContainer) {
      var newDiv = document.createElement('div');
      newDiv.className = 'cactus-category__filter-button-container';
      newDiv.appendChild(button);
      filtersContainer.parentNode.insertBefore(newDiv, filtersContainer.nextSibling);
    }
  }
});
