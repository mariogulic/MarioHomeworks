let pricePhone = 119.95;
let tax = 5 / 100;
let numberPhones = 30;

priceWithoutTax = pricePhone * numberPhones;
fulltax = priceWithoutTax * tax;
finalprice = priceWithoutTax + fulltax;

console.log(finalprice);
document.write(finalprice);
