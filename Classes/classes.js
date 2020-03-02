//* Конспект
function User(firstName, lastName) {
  // Инициализация нового класса
  this.firstName = firstName; // Наполнение свойствами
  this.lastName = lastName;
}

User.prototype.getFullName = function() {
  // Запись метода в класс извне (не клонируется)
  return `${this.firstName} ${this.lastName}`; //Исполнение тела функции со свойствами класса
};

User.prototype.sayHello = function() {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User("Igor", "Khalkhoven"); // Присвоение переменной нового класса

function Customer(firstName, lastName, membership) {
  // Инициализаця дочернего класса
  User.apply(this, arguments); // Функциональное клонирование всех свойств и методов записанных внутри класса (в аргументах передается объект, в который нужно клонироват и с какими аргументами)
  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype); // Запись в класс прототипа (все методы и свойства, которые были записаны извне класса)
Customer.prototype.constructor = Customer; // Восстановление метода "constructor", утерянного при клоннировании

Customer.prototype.getMembership = function() {
  // Запись метода извне
  return this.membership.toUpperCase();
};

const customer = new Customer("Ivan", "Ivanov", "basic"); // Присвоение
// console.log(user, customer);
//* Конспект

// Есть класс Planet
function Planet(name) {
  this.name = name;
  this.getName = function() {
    return "Planet name is " + this.name;
  };
}
function PlanetWithSatellite(name, satel) {
  Planet.call(this.getName);
  this.name = name;
  this.satelliteName = satel;
  this.getName = function() {
    return `Planet name is ${this.name}. The satellite is ${this.satelliteName}`;
  };
}
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
var earth = new PlanetWithSatellite("earth", "moon");
var somePlanet = new Planet("some planet");
// console.log(somePlanet.getName());
// console.log(earth.getName()); // 'Planet name is earth. The satellite is moon’

//* Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
function Building(name, floors = undefined) {
  this.name = name;
  this.floors = floors;
  this.getAmountOfFloors = () => {
    console.log(this.floors);
  };
  this.setAmountOfFloors = amount => {
    this.floors = amount;
  };
}

//* Создайте наследников этого класса: классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
function LivingHouse(name, floors = undefined, apartmentsOnFloor = undefined) {
  Building.apply(this, arguments);
  //* У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
  this.amountOfApartmentsOnFloor = apartmentsOnFloor;
  this.getAmountOfFloors = () => {
    return {
      floors: this.floors,
      totalAmountOfApartments: this.floors * this.amountOfApartmentsOnFloor
    };
  };
}
// Прототипное наследование методов инициализированных вне родительского класса
LivingHouse.prototype = Object.create(Building.prototype);
LivingHouse.prototype.constructor = LivingHouse;

function ShoppingCenter(name, floors = undefined, shopsOnFloor = undefined) {
  Building.apply(this, arguments);
  //* У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
  this.amountOfShopsOnFloor = shopsOnFloor;
  this.getAmountOfFloors = () => {
    return {
      floors: this.floors,
      totalAmountOfShops: this.floors * this.amountOfShopsOnFloor
    };
  };
}
// Прототипное наследование методов инициализированных вне родительского класса
// Иными словами: если добавлять методы родительскому классу после его инициализации, они также будут передаваться его дочерним элементам, например
Building.prototype.newMethod = () => {
  console.log(
    "I was made outside the main class initialization and after child"
  );
};
// Этот метод появится у всех дочерних элементов объявленных до или после его создания, т.е. у LivingHouse он тоже появится
ShoppingCenter.prototype = Object.create(Building.prototype);
ShoppingCenter.prototype.constructor = ShoppingCenter;

//* От каждого класса создать экземпляр (дом, торговый центр)
const home = new LivingHouse("Nadya's apartment", 1, 4);
const shop = new ShoppingCenter("KancMarket", 1, 3);
// console.log(home, shop);
// console.log(home.getAmountOfFloors());
// console.log(shop.getAmountOfFloors());
// console.log(home.newMethod());

// Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.
function Furniture(name, price = undefined) {
  this.name = name;
  this.price = price;
}
Furniture.prototype.getInfo = function() {
  return { name: this.name, price: this.price };
};

function OfficeFurniture(name, price = undefined) {
  Furniture.apply(this, arguments);
  this.shredderPresence = true;
  this.getInfo = function() {
    return {
      name: this.name,
      price: this.price,
      sredder: this.shredderPresence
    };
  };
}
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

function HomeFurniture(name, price = undefined) {
  Furniture.apply(this, arguments);
  this.skilletPresence = true;
  this.getInfo = function() {
    return {
      name: this.name,
      price: this.price,
      skillet: this.skilletPresence
    };
  };
}
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

const officeFurniture = new OfficeFurniture("chair", 200);
const homeFurniture = new HomeFurniture("table", 150);
// console.log(officeFurniture, homeFurniture);
// console.log(officeFurniture.getInfo());
// console.log(homeFurniture.getInfo());
