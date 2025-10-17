import { taxCalculation, type Product } from "./06-function-destructuring"

const shoppingCart: Product[] = [
    { description: 'Nokia A1', price: 150 },
    { description: 'iPad Air', price: 350 }
];

console.log('Shopping Cart: ', shoppingCart);

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total: ', total);
console.log('Tax: ', tax);
export {}   