export class Payment {
    constructor(recipient, // here no need of using like this.client = client. but if we declared like above we need to assign likethis.client = client.
    details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed RS.${this.amount} for ${this.details}`;
    }
}
