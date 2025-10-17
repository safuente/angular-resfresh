function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNummbersArrow = (a: number, b: number): number => {
  return a + b;
};

function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
  return firstNumber * base;
}

const result = addNumbers(1, 2);

const result2 = addNummbersArrow(3, 2);

const result3 = multiply(5);

console.log({result2});

console.log({result});

console.log({result3});


interface Character {
  name: string;
  pv: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.pv += amount;
}

const strider: Character = {
  name: 'Strider',
  pv: 50,
  showHp() {
    console.log(`Puntos de vida ${this.pv}`);
  }
}

healCharacter(strider, 20);
healCharacter(strider, 20);

strider.showHp();   


export {};