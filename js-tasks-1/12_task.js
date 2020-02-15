// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
const a = [1, 2, 3, 5, 8, 9, 10];
// Говнокод:

// let result = [];
// for (let value of a) {
//   if (value % 2 === 0) {
//     result.push({ digit: value, odd: false });
//   } else result.push({ digit: value, odd: true });
// }
// console.log(result);

// Через стрелочную функцию:

let result = [];
a.forEach(el => {
  el % 2
    ? result.push({ digit: el, odd: true })
    : result.push({ digit: el, odd: false });
});
console.log(result);

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
const b = [12, 4, 50, 1, 0, 18, 40];
console.log(!Boolean(b.find(el => el === 0))); // Как будто нормальный человек писал

// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true
const c = ["yes", "hello", "no", "easycode", "what"];
console.log(Boolean(c.find(el => el.length > 3)));

// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
const d = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
d.sort((prev, next) => prev.index - next.index);
const getString = (n = undefined) => d.slice(0, n);
let string = "";
for (let value of getString(14)) {
  //На пол шишечки (могло быть и лучше)
  string += value.char;
}
console.log(string);

// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
const e = [[14, 45], [1], ["a", "c", "d"]]; // [ [1], [14, 45], ['a', 'c', 'd'] ]
e.sort((prev, next) => prev.length - next.length); // ez
console.log(e);

// Есть массив объектов:
const f = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];
// Отсортировать их по возрастающему количеству ядер (cores).
f.sort((prev, next) => prev.info.cores - next.info.cores);
console.log(f);

// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];
const filterCollection = (products, lowPrice, highPrice) =>
  products.filter(
    product => product.price >= lowPrice && product.price <= highPrice
  );
products.sort((prev, next) => prev.price - next.price);
console.log(filterCollection(products, 15, 30)); // [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
