// Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none. При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в тот  dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.
const dropItems = document.querySelectorAll(".dropdown-item");
const dropMenus = document.querySelectorAll(".dropdown-menu");
dropItems.forEach(function(el) {
  const dropMenu = el.querySelector(".dropdown-menu");
  el.addEventListener("click", function(target) {
    if (target.target === el.querySelector("span")) {
      const dropMenuClasses = dropMenu.classList.value;
      dropMenus.forEach(function(menu) {
        menu.classList.add("d-none");
        dropMenu.classList = dropMenuClasses;
      });
      dropMenu.classList.toggle("d-none");
    }
  });
});
