// Dynamic type = any;  ---> this give able to make type script back to java script. 
// this means the varaiable assigned type as any could be anydata type

let age: any = 25;
console.log(age);
age = 'hello';
console.log(age);
age = true;
console.log(age);
age = {name: 'silver'};
console.log(age);
age = [];
console.log(age);

let mixed: any[]=[];

mixed.push(5);
mixed.push("mario");
mixed.push(false);

console.log(mixed);

let ninja: {name:any, age:any }; // here it supports any data type to the properties, but we can't add extra properties

ninja ={name:25, age:'silver', } // no error because of type:any
// ninja ={name:25, age:'silver', cell:87456789 } //  error because extra property cannot add

console.log(ninja);










































