// Получить число pi из Math и округлить его до 2-х знаков после точки
const pi = parseFloat(Math.PI.toFixed(2));
console.log(pi);

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
console.log(max);
console.log(min);

// Получить случайное число и округлить его до двух цифр после запятой
let rnum = parseFloat(Math.random().toFixed(2));
console.log(rnum);

// Получить случайное целое число от 0 до X. X - любое произвольное число
let rnum2 = parseFloat((Math.random() * 5).toFixed());
console.log(rnum2);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let sum = parseFloat((0.6 + 0.7).toFixed(1));
console.log(sum);

// Получить число из строки ‘100$’
let num = parseInt('100$');
console.log(num);