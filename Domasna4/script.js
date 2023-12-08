let vid = prompt("Please enter dog or human");
let age = parseInt(prompt("Please enter age"));
function convertAge(age, vid) {
  if (vid === "dog") {
    return age * 7;
  } else if (vid === "human") {
    return age / 7;
  } else {
    return "Invalid input, please choose 'dog' or 'human'.";
  }
}
console.log(convertAge(age, vid));
