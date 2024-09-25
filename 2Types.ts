//// explict types

let character: string;
let age: number;
let isLoggedIn: boolean;
let Null: null;
// Null="null";
let _undefined: undefined;
// _undefined="undefined";

// let bigNumber :bigint;
// bigNumber=9007199254740991n;

// age ='silver'  //  ---> Type 'string' is not assignable to type 'number'.
age = 25;

// isLoggedIn = 25; // ---> Type 'number' is not assignable to type 'boolean'.
isLoggedIn = true;

//// arrays

let ninjas: string[]; // ---> this wont work for array.push() initially it will work when value is assigned to this array variable.

// ninjas.push('siva') // this is error
// ninjas[0] ='siva'; // this is also error it is like default value undefined
// ninjas ='siva'; // this is also error
// console.log(ninjas)// --->undefined, so undefined is not array thats why we can't assign any normal value or array values to it
ninjas = ["hi"]; // this will work because after declaration assigning value now

// let ninjas: string[] = [];
// ninjas.push("silver"); // this will work without error becuase empty array assigned;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // union types  // for mixed types we use union type

// let mixed: (string | number )[] = [];
// mixed.push("hello");
// mixed.push(20);
// mixed.push(true); // here boolean is not assignable

let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);

console.log(mixed);

let uid: string | number;

uid = "123";
uid = 123;

// Union Type Errors
// Note: you need to know what your type is when union types are being used to avoid type errors:

// Example
function printStatusCode(code: string | number) {
//  console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist ontype 'string | number'.
  // Property 'toUpperCase' does not exist on type 'number'
}
// In our example we are having an issue invoking toUpperCase() as its a string method and number doesn't have access to it.







// // objects
let ninjaOne: object;
let ninjaTwo: {}; // this is same as ninjaOne, but better use object not its symbol

ninjaOne = {}; // this is allowed because type is object;
ninjaOne = []; // this is allowed because type is object;
// ninjaOne = 's' // this is not allowed

ninjaTwo = { name: "si", age: 5 }; // adding properties in object
// ninjaTwo.cell=1235; // error
console.log(ninjaTwo);
ninjaTwo = { name: "si", age: 5, cell:12345 }; // allowed
console.log(ninjaTwo);

let ninja3: {
  name: string;
  age: number;
  beltColour: string;
};

// ninja3 = { name: "chandu", age: 27 }; // this is an error because need to insert complete properties declared above;
ninja3 = { name: "chandu", age: 27, beltColour: "black" };
// ninja3 = { name: "chandu", age: 27, beltColour: "black", cell: 12345 }; // this a error becasue trying to add extra property
