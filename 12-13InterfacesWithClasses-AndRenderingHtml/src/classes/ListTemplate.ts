import { HasFormatter } from "../interfaces/HasFormatter"

export class ListTemplate{

    constructor(private container: HTMLUListElement){
    }
    render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4)
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if(pos === "start"){
            this.container.prepend(li)
        }else{
            this.container.append(li)
        }

    }
    
}








/*
1. register a list (ul) in the constructor
2. create a render method to render a new 'li' to the container
    -- accepts arguments: invoice or payment, a headingt, a postion
    -- create the html template (li, h4, p)
    -- add the 'li' template to the start/end of the list

*/