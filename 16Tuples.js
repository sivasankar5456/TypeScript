// Tuples
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = ['siva', 26, true];
arr[0] = false;
arr[1] = "false";
arr[0] = 1;
arr = [15, true, 'silver'];
// using of Tuples
var tup = ['krishna', 25, true];
// tup[0]=15;  // error
tup[0] = 'ken';
// tup[1]='ken' // error
tup[1] = 30;
// tup[2]=30; // error
tup[2] = false;
console.log(tup);
var array = ['siva', 'react', 200];
var tupe_array = ['siva', 'react', 200];
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        console.log("".concat(this.client, " owes RS.").concat(this.amount, " for ").concat(this.details));
    };
    return Invoice;
}());
// let newObjone = new Invoice(...array) // error beacuse its not deifend which one is what data type in array so our Invoice class can't accept without knwoing the data type
var newObjtwo = new (Invoice.bind.apply(Invoice, __spreadArray([void 0], tupe_array, false)))(); // no error because its difined by tuples so our Invoice class know what is what data type so it accepts
// Index signatures can be used for objects without a defined list of properties.
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.silver = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
