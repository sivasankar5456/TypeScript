let greet: Function;

// greet ='hello'

greet = () => {
  console.log("hello world");
};

// const add = (a: number, b: number, c?: number | string) => {
//   // c value is optional --> means it will give value when arguments passed if there is no 3rd argument it will be undefined but no error
//   // if questionmark(?) is not there it means 3rd argument is complsory
//   console.log(a + b);
//   console.log(c);
// };
const add: Function = (a: number, b: number, c: number | string = "hi") => {
  // if the default value assigned there is no need of question mark
  console.log(a + b);
  console.log(c);
};  // functions like these are have no return value, it's return type is void automatically. if we want we can give retrun type is void

// add(1)  error
add(3, 5); //  --> 8, undefined
add(3, 5, "hello"); // --> 8, hello

const minus = (a: number, b: number):number => { // before the arrow(=>) symbol we have return type number we give it some times for large and bigger functions, 
  // even we don't give return type while the return result is number so it will work as rturn type number
  return a - b;
};
// const result:number = minus(10, 2);
const result = minus(10, 2); // here we didn't declared type for result becaue minus function 
// return type is number , if we give number as data type it will work but if we give other data types it won't allow

// function hello(string:string) {
//     console.log('good morning '+string)
// }
// hello('chandu')


// // Type Alias
// Function types can be specified separately from functions with type aliases.

// These types are written similarly to arrow functions, read more about arrow functions here.

// Example
type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;















