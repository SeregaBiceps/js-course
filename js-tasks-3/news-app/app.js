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

// Elements
const form = document.forms["newsControls"]; // Запись в переменные формы и ее инпутов
const countrySelect = form.elements["country"];
const searchInput = form.elements["search"];

form.addEventListener("submit", e => {
  // При сабмите формы
  e.preventDefault(); // Не обновлять страницу браузера
  loadNews(); // Вызвать функцию загрузки новостей
});

//  init selects
document.addEventListener("DOMContentLoaded", function() {
  // Обработчик события на загрузку всех элементов страницы
  M.AutoInit(); // Инициализация плагинов materialize
  loadNews(); // Вызов функции загрузки контента (новостей)
});

// Load news function
function loadNews() {
  // Функция загрузки новостей, без аргументов
  showLoader(); // Вызов функции отображения load bar
  const country = countrySelect.value; // Заключение в переменные полученных инпутов
  const searchText = searchInput.value;

  if (!searchText) {
    // Если пользователь не заполнил окно поиска
    newsService.topHeadlines(country, onGetResponse); // Вызвать функцию сортировки по стране
  } else {
    // Иначе
    setTimeout(function() {
      // Вызвать функцию с задержкой 0,2 сек
      newsService.everything(searchText, onGetResponse); // Которая вызовет функцию сортировки по стране и заполненному окну поиска
    }, 200);
  }
  newsService.topHeadlines("ua", onGetResponse); // Получение запросов сортированному по стране и передача в качетсве cb функции onGetResponse
}

// Function on get response on server
function onGetResponse(err, res) {
  // Логика одной из cb функции
  removePreloader(); // Убрать load bar
  if (err) {
    // Если ошибка
    showAlert(err, "error-msg"); // Вызвать функцию алерта
    return; // Выйти из функции
  }

  if (!res.articles.length) {
    // Если объект запроса пустой
    // Немного криво, код не работает как надо
    if (
      // Если в DOM нету оповещения о пустом списке новостей
      document.querySelector(".news-container .container").children[0] !==
      document.querySelector(".empty")
    ) {
      const container = document.querySelector(".news-container .container"); // Добавить в DOM объект с оповещением, что список пуст
      const empty = document.createElement("div");
      empty.classList.add("empty");
      empty.textContent = "Новостей не найдено";
      empty.style = `
    padding-top: 50px;
    text-align: center;
    `;
      container.insertAdjacentElement("afterbegin", empty);
    }
  } else {
    // Иначе
    if (document.querySelector(".empty")) {
      // Если в DOM уже есть этот объект, но актуальный запрос не пустой
      document.querySelector(".empty").remove(); // Удалить объект
    }
  }
  renderNews(res.articles); // Вызов функции с агрументом объект запрошенных новостей
  console.log(res); // Законсолить запрос-ответ
}

// Finction render news
function renderNews(news) {
  // Функция принимающая объект новостей
  const newsContainer = document.querySelector(".news-container .row"); // Инициализация контейнера для контента новостей
  if (newsContainer.children.length) {
    // Если в контейнере есть новости
    clearContainer(newsContainer); // Удалить содержимое
  }
  let fragment = ""; // Инициализация фрагмента для html блока

  news.forEach(newsItem => {
    // Итерация по каждому элементу объекта новостей
    const el = newsTemplate(newsItem); // Передача в переменную результата функции обработки элемента объекта
    fragment += el; // Накопление контента во фрагменте
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment); // Добавление в контейнер для новостей фрагмента с контентом
}

// Function clear container
function clearContainer(container) {
  // Функция удаление контента контейнера
  let child = container.lastElementChild; // Запись дочернего элемента контейнера
  while (child) {
    // Пока есть дочерние элементы
    container.removeChild(child); // Удалить дочерний элемент
    child = container.lastElementChild; // Перезаписать в переменную актуальный дочерний элемент
  }
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

function showAlert(msg, type = "success") {
  // Функция алерт сообщения
  M.toast({ html: msg, classes: type }); // Волшебное магичество фреймверка materialize
}

// Show loader function
function showLoader() {
  // Функция инициализации load bar
  document.body.insertAdjacentHTML(
    // Запись в DOM load bar из materialize (тоже магия)
    "afterbegin",
    `
  <div class="progress">
    <div class="indeterminate"></div>
  </div>
  `
  );
}

// Remove loader function
function removePreloader() {
  // Функция удаления load bar
  const loader = document.querySelector(".progress"); // Поиск его в DOM
  if (loader) {
    // Если нашли
    loader.remove(); // Удалили
  }
}
