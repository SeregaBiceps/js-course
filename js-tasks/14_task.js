// Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:
// func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//   first: ‘a’,
//   other: [‘b’, ‘c’, ‘d’]
// }
function func(...anyInp) {
  const [fO, ...others] = arguments;
  return {
    first: fO,
    oter: others
  };
}
console.log(func(5, 4, 8, 9));

// Организовать функцию getInfo, которая принимает объект вида
// { name: ...,  info: { employees: [...], partners: [ … ]  } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {
//   name: 'Google',
//   info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
// };
// getInfo(organisation); →
// Name: Google
// Partners: Microsoft Facebook
const organisation = {
  // name: 'Google',
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};
function getInfo({
  name,
  info: {
    partners: [partner1, partner2, ...others]
  }
}) {
  !name ? (name = "Unknown") : (name = name);
  console.log(`
Name: ${name}
Partners: ${(partner1, partner2)}`);
}
getInfo(organisation);
