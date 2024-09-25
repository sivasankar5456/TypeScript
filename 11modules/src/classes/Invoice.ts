
export class Invoice {
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