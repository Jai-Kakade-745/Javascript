const cart = [
  { item: "Laptop", price: 1000 },
  { item: "Mouse", price: 50 },
  { item: "Keyboard", price: 150 }
];


const total = cart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.price;
}, 0);


const percentageValue = (total * 10) / 100;

console.log('Total Price: $${total}');
console.log(`10% Discount: $${percentageValue}`);
