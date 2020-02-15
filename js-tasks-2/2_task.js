// Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);
// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark
// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark
// Функция принимает только DOM объекты.
function isParent(parent, child) {
  const [...args] = arguments;
  if (args.length !== 2) {
    return "Uncorrect number of arguements";
  }
  return parent.contains(child);
}
console.log(
  isParent(document.body.children[0], document.querySelector("mark"))
);
console.log(
  isParent(document.querySelector("ul"), document.querySelector("mark"))
);

// Получить список всех ссылок, которые не находятся внутри списка ul
const ul = document.querySelector("ul");
const hrefs = document.querySelectorAll("a");
let result = [];
console.dir(hrefs);
for (let i = 0; i < hrefs.length; i++) {
  // мммммда......
  if (isParent(ul, hrefs[i]) === false) {
    result.push(hrefs[i]);
  }
}
console.log(result);

// Найти элемент, который находится перед и после списка ul
const nextElem = document.querySelector("ul").nextElementSibling;
const prevElem = document.querySelector("ul").previousElementSibling; // уже лучше
console.log(nextElem);
console.log(prevElem);
