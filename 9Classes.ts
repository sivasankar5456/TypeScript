// // the classes in type script are same as in javascript

class Invoice {
  client: string; 
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }
  format(){
    console.log(`${this.client} owes RS.${this.amount} for ${this.details}`)
  }
}

const invOne = new Invoice("rajesh", "work on the react js", 250);
 /* if we give data type as object here it wont work for push 
method for invoices array given below because we directly given type as Invoices */

const invTwo = new Invoice("suresh", "work on the node js", 350);
invOne.format()
invTwo.format()
// console.log(invOne,invTwo)
console.log(typeof Invoice)  // the type is function here
let invoices: Invoice[]=[]
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices)


