//// explict types
var character;
var age;
var isLoggedIn;
// let bigNumber :bigint;
// bigNumber=9007199254740991n;
// age ='silver'  //  ---> Type 'string' is not assignable to type 'number'.
age = 25;
// isLoggedIn = 25; // ---> Type 'number' is not assignable to type 'boolean'.
isLoggedIn = true;
//// arrays
var ninjas; // ---> this wont work for array.push() initially it will work when value is assigned to this array variable.
// ninjas.push('siva') // this is error
// ninjas[0] ='siva'; // this is also error it is like default value undefined
// ninjas ='siva'; // this is also error
// console.log(ninjas)// --->undefined, so undefined is not array thats why we can't assign any normal value or array values to it
//  ninjas=['hi'] // this will work because after declaration assigning value now
// let ninjas: string[] = [];
// ninjas.push("silver"); // this will work without error becuase empty array assigned;
// // union types  // for mixed types we use union type
var mixed = [];
mixed.push("hello");
mixed.push(20);
mixed.push(true);
console.log(mixed);
var uid;
uid = "123";
uid = 123;
// // objects
var ninjaOne;
var ninjaTwo;
ninjaOne = {}; // this is allowed because type is object;
ninjaOne = []; // this is allowed because type is object;
// ninjaOne = 's' // this is not allowed
ninjaTwo = { name: "si", age: 5 }; // adding properties in object
console.log(ninjaTwo);
var ninja3;
// ninja3 = { name: "chandu", age: 27 }; // this is an error because need to insert complete properties declared above;
ninja3 = { name: "chandu", age: 27, beltColour: "black" };
// ninja3 = { name: "chandu", age: 27, beltColour: "black", cell: 12345 }; // this a error becasue trying to add extra property
