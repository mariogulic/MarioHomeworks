let age = prompt("Please enter your age");
let zodiac = (age - 4) % 12;
if (zodiac == 0) {
  document.write("Rat");
} else if (zodiac == 1) {
  document.write("Ox");
} else if (zodiac == 2) {
  document.write("Tiger");
} else if (zodiac == 3) {
  document.write("Rabbit");
} else if (zodiac == 4) {
  document.write("Dragon");
} else if (zodiac == 5) {
  document.write("Snake");
} else if (zodiac == 6) {
  document.write("Horse");
} else if (zodiac == 7) {
  document.write("Goat");
} else if (zodiac == 8) {
  document.write("Monkey");
} else if (zodiac == 9) {
  document.write("Rooster");
} else if (zodiac == 10) {
  document.write("Dog");
} else {
  document.write("Pig");
}
