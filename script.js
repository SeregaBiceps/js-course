'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let a = prompt("Введите обязательную статью расходов в этом месяце");
let b = prompt("Во сколько обойдется?");

appData.expenses[a] = b;

let oneDayBudjet = (appData.budjet / 30) - (appData.expenses[a] / 30);

alert("Ваш бюджет на день " + oneDayBudjet);