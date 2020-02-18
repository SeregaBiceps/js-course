const users = [
  {
    _id: "5d220b10e8265cc978e2586b",
    isActive: true,
    balance: 2853.33,
    age: 20,
    name: "Buckner Osborne",
    gender: "male",
    company: "EMPIRICA",
    email: "bucknerosborne@empirica.com",
    phone: "+1 (850) 411-2997",
    registered: "2018-08-13T04:28:45 -03:00",
    nestedField: { total: 300 }
  },
  {
    _id: "5d220b10144ef972f6c2b332",
    isActive: true,
    balance: 1464.63,
    age: 38,
    name: "Rosalie Smith",
    gender: "female",
    company: "KATAKANA",
    email: "rosaliesmith@katakana.com",
    phone: "+1 (943) 463-2496",
    registered: "2016-12-09T05:15:34 -02:00",
    nestedField: { total: 400 }
  },
  {
    _id: "5d220b1083a0494655cdecf6",
    isActive: false,
    balance: 2823.39,
    age: 40,
    name: "Estrada Davenport",
    gender: "male",
    company: "EBIDCO",
    email: "estradadavenport@ebidco.com",
    phone: "+1 (890) 461-2088",
    registered: "2016-03-04T03:36:38 -02:00",
    nestedField: { total: 200 }
  }
];
let trs = ``;
let total = 0;
for (let i = 0; i < users.length; i++) {
  trs += `
  <tr>
    <td>${i + 1}</td>
    <td>${users[i].name}</td>
    <td>${users[i].email}</td>
    <td id="balance">${users[i].balance}</td>
  </tr>`;
  total += Number(users[i].balance);
}
const body = document.body;
body.insertAdjacentHTML(
  "beforeend",
  `
<table style="border: 2px solid black;">
  <thead>
    <tr">
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Balance</th>
    </tr">
  </thead>
  <tbody>
    ${trs}
  </tbody>
  <tfoot style="text-align: right;">
    <tr>
      <td colspan="4">Total balance: <strong>${total}</strong></td>
    </tr>
  </tfoot>
</table>`
);
const table = document.querySelector("table");
table.style = `
width: 60%;
margin: 0 auto;
text-align: left;
border-collapse: collapse;
font-family: sans-serif;`;
const tr = table.querySelectorAll("tr");
setStyles(tr);
function setStyles(tr) {
  tr.forEach(el => {
    el.style = `
  border-collapse: collapse;
  border-top: 1px solid rgba(0, 0, 0, .3);
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  line-height: 40px;`;
  });
  tr[0].style.borderBottom = `2px solid rgba(0, 0, 0, .3`;
  tr[0].style.borderTop = `2px solid rgba(0, 0, 0, .3`;
  tr[tr.length - 1].style.border = `none`;
  tr[tr.length - 2].style.borderBottom = `1px solid rgba(0, 0, 0, .2)`;
}

const tbody = table.querySelector("tbody");
const sortElems = tbody.querySelectorAll("tr");
const button = document.querySelector("button");
const img = button.querySelector("img");

const arrayOfSortElems = Array.prototype.slice.call(sortElems, 0); // Волшебная команда копии объекста NodeList в обычный, с sort методом
arrayOfSortElems.sort(function(a, b) {
  const first = Number(a.querySelector("#balance").textContent);
  const second = Number(b.querySelector("#balance").textContent);
  return first - second;
});

button.classList.add("up");
button.addEventListener("click", function(el) {
  el.stopPropagation();
  el.target.classList.toggle("up");
  if (!el.target.classList.contains("up")) {
    img.style.transform = "rotateZ(180deg)";
    arrayOfSortElems.reverse();
    tbody.innerHTML = "";
    for (let i = 0; i < arrayOfSortElems.length; i++) {
      arrayOfSortElems[i].querySelector("td").textContent = String(i + 1);
      tbody.insertAdjacentHTML("beforeend", arrayOfSortElems[i].innerHTML);
    }
    const newtr = table.querySelectorAll("tr");
    setStyles(newtr);
  } else {
    img.style.transform = "none";
    arrayOfSortElems.reverse();
    tbody.innerHTML = "";
    for (let i = 0; i < arrayOfSortElems.length; i++) {
      arrayOfSortElems[i].querySelector("td").textContent = String(i + 1);
      tbody.insertAdjacentHTML("beforeend", arrayOfSortElems[i].innerHTML);
    }
    const newtr = table.querySelectorAll("tr");
    setStyles(newtr);
  }
});
