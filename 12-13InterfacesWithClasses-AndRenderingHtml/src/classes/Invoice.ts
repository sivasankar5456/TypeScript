import { HasFormatter } from "../interfaces/HasFormatter"; 

export class Invoice implements HasFormatter { /* this implements HasFormatter means Invoice calss 
  definetly contain fomat function because HasFormatter interface have that format function */
  constructor(
    readonly client: string, // here no need of using like this.client = client. but if we declared like above we need to assign likethis.client = client.
    private details: string,
    public amount: number
  ) {}

  format() {
     return `${this.client} owes RS.${this.amount} for ${this.details}`;
  }
}
