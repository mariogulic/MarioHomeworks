function Product(name, category, hasDiscount, price) {
  this.name = name;
  this.category = category;
  this.hasDiscount = hasDiscount;
  this.price = price;
}
var products = [
  new Product("Stove", "Electronics", true, 100),
  new Product("Shoes", "Clothing", false, 50),
  new Product("Orange", "Food", true, 7),
  new Product("Lawn mower ", "Home and Garden", true, 200),
  new Product("T-shirt", "Clothing", false, 17),
  new Product("Air Fryer", "Electronics", true, 500),
  new Product("Annabelle", "Toys", false, 15),
  new Product("Doll", "Toys", true, 10),
  new Product("Bed", "Furniture", false, 200),
  new Product("Bread", "Food", true, 2),
  new Product("Anklet", "Jewlery", false, 40),
  new Product("Shovel", "Home and Garden", true, 10),
  new Product("Ice Cream", "Food", false, 25),
  new Product("Ring", "Jewlery", false, 35),
  new Product("Car toy", "Toys", true, 13),
];
console.log("Products with price greater than 20");
products
  .filter((product) => product.price > 20)
  .forEach((product) => console.log(`${product.name} ${product.price}`));
console.log("===========================================");
console.log("Food products that are on discount");
products
  .filter(
    (product) => product.category == "Food" && product.hasDiscount == true
  )
  .forEach((product) => console.log(product.name));
console.log("===========================================");
console.log("Products that are on discount");
products
  .filter((product) => product.hasDiscount == true)
  .forEach((product) => console.log(`${product.name}`));
console.log("===========================================");
console.log("Products that start with a vowel and are not on discount");

const vowels = ["A", "E", "I", "O", "U"];

products
  .filter((product) =>
    vowels.some(
      (vowel) => product.name.startsWith(vowel) && product.hasDiscount == false
    )
  )
  .forEach((product) => console.log(`${product.name}`));
