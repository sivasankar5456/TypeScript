// Tuples


let arr=['siva', 26, true];
arr[0]=false;
arr[1]="false";
arr[0]=1;
arr = [15,true,'silver']

// using of Tuples

let tup: [string,number,boolean] = ['krishna',25,true];
// tup[0]=15;  // error
tup[0]='ken'
// tup[1]='ken' // error
tup[1]=30;
// tup[2]=30; // error
tup[2]=false; 

console.log(tup)

let array=['siva','react',200]
let tupe_array:[string,string,number]=['siva','react',200]

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
  

// let newObjone = new Invoice(...array) // error beacuse its not deifend which one is what data type in array so our Invoice class can't accept without knwoing the data type
let newObjtwo = new Invoice(...tupe_array) // no error because its difined by tuples so our Invoice class know what is what data type so it accepts


// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.silver = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap)











