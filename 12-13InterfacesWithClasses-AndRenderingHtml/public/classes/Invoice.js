export class Invoice {
    constructor(client, // here no need of using like this.client = client. but if we declared like above we need to assign likethis.client = client.
    details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes RS.${this.amount} for ${this.details}`;
    }
}
