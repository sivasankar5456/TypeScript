// const logDetails: Function = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };

// const greet: Function = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };
// const greetAgain: Function = (user: { name: string; uid: string | number }) => {
//   console.log(`${user.name} says hello`);
// };

// using Aliases

type stringOrNum = string | number;
type objProps = { name: string; uid: number | string };


const logDetails: Function = (uid: stringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objProps) => { // it is taking type as function because we have assigned arrow function
  console.log(`${user.name} says hello`);
};
const greetAgain = (user: objProps) => {
  console.log(`${user.name} says hello agin`);
};

console.log('type',typeof greet) // type is function

// greetAgain({}) //if we give greetAgain type as function here no error but if we remove it will throw error becasue argument not matching with parameter

let object:objProps={ // we have took reference of objProp reference to create object
  name:'string',
  uid:23,
}
console.log('type', typeof object) // type is object
greetAgain(object) // no error because argument matching with parameter



// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// Example

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
};



