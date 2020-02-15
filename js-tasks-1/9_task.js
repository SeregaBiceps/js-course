// Создать функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки
function firstFunc(arr, fn) {
  return `New value: ${fn(arr)}`;
}
function handler1(el) {
  return el.join("");
}
console.log(firstFunc(["my", "name", "is", "Trinity"], handler1));
function handler2(el) {
  for (let key in el) {
    el[key] *= 10;
  }
  return el.join(" ");
}
console.log(firstFunc([10, 20, 30], handler2));

function handler3(el) {
  let result = [];
  for (let i = 0; i < el.length; i++) {
    result.push(`${el[i].name} is ${el[i].age}`);
  }
  return result.join(", ");
}
console.log(
  firstFunc(
    [
      { age: 45, name: "Jhon" },
      { age: 20, name: "Aaron" }
    ],
    handler3
  )
);
function handler4(el) {
  for (let key in el) {
    el[key] = el[key].split("");
    el[key] = el[key].reverse();
    el[key] = el[key].join("");
  }
  return el.join(", ");
}
console.log(firstFunc(["abs", "123"], handler4));

console.log(every([5, 8, 9, 15, 2, 0]), fn);
function every(arr, fn) {}
function fn(el, ind, arr) {}
