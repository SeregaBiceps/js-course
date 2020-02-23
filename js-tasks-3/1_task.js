// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывести имена пользователей на страницу. При клике на имя пользователя в произвольном месте, должна появиться подробная информация о нем. Для визуальной части можно использовать bootstrap или другие фреймворки.
function getRequest(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });
  xhr.send();
}
getRequest(response => {
  const fragment = document.createDocumentFragment();
  const wrapper = document.createElement("div");
  response.forEach(user => {
    createName(user, wrapper);
  });
  wrapper.style.display = "flex";
  wrapper.style.flexWrap = "wrap";
  wrapper.style.justifyContent = "space-around";
  fragment.appendChild(wrapper);
  document.body.appendChild(fragment);
});
function createName(user, wrapper) {
  const ul = document.createElement("ul");
  const div = document.createElement("div");
  div.textContent = user.name;
  ul.appendChild(div);
  ul.style.paddingLeft = "0";
  ul.style.listStyleType = "none";
  ul.style.maxWidth = "250px";
  ul.style.margin = "20px";

  function getUl() {
    const fragment = document.createDocumentFragment();
    Object.keys(user).forEach(key => {
      const li = document.createElement("li");
      if (typeof user[key] === typeof []) {
        li.insertAdjacentHTML("beforeend", `<b>${key}:</b><br>`);
        Object.keys(user[key]).forEach(i => {
          if (typeof user[key][i] === typeof []) {
            li.insertAdjacentHTML("beforeend", `<b>${i}:</b><br>`);
            Object.keys(user[key][i]).forEach(j => {
              li.insertAdjacentHTML(
                "beforeend",
                `${j}: ${user[key][i][j]}<br>`
              );
            });
          } else {
            li.insertAdjacentHTML("beforeend", `${i}: ${user[key][i]}<br>`);
          }
        });
      } else {
        li.insertAdjacentHTML("beforeend", `${key}: ${user[key]}<br>`);
      }
      fragment.appendChild(li);
    });
    return fragment;
  }

  ul.addEventListener("click", el => {
    const parent = el.target.parentElement;
    if (parent.children.length === 1) {
      parent.appendChild(getUl());
    } else if (el.target === div && parent.children.length !== 1) {
      Object.keys(parent.children).forEach(() => {
        try {
          parent.removeChild(parent.children[1]);
        } catch {
          return;
        }
      });
    }
  });
  div.addEventListener("mouseover", el => {
    el.target.style.cursor = "pointer";
  });

  wrapper.appendChild(ul);
}

// *Создать форму добавления пользователя состоящая из полей name, email, username, phone, website при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного пользователя на страницу.

document.body.insertAdjacentHTML(
  "afterbegin",
  '<button style="margin: 0 auto; display: block; width: 150px; height: 50px">Add user</button>'
);
const button = document.querySelector("button");
const addForm = document.createElement("form");
addForm.classList.add("add-form");
function makeInput(inputName, type, plh = "none") {
  const input = document.createElement("input");
  input.type = type;
  input.name = inputName;
  input.setAttribute("required", true);
  input.setAttribute("placeholder", plh);
  input.style = `line-height: 20px;
  font-size: 15px;
  text-align: center;`;
  return input;
}
addForm.appendChild(makeInput("name", "text", "Name"));
addForm.appendChild(makeInput("email", "email", "E-mail"));
addForm.appendChild(makeInput("username", "text", "User Name"));
addForm.appendChild(makeInput("phone", "tel", "Phone number"));
addForm.appendChild(makeInput("website", "url", "Website"));
addForm.appendChild(makeInput("confirm", "submit"));
addForm.style = `display: flex;
flex-direction: column;
width: 20%;
margin: 0 auto;
position: absolute;
left: 50%;
transform: translateX(-50%);
top: 20%;`;
addForm.setAttribute("name", "form");

button.addEventListener("click", () => {
  if (addForm.classList.contains("active")) {
    addForm.reset();
    addForm.classList.remove("active");
    document.body.removeChild(addForm);
  } else {
    document.body.appendChild(addForm);
    addForm.classList.add("active");
  }
});
addForm.addEventListener("submit", el => {
  const formInputs = el.target.children;
  const formData = {};
  el.preventDefault();
  Object.keys(formInputs).forEach(input => {
    if (formInputs[input].name === "confirm") {
      return;
    }
    formData[formInputs[input].name] = `${formInputs[input].value}`;
  });
  JSON.stringify(formData);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
  xhr.send(formData);
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
  });
});
