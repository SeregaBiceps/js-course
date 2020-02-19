const tasks = [
  {
    _id: "5d2ca9e2e03d40b326596aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095c1288e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  },
  {
    _id: "5d2ca9e2e03d40b3232496aa7",
    completed: true,
    body:
      "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
    title: "Eu ea incididunt sunt consectetur fugiat non."
  },
  {
    _id: "5d2ca9e29c8a94095564788e0",
    completed: false,
    body:
      "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
    title:
      "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
  }
];

(function(arrOfTasks) {
  const fragment = document.createDocumentFragment();
  const ul = document.querySelector(".list-group");
  arrOfTasks.forEach(function(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const p = document.createElement("p");
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("_id", task._id);
    btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    p.classList.add("mt-2", "w-100");
    span.textContent = task.title;
    span.style.fontWeight = "bold";
    btn.textContent = "Delete";
    p.textContent = task.body;
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(p);
    fragment.appendChild(li);
  });
  ul.appendChild(fragment);

  const addForm = document.forms.addTask;
  const title = addForm.title;
  const body = addForm.body;
  // console.log(tasks, "Функция стартового контента отработала");
  addForm.addEventListener("submit", function(el) {
    el.preventDefault();
    if (title.value && body.value) {
      const newTask = {
        title: title.value,
        body: body.value,
        _id: String(Math.random())
      };
      tasks.unshift(newTask);

      const li = document.createElement("li");
      const span = document.createElement("span");
      const btn = document.createElement("button");
      const p = document.createElement("p");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "align-items-center",
        "flex-wrap",
        "mt-2"
      );
      li.setAttribute("_id", newTask._id);
      btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
      p.classList.add("mt-2", "w-100");
      span.textContent = title.value;
      span.style.fontWeight = "bold";
      btn.textContent = "Delete";
      p.textContent = body.value;
      li.appendChild(span);
      li.appendChild(btn);
      li.appendChild(p);
      ul.insertAdjacentElement("afterbegin", li);
      addForm.reset();
      // console.log(tasks, "Функция добавления отработала");
    } else {
      alert("Заполните все поля");
      // console.log(tasks, "Функция игнорирования отработала");
    }
    // console.log(tasks, "Функция отправки формы отработала");
  });
  ul.addEventListener("click", function({ target }) {
    if (target.classList.contains("delete-btn")) {
      const conf = confirm("Уверен?");
      if (conf) {
        target.closest("li").remove();
        for (let value of tasks) {
          if (value._id === target.closest("li").getAttribute("_id")) {
            tasks.splice(tasks.indexOf(value), 1);
            // console.log(tasks, "Функция удаления отработала");
          }
        }
      }
    }
  });
  // console.log(tasks, "Все функции отработали");
})(tasks);
