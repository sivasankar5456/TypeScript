// open terminal for 11Modules and type -w then run index.html file with live server
import { Invoice } from "./classes/Invoice.js";

  const invOne = new Invoice("rajesh", "work on the react js", 250);
   const invTwo = new Invoice("suresh", "work on the node js", 350);
  invOne.format()
  invTwo.format()
  
  let invoices: Invoice[]=[]
  invoices.push(invOne);
  invoices.push(invTwo);
  
  const form = document.querySelector('.new-item-form') as HTMLFormElement;
  
  const type = document.querySelector('#type') as HTMLSelectElement;
  const tofrom = document.querySelector('#tofrom') as HTMLInputElement ;
  const details = document.querySelector('#details') as HTMLInputElement;
  const amount = document.querySelector('#amount') as HTMLInputElement;
  
  form.addEventListener('submit',(e:Event)=>{
      e.preventDefault()
      console.log(
          type.value,
          tofrom.value,
          details.value,
          amount.valueAsNumber,
      )
  })
  