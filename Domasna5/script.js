let allMoney = parseInt(prompt("Your account balance:"));
let withdrawMoney = parseInt(
  prompt("How much money would you like to withdraw?")
);
function atm(allMoney, withdrawMoney) {
  if (isNaN(withdrawMoney) || withdrawMoney <= 0) {
    alert("Please enter valid amount");
    return;
  } else if (withdrawMoney > allMoney) {
    alert("You dont have enough money");
    return;
  } else {
    let successfulTransaction = allMoney - withdrawMoney;
    alert(
      `You have successfuly withdrawn:${withdrawMoney}.Your remaining balance is: ${successfulTransaction}`
    );
    return { withdrawMoney, successfulTransaction };
  }
}
atm(allMoney, withdrawMoney);
