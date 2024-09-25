export class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        console.log(`${this.client} owes RS.${this.amount} for ${this.details}`);
    }
}
