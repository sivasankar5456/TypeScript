// 14 Generics
/*
 Generics allow us to create reusable block of code which can be used to diffirent types
*/

// const addUID = (obj: object) =>{
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid}
// }

// let docOne = addUID({name:'siva', age:26});

// console.log(docOne.name); // error --> Property 'name' does not exist on type '{ uid: number; }'

// using Generic

// 1

// const addUID = <T> (obj: T) =>{
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid}
// }

// let docOne = addUID({name:'siva', age:26});
// console.log(docOne.name); // no error --> because generic <T> is capturing so it knwos what kind of data coming what type of data it knows

// let docTwo = addUID('hello'); // this should be error but its not showing error  lets fix that next

// 2

// const addUID = <T extends object >(obj: T) =>{
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid}
// }

// let docOne = addUID({name:'siva', age:26});
// console.log(docOne.name);

// let docTwo = addUID('hello'); // now its showing error because it identifies argument is not matching with parameter

// 3

// const addUID = <T extends {name: string} >(obj: T) =>{
//     let uid = Math.floor(Math.random()*100);
//     return {...obj, uid}
// }

// // let docOne = addUID({name:30, age:26}); // error --because name must be string we have given
// let docOne = addUID({name:'siva', age:26});

// console.log(docOne.age);

// with interfaces

interface Resources<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const documentOne: Resources<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "silver" },
};
const documentTwo: Resources<string[]> = {
  uid: 2,
  resourceName: "person",
  data: ["silver","krishna"],
};
const documentThree: Resources<boolean> = {
  uid: 3,
  resourceName: "person",
  data: false,
};

console.log(documentOne,documentTwo,documentThree)


// // Type Aliases
// //  Generics in type aliases allow creating types that are more reusable.

// // Example
type Wrapped<T,S> = { name:T, value: S };

const wrappedValue: Wrapped<string,number> = { name:'siva', value: 10 };

//// This also works with interfaces with the following syntax: interface Wrapped<T> {


// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.

//// Example

type Wrapp<T = string> = { value: T }; //  here string is default value if the type is no assigned when it used

const wrappValue: Wrapp<number> = { value: 10 };
const wrappValue2: Wrapp = { value: "10" }; // no error because we have defualt value as string
// const wrappValue3: Wrapp = { value: 10 }; // its throwing error because we have defualt value as string


// // Extends
// // Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
// // constraints mening is parimithi or limits
// // Example

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] { // here retrun type must be [S, T]
  console.log(`creating pair: v1='${v1}', v2='${v2}'`);
  return [v1, v2];
}

// // This can be combined with a default value.








