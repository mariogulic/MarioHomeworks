let arrayOfNumbers = [
  12, 366, 65, 78, 822, 34, 43, 67, 856, 234, 4, 23, 423, 234,
];

function numberFinder(arrayOfNumbers) {
  let biggestNumber = -Infinity;
  let smallestNumber = Infinity;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > biggestNumber) {
      biggestNumber = arrayOfNumbers[i];
    }
    if (arrayOfNumbers[i] < smallestNumber) {
      smallestNumber = arrayOfNumbers[i];
    }
  }
  let sumOfTwoNumbers = biggestNumber + smallestNumber;
  return { biggestNumber, smallestNumber, sumOfTwoNumbers };
}
console.log(numberFinder(arrayOfNumbers));
