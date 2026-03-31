let bank_balance = 320;
let phone_price = 99.99;

// The if statement requires an expression in between the parentheses ( ) that can be treated as either true or false. 
if (phone_price < bank_balance){
    console.log("I want to buy this phone");
} else{
    console.log("I cannot afford this phone");
}

// full conditional chain
if (bank_balance >= phone_price * 3) {
    console.log("I can buy this phone easily and still save money");
} else if (bank_balance >= phone_price) {
    console.log("I can buy this phone, but I should think about it");
} else {
    console.log("I cannot afford this phone");
}

switch (true) {
    case (bank_balance >= phone_price * 3):
        console.log("I can buy this phone easily and still save money");
        break;

    case (bank_balance >= phone_price):
        console.log("I can buy this phone, but I should think about it");
        break;

    default:
        console.log("I cannot afford this phone");
}