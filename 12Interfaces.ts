// 12 a

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "silver",
  age: 26,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spent", amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  // don't give variable type as Function here because if we give it won,t throw error if the argument object doesn't match with the parameter type IsPerson interfaces
  console.log("hello", person.name);
};

console.log(me);

// greetPerson({})// error
greetPerson(me);




// // Interfaces
// // Interfaces are similar to type aliases, except they only apply to object types.

// Extending Interfaces
// Interfaces can extend each other's definition.

// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

// Example

interface Rectangle {
  height: number,
  width: number
}

interface ColoredRectangle extends Rectangle {
  color: string
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red"
};


































