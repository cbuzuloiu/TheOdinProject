`use strict`;

let user = {
  name: "John",
  surname: "Smith",
};

console.log(user);

user.name = "Peter";
delete user.surname;

console.log(user);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
