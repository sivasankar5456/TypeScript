// const logDetails: Function = (uid: string | number, item: string) => {
//   console.log(`${item} has a uid of ${uid}`);
// };
var logDetails = function (uid, item) {
    console.log("".concat(item, " has a uid of ").concat(uid));
};
var greet = function (user) {
    console.log("".concat(user.name, " says hello"));
};
var greetAgain = function (user) {
    console.log("".concat(user.name, " says hello agin"));
};
console.log('type', typeof greet); // type is function
// greetAgain({}) if we give greetAgain type as function here no error but if we revmove it will throw error becasue argument not matching with parameter
var object = {
    name: 'string',
    uid: 23,
};
console.log('type', typeof object); // type is object
greetAgain(object); // no error because argument matching with parameter
