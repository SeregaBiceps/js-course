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
  const buttonFrag = document.createDocumentFragment();
  const buttonWrapper = document.createElement("div");
  const everyTaskBtn = document.createElement("button");
  const completedTaskBtn = document.createElement("button");
  buttonWrapper.style.display = "flex";
  buttonWrapper.style.justifyContent = "space-around";
  everyTaskBtn.style.width = "45%";
  completedTaskBtn.style.width = "45%";
  buttonWrapper.style.height = "40px";
  buttonWrapper.style.marginTop = "20px";
  everyTaskBtn.textContent = "Show all tasks";
  completedTaskBtn.textContent = "Show only uncompleted";
  buttonWrapper.appendChild(everyTaskBtn);
  buttonWrapper.appendChild(completedTaskBtn);
  buttonFrag.appendChild(buttonWrapper);
  const card = document.querySelector(".col");
  card.appendChild(buttonFrag);
  everyTaskBtn.addEventListener("click", function(el) {
    el.preventDefault();
    const everyLi = document.querySelectorAll(".list-group-item");
    for (let value of everyLi) {
      if (value.hasAttribute("id")) {
        value.classList.add("d-flex");
        value.style.display = "block";
      }
    }
  });
  completedTaskBtn.addEventListener("click", function(el) {
    el.preventDefault();
    for (let value of tasks) {
      if (value.completed) {
        const liToDel = document.getElementById(value._id);
        liToDel.classList.remove("d-flex");
        liToDel.style.display = "none";
      }
    }
  });

  const fragment = document.createDocumentFragment();
  const ul = document.querySelector(".list-group");
  const emptyFragment = document.createDocumentFragment();
  const emptyLi = document.createElement("li");
  emptyLi.classList.add(
    "list-group-item",
    "align-items-center",
    "flex-wrap",
    "mt-2"
  );
  const emptySpan = document.createElement("span");
  emptySpan.style.fontWeight = "bold";
  emptySpan.textContent = "Список задач пуст";
  emptyLi.classList.add("emptyList");
  emptyLi.style.textAlign = "center";
  emptyLi.appendChild(emptySpan);
  emptyFragment.appendChild(emptyLi);
  arrOfTasks.forEach(function(task) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const p = document.createElement("p");
    const completeButton = document.createElement("button");
    completeButton.classList.add(
      "btn",
      "btn-success",
      "ml-auto",
      "complete-btn"
    );
    completeButton.textContent = "Complete";
    li.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center",
      "flex-wrap",
      "mt-2"
    );
    li.setAttribute("id", task._id);
    btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
    p.classList.add("mt-2", "w-100");
    span.textContent = task.title;
    span.style.fontWeight = "bold";
    btn.textContent = "Delete";
    p.textContent = task.body;
    li.appendChild(span);
    li.appendChild(btn);
    li.appendChild(p);
    li.appendChild(completeButton);
    fragment.appendChild(li);
  });
  if (tasks == false) {
    ul.appendChild(emptyFragment);
  } else {
    ul.appendChild(fragment);
    emptyLi.style.display = "none";
    ul.appendChild(emptyFragment);
  }

  const addForm = document.forms.addTask;
  const title = addForm.title;
  const body = addForm.body;
  addForm.addEventListener("submit", function(el) {
    el.preventDefault();
    if (title.value && body.value) {
      if (tasks == false) {
        const emptyList = document.querySelector(".emptyList");
        emptyList.style.display = "none";
      }

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
      const completeButton = document.createElement("button");
      completeButton.classList.add(
        "btn",
        "btn-success",
        "ml-auto",
        "complete-btn"
      );
      completeButton.textContent = "Complete";
      li.classList.add(
        "list-group-item",
        "d-flex",
        "align-items-center",
        "flex-wrap",
        "mt-2"
      );
      li.setAttribute("id", newTask._id);
      btn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn");
      p.classList.add("mt-2", "w-100");
      span.textContent = title.value;
      span.style.fontWeight = "bold";
      btn.textContent = "Delete";
      p.textContent = body.value;
      li.appendChild(span);
      li.appendChild(btn);
      li.appendChild(p);
      li.appendChild(completeButton);
      ul.insertAdjacentElement("afterbegin", li);
      addForm.reset();
    } else {
      alert("Заполните все поля");
    }
  });
  ul.addEventListener("click", function({ target }) {
    if (target.classList.contains("delete-btn")) {
      const conf = confirm("Уверен?");
      if (conf) {
        target.closest("li").remove();
        for (let value of tasks) {
          if (value._id === target.closest("li").getAttribute("id")) {
            tasks.splice(tasks.indexOf(value), 1);
          }
        }
      }
    }
    if (tasks == false) {
      const emptyList = document.querySelector(".emptyList");
      emptyList.style.display = "block";
    }
  });
  for (let value of tasks) {
    if (value.completed === true) {
      const li = document.getElementById(value._id);
      li.style.backgroundColor = "rgba(0, 255, 100, 0.3)";
    }
  }
  ul.addEventListener("click", function({ target }) {
    if (target.classList.contains("complete-btn")) {
      for (let value of tasks) {
        if (value._id === target.closest("li").getAttribute("id")) {
          if (value.completed === true) {
            value.completed = false;
            target.closest("li").style.backgroundColor = "#fff";
          } else {
            value.completed = true;
            target.closest("li").style.backgroundColor =
              "rgba(0, 255, 100, 0.3)";
          }
        }
      }
    }
  });

  const themes = {
    default: {
      "--base-text-color": "#212529",
      "--header-bg": "#007bff",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#007bff",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#0069d9",
      "--default-btn-border-color": "#0069d9",
      "--danger-btn-bg": "#dc3545",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#bd2130",
      "--danger-btn-border-color": "#dc3545",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#80bdff",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(0, 123, 255, 0.25)"
    },
    dark: {
      "--base-text-color": "#212529",
      "--header-bg": "#343a40",
      "--header-text-color": "#fff",
      "--default-btn-bg": "#58616b",
      "--default-btn-text-color": "#fff",
      "--default-btn-hover-bg": "#292d31",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#b52d3a",
      "--danger-btn-text-color": "#fff",
      "--danger-btn-hover-bg": "#88222c",
      "--danger-btn-border-color": "#88222c",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)"
    },
    light: {
      "--base-text-color": "#212529",
      "--header-bg": "#fff",
      "--header-text-color": "#212529",
      "--default-btn-bg": "#fff",
      "--default-btn-text-color": "#212529",
      "--default-btn-hover-bg": "#e8e7e7",
      "--default-btn-border-color": "#343a40",
      "--default-btn-focus-box-shadow":
        "0 0 0 0.2rem rgba(141, 143, 146, 0.25)",
      "--danger-btn-bg": "#f1b5bb",
      "--danger-btn-text-color": "#212529",
      "--danger-btn-hover-bg": "#ef808a",
      "--danger-btn-border-color": "#e2818a",
      "--input-border-color": "#ced4da",
      "--input-bg-color": "#fff",
      "--input-text-color": "#495057",
      "--input-focus-bg-color": "#fff",
      "--input-focus-text-color": "#495057",
      "--input-focus-border-color": "#78818a",
      "--input-focus-box-shadow": "0 0 0 0.2rem rgba(141, 143, 146, 0.25)"
    }
  };
  const select = document.getElementById("themeSelect");
  select.addEventListener("change", function() {
    const selectedStyles = themes[select.value];
    Object.entries(selectedStyles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  });
  if (localStorage.getItem("theme")) {
    const selectedStyles = themes[localStorage.getItem("theme")];
    Object.entries(selectedStyles).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });
  }
})(tasks);
// Если массив с задачами пустой то под формой нужно выводить сообщение об этом, также это же сообщение нужно выводить если вы удалите все задачи.
// В каждый элемент li добавить кнопку которая будет делать задачу выполненной. завершенные задачи должны быть подсвечены любым цветом.
// Добавить функционал отображения незавершенных задач и всех задач. т.е у вас будет две кнопки над таблицей 1-я "показать все задачи" и 2-я "показать незавершенные задачи", определить завершена задача или нет можно по полю completed в объекте задачи.  По умолчанию при загрузке отображаются все задачи.
