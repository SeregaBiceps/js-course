// Найти параграф и получить его текстовое содержимое (только текст!)
const p = document.querySelector("p");
// console.log(p.textContent);

// Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
function getInfo(obj) {
  return console.log({
    nodeType: obj.nodeType,
    nodeName: obj.nodeName,
    nodeChildrenAmount: obj.childNodes.length
  });
}
// getInfo(p);

// Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
// const ul = document.querySelector("ul");
// function getTextFromUl(ul) {
//   return ul.innerText.split(`
// `);
// }
// console.log(getTextFromUl(ul));

const ul = document.querySelector("ul");
function getTextFromUl(ul) {
  let result = [];
  const a = ul.querySelectorAll("a");
  a.forEach(el => {
    result.push(el.textContent);
  });
  return result;
}
// console.log(getTextFromUl(ul));

// В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
const nodes = p.childNodes;
nodes.forEach(el => {
  if (el.nodeName === "#text") {
    el.textContent = "-text-";
  }
});
// console.log(nodes);

// Найти в коде список ul и добавить класс “list”
ul.classList.add("list");
// console.log(ul);

// Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
const firstHref = ul.closest("a"); //????????????????????????????????
// console.log(firstHref);

// На li через один (начиная с самого первого) установить класс “item”
const li = document.querySelectorAll("li");
for (let i = 0; i < li.length; i += 2) {
  li[i].classList.add("item");
}
// console.log(li);

// На все ссылки в примере установить класс “custom-link”
const a = document.querySelectorAll("a");
a.forEach(el => {
  el.classList.add("custom-link");
});
// console.log(a);

// Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
function addLis(elem, n = 0) {
  const lis = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const newLi = document.createElement("li");
    newLi.classList.add("new-item");
    newLi.textContent = `item ${elem.children.length + i + 1}`;
    lis.appendChild(newLi);
  }
  elem.appendChild(lis);
}
addLis(ul, 2);
// console.log(ul);

// В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
const linksOfUl = ul.querySelectorAll("a");
linksOfUl.forEach(el => {
  el.insertAdjacentHTML("beforeend", "<strong></strong>");
});
// console.log(ul);

// В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
const body = document.querySelector("body");
const pict = document.createElement("img");
pict.setAttribute(
  "src",
  "https://i.pinimg.com/originals/1c/ba/1e/1cba1e5e40356f6edb0235c8a09a07d5.jpg"
);
pict.setAttribute("alt", "cat");
body.insertAdjacentElement("afterbegin", pict);
// console.log(body);

// Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
const mark = document.querySelector("mark");
mark.insertAdjacentText("beforeend", "green");
mark.classList.add("green");
// console.log(mark);

// Отсортировать li внутри списка в обратном порядке (по тексту внутри)
// console.log(ul);
// ul.children[2].textContent = "fghdfhdhdfhshrhrfhr";
// var correct = false;
// while (!correct) {
//   correct = true;
//   for (let i = 0; i < ul.children.length - 1; i++) {
//     if (
//       ul.children[i].textContent.length > ul.children[i + 1].textContent.length //хз короче
//     ) {
//       let min = ul.children[i + 1];
//       ul.children[i + 1] = ul.children[i];
//       ul.children[i] = min;
//       correct = false;
//     }
//   }
// }
// console.log(ul);

const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];
// В конце таблицы обязательно последняя tr должна содержать total balance всех пользователей из таблицы при этом он должен быть всегда выровнен по правому краю.
// Количество пользователей может быть любым.
// Таблица и все ее содержимое должно создаваться через js, в разметке у вас может быть только контейнер какой то.
// В коде у вас должна быть переменная которая будет содержать в виде объекта список полей и заголовков th которые будут выводиться в таблице. Что то типа { name: ‘Name’, email: ‘Email’... } соответственно ключ объекта это ваше поле которое вы хотите вывести из объекта пользователя а значение это заголовок th.
let trs = ``;
let total = 0;
for (let i = 0; i < users.length; i++) {
  trs += `
  <tr>
    <td>${i + 1}</td>
    <td>${users[i].name}</td>
    <td>${users[i].email}</td>
    <td>${users[i].balance}</td>
  </tr>`;
  total += Number(users[i].balance);
}
body.insertAdjacentHTML(
  "beforeend",
  `
<table style="border: 2px solid black;">
  <thead>
    <tr">
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Balance</th>
    </tr">
  </thead>
  <tbody>
    ${trs}
  </tbody>
  <tfoot style="text-align: right;">
    <tr>
      <td colspan="4">Total balance: <strong>${total}</strong></td>
    </tr>
  </tfoot>
</table>`
);
const table = document.querySelector("table");
table.style = `
width: 60%;
margin: 0 auto;
text-align: left;
border-collapse: collapse;
font-family: sans-serif;`;
const tr = table.querySelectorAll("tr");
tr.forEach(el => {
  el.style = `
border-collapse: collapse;
border-top: 1px solid rgba(0, 0, 0, .3);
border-bottom: 1px solid rgba(0, 0, 0, .3);
line-height: 40px;`;
});
tr[0].style.borderBottom = `2px solid rgba(0, 0, 0, .3`;
tr[0].style.borderTop = `2px solid rgba(0, 0, 0, .3`;
tr[tr.length - 1].style.border = `none`;
tr[tr.length - 2].style.borderBottom = `1px solid rgba(0, 0, 0, .2)`;
