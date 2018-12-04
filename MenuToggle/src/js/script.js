// событие которое начинает выполнять код функции только после построения DOM дерева
document.addEventListener("DOMContentLoaded", function () {
    console.log('DOM loaded');
    // обьявление переменных участвующих в скрипте
    const   burger = document.querySelector('.js-burger'),
            sidebar = document.querySelector('.js-sidebar');
    // установка флага для определения состояния хода выполнения скрипта
    let flag = false;
    // вывод елементов в консоль
    console.log(burger, sidebar);
    // создаем новый обработчик для события 'click' у елемента burger
    burger.addEventListener('click', function () {
        // выводим в консоль сообщение о том что событие было вызвано
        console.log('burger clicked');
        // проверяем состояние флага
        if (flag) {
            // если флаг активен то убитраем активное состояние у елементов
            burger.classList.remove('active');
            sidebar.classList.remove('active');
        }
        else {
            // если флаг не активен добавляем активное состояние елементам
            burger.classList.add('active');
            sidebar.classList.add('active');
        }
        // переключаем флаг
        flag = !flag; //уловка которая присваивает обратное значение булевой переменной
        // выводим текущее состояние скрипта в консоль
        console.log(flag);
    })
});

// пример реализации логики с использованием библиотеки jQuery
// $('.js-burger').click(()=> {$('.js-sidebar').classToggle('active')})