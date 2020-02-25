// Custom Http Module
function customHttp() {
  // Функция возвращающая 2 функции (get, post)
  return {
    get(url, cb) {
      // Функция get принимает адресс и cb функцию
      try {
        // Если нет ошибок
        const xhr = new XMLHttpRequest(); // Запись в переменную запроса
        xhr.open("GET", url); // Получение запроса по переданному адресу
        xhr.addEventListener("load", () => {
          // После загрузки открытия
          if (Math.floor(xhr.status / 100) !== 2) {
            // Если статус запроса неудовлетворительный
            cb(`Error. Status code: ${xhr.status}`, xhr); // Передать в cb функцию статус и запрос
            return; // Выйти
          }
          const response = JSON.parse(xhr.responseText); // Запись в переменную содержимого запроса
          cb(null, response); // Передать в cb функцию статус null и эту переменную
        });

        xhr.addEventListener("error", () => {
          // Если запрос не загрузился
          cb(`Error. Status code: ${xhr.status}`, xhr); // Передать в cb функцию статус и запрос
        });

        xhr.send(); // Завершить запрос
      } catch (error) {
        // Если есть ошибки (м.б. даже в неточности кода)
        cb(error); // Передать в cb функцию ошибку
      }
    },
    post(url, body, headers, cb) {
      // Функиця post принимает адресс, тело, заголовки и cb функцию
      try {
        // Если нет ошибок
        const xhr = new XMLHttpRequest(); // Запись запроса в переменную
        xhr.open("POST", url); // Отправка запроса по переданному адресу
        xhr.addEventListener("load", () => {
          // После загрузки запроса
          if (Math.floor(xhr.status / 100) !== 2) {
            // Если статус неудовлетворительный
            cb(`Error. Status code: ${xhr.status}`, xhr); // Передать в cb функцию статус и запрос
            return; // Выйти
          }
          const response = JSON.parse(xhr.responseText); // Запись в переменную тела запроса
          cb(null, response); // Передать в cb функцию статус null и тело запроса
        });

        xhr.addEventListener("error", () => {
          // Если запрос не загрузился
          cb(`Error. Status code: ${xhr.status}`, xhr); // Передать в cb функцию статус запроса и запрос
        });

        if (headers) {
          // Если есть заголовки
          Object.entries(headers).forEach(([key, value]) => {
            // Пройтись циклом по всем заголовкам с изъятием из объекта заголовков ключ и значение каждого элемента
            xhr.setRequestHeader(key, value); // Присваивание запросу заголовков
          });
        }

        xhr.send(JSON.stringify(body)); // Отправка запроса с конвертированным телом
      } catch (error) {
        // Если были ошибки
        cb(error); // Передать ее в cb функцию
      }
    }
  };
}
// Init http module
const http = customHttp(); // Присваивание переменной объект содержащий функции get и post запросов

const newsService = (function() {
  // Объявление самовызывающейся функции
  const apiKey = "188023398e904a2f98c22746257b9c77"; // Заключение в переменную апи ключа
  const apiUrl = "http://newsapi.org/v2"; // Заключение в переменну апи адреса

  return {
    // Функция возвращает объект 2 функций
    topHeadlines(country = "ua", cb) {
      // Первая функция принимает аргументы страну и cb функцию
      http.get(
        // Инициирует вызов функции передачи запроса
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, // Передача в функцию аргументов (адрес и cb функцию)
        cb
      );
    },
    everything(query, cb) {
      // Вторая функция принимает query и cb
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb); // Передача в функцию аргументов (query и cb функцию)
    }
  };
})();

//  init selects
document.addEventListener("DOMContentLoaded", function() {
  // Обработчик события на загрузку всех элементов страницы
  M.AutoInit(); // Инициализация плагинов materialize
  loadNews(); // Вызов функции загрузки контента (новостей)
});

// Load news function
function loadNews() {
  // Функция загрузки новостей, без аргументов
  newsService.topHeadlines("ua", onGetResponse); // Получение запросов сортированному по стране и передача в качетсве cb функции onGetResponse
}

// Function on get response on server
function onGetResponse(err, res) {
  // Логика одной из cb функции
  console.log(res); // Законсолить запрос-ответ
  renderNews(res.articles); // Вызов функции с агрументом объект запрошенных новостей
}

// Finction render news
function renderNews(news) {
  // Функция принимающая объект новостей
  const newsContainer = document.querySelector(".news-container .row"); // Инициализация контейнера для контента новостей
  let fragment = ""; // Инициализация фрагмента для html блока

  news.forEach(newsItem => {
    // Итерация по каждому элементу объекта новостей
    const el = newsTemplate(newsItem); // Передача в переменную результата функции обработки элемента объекта
    fragment += el; // Накопление контента во фрагменте
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment); // Добавление в контейнер для новостей фрагмента с контентом
}

// News item template function
function newsTemplate({ urlToImage, title, url, description }) {
  // Функция обработки элемента объекта с нужными деструктурированными данными
  return `
  <div class="col s12">
    <div class="card">
      <div class="card-image">
        <img src="${urlToImage}">
        <span class="card-title">${title || ""}</span>
      </div>
      <div class="card-content">
        <p>${description || ""}</p>
      </div>
      <div class="card-action">
        <a href="${url}">Read more</a>
      </div>
    </div>
  </div>
  `; // Возвращать html структуру с ссылкой на данные элемента этого объекта
}
