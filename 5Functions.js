var greet;
// greet ='hello'
greet = function () {
    console.log("hello world");
};
// const add = (a: number, b: number, c?: number | string) => {
//   // c value is optional --> means it will give value when arguments passed if there is no 3rd argument it will be undefined but no error
//   // if questionmark(?) is not there it means 3rd argument is complsory
//   console.log(a + b);
//   console.log(c);
// };
var add = function (a, b, c) {
    if (c === void 0) { c = "hi"; }
    // if the default value assigned there is no need of question mark
    console.log(a + b);
    console.log(c);
}; // functions like these are have no value its return type is void automatically. if we want we can give retrun type is void
// add(1)  error
add(3, 5); //  --> 8, undefined
add(3, 5, "hello"); // --> 8, hello
var minus = function (a, b) {
    return a - b;
};
var result = minus(10, 2); // here we didn't declared type for result becaue minus function return type is number
// function hello(string:string) {
//     console.log('good morning '+string)
// }
// hello('chandu')
