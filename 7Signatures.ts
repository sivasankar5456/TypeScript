// 7.Signatures
// example 1

let greet: (a: string, x: string) => void;

// greet =(name: string, greeting: number)=>{ // it will be error becasue type is not matched with signature
// };

greet = (name: string, greeting: string) => { // no error because it matched with signature
  console.log(`${name} says ${greeting}`);
};
greet("siva", "good evening");

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => { 
  // if(action === "add"){
  // return numOne+numTwo
  // }
  // it will throw error becaue retrun statement is cumpolsary so need else condtion
  // we need to return number type value compulsory
  if (action === "add") {
    console.log(numOne + numTwo);
    return numOne + numTwo;
  } else {
    console.log(numOne - numTwo);
    return numOne - numTwo;
  }
};
calc(10, 5, "add");
calc(10, 5, "minus");

// example 3
type Person = { name: string; age: number };

let logDetails: (obj: Person) => void;

logDetails = (ninja: Person) => {
  console.log(`${ninja.name} is ${ninja.age} years old `);
};

logDetails({ name: "silver", age: 25 });

// // Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

