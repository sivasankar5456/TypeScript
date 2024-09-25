// 10 public private readonly protected

// the classes in type script are same as in javascript

class Invoice {
  // readonly client: string; // it lets to use it out side of the class for reading only, but not access it and modify. 
  // private details: string; // it won't let use it out side of the class, it limited to use inside this calss 
  // only like used in formate function. and you cannot use private variable in other class through inheretance.
  // public amount: number;  // it lets use it outside of the class and also modify it. 
  // protected cell: string; // allows access to the class member from itself and any classes that inherit it.
  
  //  constructor(c: string, d: string, a: number, b:string) {
  //    this.client = c;
  //    this.details = d;
  //    this.amount = a;
  //    this.cell = b;
  //  }

  //    or

  constructor( 
    readonly client:string,  // here no need of using like this.client = client. but if we declared like above we need to assign likethis.client = client.
    private details: string,
    public amount: number,
    // protected cell: string,
  ){

  }

   format(): string {
     return `${this.client} owes RS.${this.amount} for ${this.details}`;
   }
 }
 
 const invOne = new Invoice("rajesh", "work on the react js", 250); // if we give data type as object here it wont work for push method for invoices array given below because we directly given type as Invoices
 const invTwo = new Invoice("suresh", "work on the node js", 350);


//  console.log(typeof Invoice) // the type is function here
 let invoices: Invoice[]=[]
 invoices.push(invOne);
 invoices.push(invTwo);
 
 invoices.forEach((inv)=>{
  console.log('client: ',inv.client,'amount: ',inv.amount,inv.format())  // here we can't use inv.details because it is out side of the class but inside of the formate it will work, so we can see the printing in console .
 });

