'use strict';

let mainButton = document.querySelector('#start'), //1
    table = document.querySelector('.result-table'),
    elems = table.children,
    values = [], //2
    expenses = document.querySelectorAll('.expenses-item'), //3
    buttons = document.getElementsByTagName('button'),
    firstSubmitBtn = buttons[0],
    secondSubmitBtn = buttons[1],
    countBtn = buttons[2],
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('#income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
for (let i = 1; i < elems.length; i++) {
    values.push(elems[i]);
    i++;
}