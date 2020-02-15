let string = "some test string";

// Получить первую и последнюю буквы строки
const firstChair = string[0];
const lastChair = string[string.length - 1];

// Сделать первую и последнюю буквы в верхнем регистре
const upperChairs = string[0].toUpperCase() + string.slice(1, -1) + string[string.length -1].toUpperCase();

// Найти положение слова ‘string’ в строке
const findSubstr = string.indexOf('string');

// Найти положение второго пробела (“вручную” ничего не считать)
const firstSpace = string.indexOf(' ');
const secondSpace = string.indexOf(' ', firstSpace + 1);

// Получить строку с 5-го символа длиной 4 буквы
const startIndex = 5;
const sliceString = string.slice(startIndex-1, startIndex+4-1);

// Получить строку с 5-го по 9-й символы
const startIndex2 = 5;
const endIndex2 = 9;
const sliceString2 = string.slice(startIndex2-1, endIndex2);

// Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
const newString = string.slice(0, -6);

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
const a = 20;
const b = 16;
const string = String(a) + String(b);