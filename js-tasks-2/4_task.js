// По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.
const btnMsg = document.querySelector("#btn-msg");

btnMsg.addEventListener("click", function() {
  alert(btnMsg.getAttribute("data-text"));
});

// При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.
btnMsg.addEventListener("mouseover", function(e) {
  e.target.style.backgroundColor = "red";
});
btnMsg.addEventListener("mouseout", function(e) {
  e.target.style.backgroundColor = "rgb(240, 240, 240)";
});

// При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.
const tag = document.querySelector("#tag");
const body = document.body;
body.addEventListener("click", function(e) {
  const div = document.createElement("div");
  div.textContent = e.target.tagName.toLowerCase();
  tag.appendChild(div);
});

// При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д
const btnGenerate = document.querySelector("#btn-generate");
const ul = document.querySelector("ul");
btnGenerate.addEventListener("click", function() {
  ul.insertAdjacentHTML("beforeend", `<li>Item ${ul.children.length + 1}</li>`);
});
