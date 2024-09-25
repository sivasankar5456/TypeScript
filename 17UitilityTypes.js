// // TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Record is a shortcut to defining an object type with a specific key type and value type.
// // Record<string, number> is equivalent to { [key: string]: number }
// // Example
var nameAgeMap = {
    'Alice': 21,
    'Bob': 25
};
var bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
var Bob = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
var value = true; // a string cannot be used here since Exclude removed it from the type.
var point = {
    x: 10,
    y: 20
};
var Point = {
    x: 10,
    y: 20
};
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    var _a;
    return _a = {}, _a[property] = value, _a;
}
console.log(createStringPair('name', "siva"));
