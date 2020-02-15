// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
console.log(document.querySelector("head"));
// 2. body
console.log(document.querySelector("body"));
// 3. все дочерние элементы body и вывести их в
// консоль.
console.log(document.querySelector("body").children);
// 4. первый div и все его дочерние узлы
console.log(document.querySelector("body").firstElementChild.children);
// а) вывести все дочерние узлы в консоль
const p = document.querySelector("body").firstElementChild.children;
let result = [];
for (let i = 1; i < p.length - 1; i++) {
  result.push(p[i]);
}
console.log(result);
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы
