// 14 Generics
/*
 Generics allow us to create reusable block of code which can be used to diffirent types
*/
var documentOne = {
    uid: 1,
    resourceName: "person",
    data: { name: "silver" },
};
var documentTwo = {
    uid: 2,
    resourceName: "person",
    data: ["silver", "krishna"],
};
var documentThree = {
    uid: 3,
    resourceName: "person",
    data: false,
};
console.log(documentOne, documentTwo, documentThree);
var wrappedValue = { name: 'siva', value: 10 };
var wrappValue = { value: 10 };
var wrappValue2 = { value: "10" }; // no error because we have defualt value as string
// const wrappValue3: Wrapp = { value: 10 }; // its throwing error because we have defualt value as string
// // Extends
// // Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
// // Example
function createLoggedPair(v1, v2) {
    console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
    return [v1, v2];
}
// // This can be combined with a default value.
