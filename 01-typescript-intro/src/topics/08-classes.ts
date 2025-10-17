export class Person {
    constructor(
        public name: string,
        public address: string
    ) {}
}

class Hero {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}
}

const spiderman = new Person('Spiderman', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', spiderman);

console.log(spiderman);
console.log(ironman);

export {};
