/*
 to know the type script version type ------> tsc -v in cmd .
 ---> browser can't understand typescript, so we need to change ts file into js file.
 to convert the ts file to js file ------> open related terminal to the ts file then type ------> tsc <fileName.ts>

 the above method is not good to perfom every time we change the ts file, so use following method to automatically change the ts file to js file
  
open related terminal to the ts file then type ------> tsc <fileName.ts> -w

we are telling to watch the ts file. now enter this command and keep changing ts code it will reflect on js file
*/
// lesson-1
var character = 'siva';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
    // console.log(input.id)
});
// lesson-2 
var char = 'siva';
console.log(char);
var age = 40;
var isblackBelt = true;
// char = 4;  // 'number' is not assignable to type 'string'.
// age = true; //Type 'boolean' is not assignable to type 'number'.
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ('hello')) // Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(circ(4));
// lesson-3
var names = ['siva', 'chandu', 'silver'];
names.push('krish');
// names.push(3) // ---> Argument of type 'number' is not assignable to parameter of type 'string'.
// names[0]= true; // ---> type 'boolean' is not assignable to type 'string'.
// names = 'sankar'; // ---> Type 'string' is not assignable to type 'string[]'.
var numbers = [10, 20, 30, 40];
numbers.push(55);
// numbers.push('silver') // ---> Argument of type 'string' is not assignable to parameter of type 'number'.
// numbers[1] = 'silver' // --->Type 'string' is not assignable to type 'number'.
var mixed = ['ken', 6, 'silver', 9];
mixed.push('chandu');
mixed.push(10);
// mixed.push(true)  // ---> Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
mixed[0] = 15;
// mixed[0]= false; // ---> Type 'boolean' is not assignable to type 'string | number'.
// objects
var ninja = {
    name: 'silver',
    belt: 'green',
    age: 20,
};
// ninja.age= 'silver'; // ---> Type 'string' is not assignable to type 'number'.
// ninja.name= 5; // ---> Type 'string' is not assignable to type 'number'.
ninja.age = 5;
ninja.name = 'silver';
// ninja.skills = ['fighting','swimming']  // ---> Property 'skills' does not exist on type '{ name: string; belt: string; age: number; }'.
ninja = {
    name: 'siva',
    belt: 'black',
    age: 26,
    // skills: [], // --->  Object literal may only specify known properties, and 'skills' does not exist in type '{ name: string; belt: string; age: number; }'.
};
