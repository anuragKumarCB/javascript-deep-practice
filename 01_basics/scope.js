const TAX_RATE = 0.18; // we declare constant with all caps and underscore

let amount = 99.99;

{
  // this is a block
  amount = amount + (amount * TAX_RATE);
  console.log("amount including tax: ", amount.toFixed(2));
}


