// Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
function calcSquare() {
  return this.height * this.width;
}
const rectangle = {
  width: undefined,
  height: undefined,
  calcSquare
};
rectangle.height = 50;
rectangle.width = 100;
console.log(rectangle.calcSquare());

// Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:
// const price = {
//     price: 10,
//     discount: '15%',
// ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5
function getPrice() {
  return this.price;
}
function getPriceWithdiscount() {
  return this.price - (this.price / 100) * parseInt(this.discount);
}
const product = {
  price: undefined,
  discount: undefined
};
product.price = 10;
product.discount = "15%";
console.log(getPrice.call(product));
console.log(getPriceWithdiscount.call(product));

// Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;
function incHeight() {
  ++this.height;
}
const obj = {
  height: undefined,
  incHeight
};
obj.height = 2;
obj.incHeight();
console.log(obj.height);

// Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
  value: 1,
  double: function() {
    this.value *= 2;
    return this;
  },
  plusOne: function() {
    this.value += 1;
    return this;
  },
  minusOne: function() {
    this.value -= 1;
    return this;
  }
};
numerator
  .double()
  .plusOne()
  .plusOne()
  .minusOne();
console.log(numerator.value); // 3

// Создать объект с розничной ценой и количеством продуктов. Этот
// объект должен содержать метод для получения общей стоимости
// всех товаров (цена * количество продуктов)
function getSum() {
  return this.price * this.product;
}
const obj2 = {
  price: undefined,
  product: undefined,
  getSum
};
obj2.price = 5;
obj2.product = 12;
console.log(obj2.getSum());

// Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.
const obj3 = {
  price: undefined,
  product: undefined,
  getSum
};
obj3.price = 3;
obj3.product = 9;
console.log(obj3.getSum());

// Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes
let sizes = { width: 5, height: 10 },
  getSquare = function() {
    return this.width * this.height;
  };
const result = getSquare.call(sizes);
console.log(result);

// Измените функцию getElementHeight таким образом, чтобы можно
// было вызвать getElementHeight() и получить 25.
let element = {
  height: 25,
  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element.getHeight;
console.log(getElementHeight.call(element)); // undefined
