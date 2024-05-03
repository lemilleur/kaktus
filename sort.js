window.addEventListener("load", function() {
    setTimeout(function() {
        // Получаем родительский элемент
        var parentElement = document.querySelector('.cactus-item__option');

        // Получаем все элементы с размерами
        var sizeElements = parentElement.querySelectorAll('.cactus-item__option-val');

        // Преобразуем NodeList в массив для удобства сортировки
        var sizeArray = Array.from(sizeElements);

        // Сортируем массив по текстовому содержимому (размерам)
        sizeArray.sort(function(a, b) {
            return parseInt(a.textContent) - parseInt(b.textContent);
        });

        // Удаляем все элементы со страницы
        sizeArray.forEach(function(sizeElement) {
            sizeElement.remove();
        });

        // Вставляем отсортированные элементы обратно в родительский элемент
        sizeArray.forEach(function(sizeElement) {
            parentElement.appendChild(sizeElement);
        });
    }, 500); // Задержка в 0.5 секунды
});
