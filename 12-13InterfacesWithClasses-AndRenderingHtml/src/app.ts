/* 13 rendering html */
// open terminal for 12-13InterfacesWithClasses-AndRenderingHtml and type -w then run index.html file with live server
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instances
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value == "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
  
  // emptying the inputs after submit
  tofrom.innerText = "";
  details.innerText = "";
  amount.innerText = "";
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 12 b interfaces with classes */

// // open terminal for 12-13 and type -w then run index.html file with live server

// import { Invoice } from "./classes/Invoice.js";
// import { Payment } from "./classes/Payment.js";
// import { HasFormatter } from "./interfaces/HasFormatter.js";

// // 1

// //   let docOne:HasFormatter;
// //   let docTwo:HasFormatter;

// //   docOne = new Invoice('silver','web work',250);
// //   docTwo = new Invoice('radha','backend work',200);
// //   let docs: HasFormatter[] =[]
// //   docs.push(docOne);
// //   docs.push(docTwo);

// //   console.log(docs)

// //   const invOne = new Invoice("rajesh", "work on the react js", 250);
// //   const invTwo = new Invoice("suresh", "work on the node js", 350);

// //   let invoices: Invoice[]=[]
// //   invoices.push(invOne);
// //   invoices.push(invTwo);

// //   invoices.forEach((inv=>{
// //     console.log(inv.client, inv.amount, inv.format())
// //   }))

// // 2
// const form = document.querySelector(".new-item-form") as HTMLFormElement;

// const type = document.querySelector("#type") as HTMLSelectElement;
// const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
// const details = document.querySelector("#details") as HTMLInputElement;
// const amount = document.querySelector("#amount") as HTMLInputElement;

// form.addEventListener("submit", (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value == "invoice") {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
// }else{
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
// }
//   console.log(doc);
// });
