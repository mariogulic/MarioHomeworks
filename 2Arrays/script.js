let firstName = ["Bob", "Jill", "Michael", "John"];
let lastName = ["Gregory", "Wurtz", "Hart", "Katz"];
function firstLastName(firstName, lastName) {
  let newArray = [];
  for (let i = 0; i < firstName.length; i++) {
    if (i < firstName.length) {
      newArray.push(`${i + 1}.` + firstName[i] + " " + lastName[i]);
    }
  }
  return newArray;
}
console.log(firstLastName(firstName, lastName));
