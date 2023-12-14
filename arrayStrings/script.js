stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
function bigString(array) {
  let result = "";
  for (i = 0; i < array.length; i++) {
    result += array[i] + " ";
  }
  return result;
}
console.log(bigString(stringArray));
