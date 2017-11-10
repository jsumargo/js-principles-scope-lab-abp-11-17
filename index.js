// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'ann';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

let favoriteCustomer = 'claire';

function attemptTwoFavoriteCustomers(){
  console.log(favoriteCustomer);
  //let favoriteCustomer = 123;
}

attemptTwoFavoriteCustomers();
