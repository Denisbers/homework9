
const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

function showProducts() {
  // Show products
  for (let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
  }
}


// Get product number
function getProductNumber() {
  let productNumber;
  do {
    productNumber = prompt('Enter the product you wanna buy:');
    productNumber--;
  } while (productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
  return productNumber
}


function amountOfProducts() {
  // Get amount of products to be bought
  let amount;
  do {
    amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
  } while (amount <= 0 || isNaN(amount));
  return amount;
}

function calculateStartPrice(price, amount) {
  // Calculate the initial price
  return price * amount;
}

function calculateDiscount(initialPrice) {
  // Check if discount needed
  if (initialPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
    const superFinalPrice = initialPrice - initialPrice * DISCOUNT;
    console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
    console.log('Please pay $' + superFinalPrice);
  }
}

function shop() {
  showProducts();
  const productNumber = getProductNumber();
  const selectedProduct = products[productNumber];
  const amount = amountOfProducts()
  const initialPrice = calculateStartPrice(selectedProduct.price, amount)
  calculateDiscount(initialPrice);
}


shop()








