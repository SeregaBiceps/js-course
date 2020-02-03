window.addEventListener('DOMContentLoaded', function () { // после прогрузки элементов html

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'), // массив табов
        info = document.querySelector('.info-header'), // родитель массива табов
        tabContent = document.querySelectorAll('.info-tabcontent'); // массив всех блоков
    
    function hideTabContent(a) { // функция с передачей переменной
        for (let i = a; i < tabContent.length; i++) { // цикл начинающийся с переданой переменной, переберающий все блоки
            tabContent[i].classList.remove('show'); // убирается класс show у каждого блока начиная с номера переданной переменной
            tabContent[i].classList.add('hide'); // добавляется класс hide каждому блоку начиная с переданной переменной
        }
    }

    hideTabContent(1); // спрятать все блоки кроме стартового (первого)

    function showTabContent(b) { // функция с передачей переменной
        if (tabContent[b].classList.contains('hide')) { // если блок под номером переданной переменной содержит класс hide
            tabContent[b].classList.remove('hide'); // убрать класс hide
            tabContent[b].classList.add('show'); // и добавить show
        }
    }

    info.addEventListener('click', function(event) { // при клике на массив табов
        let target = event.target; // отслеживание места клика
        if (target && target.classList.contains('info-header-tab')) { // если кликнул и кликнул на какой-либо таб
            for (let i = 0; i < tab.length; i++) { // перебор табов
                if (target == tab[i]) { // если клик попал на один из тех, по кому идет перебор
                    hideTabContent(0); // скрыть все элементы
                    showTabContent(i); // показать только этот
                    break; // выйти из цикла
                }
            }
        }
    });
});