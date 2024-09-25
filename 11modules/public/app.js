// open terminal for 11Modules and type -w then run index.html file with live server
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("rajesh", "work on the react js", 250);
console.log('siva');
const invTwo = new Invoice("suresh", "work on the node js", 350);
invOne.format();
invTwo.format();
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
