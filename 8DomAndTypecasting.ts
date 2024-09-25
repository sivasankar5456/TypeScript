 // 8 DOM and TYPECASTING
 
 // DOM
 const anchor = document.querySelector('a');

//  const anchor = document.querySelector('a')!;
//console.log(anchor.href)

// or

// if(anchor){
//     console.log(anchor.href)
// }

// or

 console.log(anchor?.href)

//  const form = document.querySelector('form')!; // put cursor on form variable it will show HTMLFormElement because we used tag name so it finds out what kind of element it is
//  const form = document.querySelector('.form-tag')  // put cursor on form variable it will show Element because it is a class name so it can't find out what kind of tag it is.


// TYPE CASTING

 const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form?.children)

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement ;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,
    )
})




// //TypeScript Casting
// // There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// //Casting is the process of overriding a type.

// //Casting with "as"
// // A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// // ExampleGet your own TypeScript Server
let x: unknown = 'hello';
console.log((x as string).length);
/**
 * 
Casting doesn't actually change the type of the data within the variable, 
for example the following code will not work as expected since the variable x is still holds a number.
 */
let y: unknown = 4;
console.log('y=',(y as string),'\ntypeof y=', typeof (y as string)); // prints undefined since numbers don't have a length
console.log('length of y=',(y as string).length); 
let t: string = (y as string);
console.log('t=',t,'\ntypeof t=', typeof t);
console.log('length of t=',t.length); 
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
let z: unknown = 'hello';
console.log('z=',(<string>z).length);
// // This type of casting will not work with TSX, such as when working on React files.

// // Force casting
// // To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

//// Example
let m = "1234";
console.log('m=',((m as unknown) as number)); // x is not actually a number so this will return undefined







