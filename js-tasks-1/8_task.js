// Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n
function getArray(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
}
getArray(10);

// Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива
function doubleArray(arr) {
  return arr.concat(arr);
}
doubleArray([1, 2, 3]);

// Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
function changeCollection() {
  let result = [];
  for (let value of changeCollection.arguments) {
    if (Array.isArray(value)) {
      result.push(value.splice(1));
    }
  }
  return result;
}
// [[2, 3], ['b', 'c']]
changeCollection([1, 2, 3], [5, 6, 7]);

// Создать функцию которая принимает массив пользователей, поле которое хочу проверить и значение на которое хочу проверять указанное поле. Проверять что все аргументы переданы. Если что то не переданно то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с пользователями соответсвующие указанным параметрам.
const users = [
  {
    _id: "5e36b779dc76fe3db02adc32",
    balance: "$1,955.65",
    picture: "http://placehold.it/32x32",
    age: 33,
    name: "Berg Zimmerman",
    gender: "male"
  },
  {
    _id: "5e36b779d117774176f90e0b",
    balance: "$3,776.14",
    picture: "http://placehold.it/32x32",
    age: 37,
    name: "Deann Winters",
    gender: "female"
  },
  {
    _id: "5e36b779daf6e455ec54cf45",
    balance: "$3,424.84",
    picture: "http://placehold.it/32x32",
    age: 36,
    name: "Kari Waters",
    gender: "female"
  }
];

function filterUsers(arr, key, value) {
  let i = 0;
  for (let value of filterUsers.arguments) {
    i++;
  } // Проверка на наличие всех аргументов
  if (i < 3) {
    return new Error("Erroe message");
  }

  let result = [];
  for (let val of arr) {
    if (val[key] === value) {
      result.push(val);
    }
  }
  return result;
}

console.log(filterUsers(users, "age", 36));
// [
//    {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//    },
//  ]
