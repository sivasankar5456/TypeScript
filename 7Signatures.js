// let greet: Function;
// example 1
var greet;
// greet =(name: string, greeting: number)=>{ // it will be error becasue type is not matched with signature
// };
greet = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
greet("siva", "good evening");
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    // if(action === "add"){
    // return numOne+numTwo
    // }
    // it will throw error becaue retrun statement is cumpolsary so need else condtion
    // we need to return number type value compulsory
    if (action === "add") {
        console.log(numOne + numTwo);
        return numOne + numTwo;
    }
    else {
        console.log(numOne - numTwo);
        return numOne - numTwo;
    }
};
calc(10, 5, "add");
calc(10, 5, "minus");
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old "));
};
logDetails({ name: "silver", age: 25 });
