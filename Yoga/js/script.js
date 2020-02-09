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

    info.addEventListener('click', function(event) { // при клике родителя
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

    // timer

    let deadLine = '2020-02-08'; // дата конца

    function getTimeRemaining(endTime) { // функция вычисления от текущей даты до конечной в миллисекундах
        let t = Date.parse(endTime) - Date.parse(new Date()), // переменная t, содержащая количество миллисекунд до конца
            seconds = Math.floor((t/1000) % 60), // секунды в нужном формате
            minutes = Math.floor((t/1000/60) % 60), // минуты
            hours = Math.floor((t/1000/60/60)); // часы
        
        if (t > 0) {
            return { // функция возвращает объект со всеми полученными данными
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        } else {
            return { // функция возвращает объект со всеми полученными данными
                'total': "0",
                'hours': "0",
                'minutes': "0",
                'seconds': "0"
            };
        }
    }

    function setClock(id, endTime) { // перезапись новых значений в блоки html с помощью переданных id блока и переменной даты конца
        let timer = document.getElementById(id), // получение блока таймера через id
            hours = timer.querySelector('.hours'), // блок часов через класс
            minutes = timer.querySelector('.minutes'), // блок минут
            seconds = timer.querySelector('.seconds'), // секунд
            timeInterval = setInterval(updateClock, 1000); // переменная интервала изменений

        function updateClock() { // запись новых данных
            let t = getTimeRemaining(endTime); // запись в переменную t объект из функции
            if (t.hours > 9) {
                hours.textContent = t.hours; // запись контента в блок html содержимое объекта t с hours
            } else {
                hours.textContent = "0" + t.hours;
            }
            if (t.minutes > 9) {
                minutes.textContent = t.minutes; // минуты
            } else {
                minutes.textContent = "0" + t.minutes;
            }
            if (t.seconds > 9) {
                seconds.textContent = t.seconds; // секунды
            } else {
                seconds.textContent = "0" + t.seconds;
            }

            if (t.total <= 0) { // если разница между текущим временем и заданным равна 0
                clearInterval(timeInterval); // очистить интервал
            }
        }
    }

    setClock('timer', deadLine); // начать цикл функций с переменными id таймера и конечным временем

    // Modal

    let more = document.querySelector('.more'),
        btn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    btn[0].addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    btn[1].addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    btn[2].addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    btn[3].addEventListener('click', function() { // ебать я инвалит, кто-нибудь выстрелите
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Сасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так... (Возможно сервер выключен)'
    };

    let form = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(contactForm);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });

    // Slider

    let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });

    // Counter

    let persons = document.querySelectorAll('.counter-block-input')[0],
        days = document.querySelectorAll('.counter-block-input')[1],
        base = document.querySelector('#select'),
        sum = document.querySelector('#total'),
        sumFB = 0,
        mod = 1;
    
    persons.value = null;
    days.value = null;
    sum.textContent = 0;

    persons.addEventListener('input', function() {
        if (days.value != null) {
            sum.textContent = persons.value*days.value*4000*mod;
        } else {
            sum.textContent = 0;
        }
    });

    days.addEventListener('input', function() {
        if (persons.value != null) {
            sum.textContent = persons.value*days.value*4000*mod;
        } else {
            sum.textContent = 0;
        }
    });

    base.addEventListener('change', function() {
        mod = base.children[this.selectedIndex].value;
        sum.textContent = persons.value*days.value*4000*mod;
    });
});