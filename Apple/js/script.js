let menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.querySelector('#title'),
    columns = document.querySelectorAll(".column"),
    adv = document.querySelector('.adv'),
    answ = prompt('Как вы относитесь к технике "Apple"?'),
    wind = document.querySelector("#prompt");
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);
document.body.style.background = "url('img/apple_true.jpg') center center no-repeat";
document.body.style.backgroundSize = "cover";
title.textContent = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(adv);
wind.textContent = answ;
