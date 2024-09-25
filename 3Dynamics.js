// Dynamic type = any;  ---> this give able to make type script back to java script. 
// this means the varaiable assigned type as any could be anydata type
var age = 25;
console.log(age);
age = 'hello';
console.log(age);
age = true;
console.log(age);
age = { name: 'silver' };
console.log(age);
age = [];
console.log(age);
var mixed = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);
console.log(mixed);
var ninja; // here it supports any data type to the properties, but we can't add extra properties
ninja = { name: 25, age: 'silver', }; // no error because of type:any
console.log(ninja);
