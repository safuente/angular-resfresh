function classDecorator<T extends {new(...args:any[]): {}}> (
    constructor: T
)
    {
        return class extends constructor {
            newProperty = 'New Property';
            hello = 'override';
        }
}

@classDecorator
export class SuperClass {
    public myProperty: string = 'Hello World';

    print() {
        console.log('Hello from my class');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
