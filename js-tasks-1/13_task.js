// Создайте функцию которая бы умела делать:
console.log(minus(10)(6)); // 4
console.log(minus(5)(6)); // -1
console.log(minus(10)()); // 10
console.log(minus()(6)); // -6
console.log(minus()()); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(n = 0) {
  return function(x = 0) {
    return n - x;
  };
}

// Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker(n) {
  let x = n;
  return function multiply(j) {
    return (x *= j);
  };
}
const multiply = multiplyMaker(2);
console.log(multiply(2)); // 4 (2 * 2)
console.log(multiply(1)); // 4 (4 * 1)
console.log(multiply(3)); // 12 (4 * 3)
console.log(multiply(10)); // 120 (12 * 10)

// Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5
const funcArr = (str = "") => {
  let string = str;
  return {
    setString: (a = "") => (string = String(a)),
    getString: () => console.log(string),
    getLenghtString: () => console.log(string.length),
    getReverseString: () =>
      console.log(
        string
          .split("")
          .reverse()
          .join("")
      )
  };
};
const myModule = funcArr();
myModule.setString("[gedg");
myModule.getString();
myModule.getLenghtString();
myModule.getReverseString();
myModule.setString("dgdgsgdsg");
myModule.getString();
myModule.getLenghtString();

// Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
const calcFunc = (n = 0) => {
  let num = n;
  return {
    setNum: function(n = 0) {
      num = parseFloat(n.toFixed(2));
      return this;
    },
    plusNum: function(n = 0) {
      num += parseFloat(n.toFixed(2));
      return this;
    },
    multNum: function(n = 0) {
      num *= parseFloat(n.toFixed(2));
      return this;
    },
    powNum: function(n = 0) {
      let numCopy = num;
      for (let i = 1; i < n; i++) {
        num *= parseFloat(numCopy.toFixed(2));
      }
      return this;
    },
    getNum: function() {
      console.log(num);
    }
  };
};
const calc = calcFunc();
calc.setNum(10);
calc.plusNum(5);
calc.multNum(2);
calc.getNum();
calc
  .setNum(10)
  .powNum(2)
  .getNum();
