const SPENDING_TRESHOLD = 300;
const TAX_RATE = 0.08;
var PHONE_COST = 109.99;
var ACCESSORY_COST = 8.99;

var budget = 390;
var amount = 0;

function addTax(amount) {
    return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed( 2 );
}

while(amount < budget) {

  amount = amount + PHONE_COST;

  if(amount < SPENDING_TRESHOLD) {
      amount = amount + ACCESSORY_COST;
  }
}

amount = amount + addTax( amount );
console.log("Your purchase plus tax" + formatAmount( amount );

if(amount > budget) {
  console.log("You cannot afford this purchase");
}
