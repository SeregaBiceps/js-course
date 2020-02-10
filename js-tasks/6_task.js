// На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.
const string = 'i am in the easycode';
let newString = '';
for (let value of string) {
  newString += value.toUpperCase();
}

// Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
const string2 = 'tseb eht ma i';
let newString2 = '';
for (let i = string2.length - 1; i >= 0; i--) {
  newString2 += string2[i];
}

// Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
let n = 10;
for (let i = n-1; i > 0; i--) {
  n *= i;
}

// На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
const string3 = ' JavaScript is a pretty good language';
let newString3 ='';
for (let i = 1; i < string3.length; i++) {
  if (string3[i] === ' ') {
    newString3 += string3[++i].toUpperCase();
  } else {
    newString3 += string3[i];
  }
}

// Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let value of array) {
  if (value % 2 === 0) {
    console.log(value);
  }
}

// Дан объект:
// let list = {
// name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
let list = {
  name: 'denis',
  work: 'eaycode',
  age: 29
};
for (let key in list) {
  if (typeof(list[key]) === 'string') {
    list[key] = list[key].toLowerCase();
  } 
}