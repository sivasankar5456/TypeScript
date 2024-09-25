// 12 a
var me = {
    name: "silver",
    age: 26,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("i spent", amount);
        return amount;
    },
};
var greetPerson = function (person) {
    // don't give variable type as Function here because if we give it won,t throw error if the argument object doesn't match with the parameter type IsPerson interfaces
    console.log("hello", person.name);
};
console.log(me);
// greetPerson({})// error
greetPerson(me);
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
