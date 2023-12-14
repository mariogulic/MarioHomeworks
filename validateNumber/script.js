let arrayOfNumbers = [10, 20, 30, 40, 50];
function sumOfArray(arrayOfNumbers) {
  let sumOfNumbers = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumOfNumbers += arrayOfNumbers[i];
  }
  return sumOfNumbers;
}

function validateNumber(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (isNaN(arrayOfNumbers[i])) {
      alert("NOT A NUMBER!!!");
      return false;
    }
  }
  console.log(sumOfArray(arrayOfNumbers));
  return true;
}
console.log(validateNumber(arrayOfNumbers));
