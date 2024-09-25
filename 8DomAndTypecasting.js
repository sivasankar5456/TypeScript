// 8 DOM and TYPECASTING
// DOM
var anchor = document.querySelector('a');
//  const anchor = document.querySelector('a')!;
//console.log(anchor.href)
// or
// if(anchor){
//     console.log(anchor.href)
// }
// or
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href);
//  const form = document.querySelector('form')!; // put cursor on form variable it will show HTMLFormElement because we used tag name so it finds out what kind of element it is
//  const form = document.querySelector('.form-tag')  // put cursor on form variable it will show Element because it is a class name so it can't find out what kind of tag it is.
// TYPE CASTING
var form = document.querySelector('.new-item-form');
// console.log(form?.children)
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
// //TypeScript Casting
// // There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
// //Casting is the process of overriding a type.
// //Casting with "as"
// // A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
// // ExampleGet your own TypeScript Server
var x = 'hello';
console.log(x.length);
/**
 *
Casting doesn't actually change the type of the data within the variable,
for example the following code will not work as expected since the variable x is still holds a number.
 */
var y = 4;
console.log('y=', y, '\ntypeof y=', typeof y); // prints undefined since numbers don't have a length
console.log('length of y=', y.length);
var t = y;
console.log('t=', t, '\ntypeof t=', typeof t);
console.log('length of t=', t.length);
/*
// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct,
for example the following will throw a type error since TypeScript knows casting a string to a number
doesn't makes sense without converting the data:
 */
// console.log((4 as string).length); 
/*
Error: Conversion of type 'number' to type 'string'
 may be a mistake because neither type sufficiently overlaps with the other.
 If this was intentional, convert the expression to 'unknown' first.
 */
// // The Force casting section below covers how to override this.
// // Casting with <>
//// Using <> works the same as casting with as.
//// Example
var z = 'hello';
console.log('z=', z.length);
// // This type of casting will not work with TSX, such as when working on React files.
// // Force casting
// // To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
//// Example
var m = "1234";
console.log('m=', m); // x is not actually a number so this will return undefined
