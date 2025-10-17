export interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 350
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation(options : TaxCalculationOptions): number [] {
    let total = 0;

    options.products.forEach( ({price} )=> {
        total += price;
    })
    return [total, total * options.tax];
}

const [total, taxes] = taxCalculation({ products: shoppingCart, tax: tax });
console.log('Total: ', total);
console.log('Total taxes: ', taxes);

