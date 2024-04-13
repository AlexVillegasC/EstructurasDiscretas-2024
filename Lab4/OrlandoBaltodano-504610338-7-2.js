//Stack



class Stack 
{
    constructor()
    {
        this.Array = [];
    }
    imputstack(element)
    {
        this.Array.push(element);
        
    }
    OutStack()
    {
        this.Array.pop();
        
    }
    printstack()
    {
        console.log(this.Array);
    }

}

let stack = new Stack();

stack.imputstack(1);
stack.imputstack(2);
stack.imputstack(3)
stack.imputstack(4);
stack.printstack();
stack.OutStack();
stack.printstack();
stack.imputstack(12)
stack.printstack();
