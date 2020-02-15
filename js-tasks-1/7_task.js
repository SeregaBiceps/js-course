// Создать функцию, которая принимает любое количество чисел и возвращает их произведение.
function multiply() {
  if (multiply.arguments[0]) {
    let result = 1;
    for (let value of multiply.arguments) {
      result *= value;
    }
    return result;
  } else {
    return 0;
  }
}
multiply(2, 4, 5, 6);
multiply();

// Создать функцию, которая возвращает строку-перевертыш
function reverseString(str) {
  let result = "";
  str = String(str);
  let i = 0;
  for (let value of str) {
    i++;
  }
  for (let j = i - 1; j >= 0; j--) {
    result += str[j];
  }
  return result;
}
reverseString("test");
reverseString("");
reverseString(null);
reverseString(undefined);
reverseString();

// Преобразовать строку в набор символов в юникод представлении через пробел, как строку
function getCodeStringFromText(str) {
  str = String(str);
  let result = "";
  for (let value of str) {
    result += `${value.charCodeAt()} `;
  }
  return result.trim();
}
getCodeStringFromText("hello");

// Создать функцию угадай число.
// Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
// Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").
// Если переданно не число то верните ошибку return new Error("Please provide a valid number");
// Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”
// если нет то строку “You are lose, your number is 8, the random number is 5”.  Числа в строке указаны как пример вы подставляете реальные числа.
// Если переданно число в виде строки оно должно быть преобразованно к числу.
function guessTheNumber(num) {
  if (!num && num !== 0) {
    return new Error("Please provide a valid number");
  }
  num = Number(num);
  if (num >= 0 && num <= 10) {
    let random = parseInt(Math.random() * 11);
    if (num === random) {
      return "You win!";
    } else {
      return `You are lose, your number is ${num}, the random number is ${random}`;
    }
  } else if (num < 0 || num > 10) {
    return new Error("Please provide number in range 0 - 10");
  } else {
    return new Error("Please provide a valid number");
  }
}
guessTheNumber(5);
