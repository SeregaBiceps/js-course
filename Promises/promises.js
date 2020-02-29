// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.

// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:
// мое решение:
function delay(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
// эталон:
// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert("выполнилось через 3 секунды"));

// Перепишите функцию showCircle, написанную в задании Анимация круга с помощью колбэка таким образом, чтобы она возвращала промис, вместо того чтобы принимать в аргументы функцию-callback.
function showCircle(cx, cy, radius) {
  let div = document.createElement("div");
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + "px";
  div.style.top = cy + "px";
  div.className = "circle";
  document.body.append(div);

  return new Promise(resolve => {
    setTimeout(() => {
      div.style.width = radius * 2 + "px";
      div.style.height = radius * 2 + "px";

      div.addEventListener("transitionend", function handler() {
        div.removeEventListener("transitionend", handler);
        resolve(div);
      });
    }, 0);
  });
}
// showCircle(150, 150, 100).then(div => {
//   div.classList.add("message-ball");
//   div.append("Hello, world!");
// });

// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.

function promiseCreator(ms, value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}
const prom = promiseCreator(5000, "Ok!");
// prom.then(console.log);
// Ok!

// Создать класс, который производит экземпляр со следующими свойствами:
// - promise - промис, который создается во время запуска конструктора;
// - reject - метод, при выполнении которого promise реджектится;
// - resolve - метод, при выполнении которого promise резолвится.

class Prom {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  reject(reason) {
    this.reject(reason);
  }
  resolve(value) {
    this.resolve(value);
  }
}
const inst = new Prom();
inst.promise.then(data => console.log(data));
// setTimeout(() => inst.resolve("test"), 5000);
// →  test

// Чтобы подождать, когда асинхронное действие (промис) выполнится, нужно использовать await
async function getPost(id) {
  // Функция-обертка в промисы
  try {
    // Если нет ошибок
    const response = await fetch(
      // Записать в переменную промис ответа запроса
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(res => res.json());
    return response;
  } catch (err) {
    // Если ошибка, выкинуть реджект с ошибкой
    return Promise.reject(err);
  }
}
async function getAll(id, id2) {
  const [res1, res2] = await Promise.all([getPost(id), getPost(id2)]);
  console.log(res1, res2);
}
getAll(1, 2);
