class Stack
{
    constructor()
    {
        this.array =[];
    }

    Push(element)                     //Agrega elementos
    {
        this.array.push(element);
        console.log(this.array);
    }

    Pop()                            //Quita elementos 
    {
        this.array.pop();
        console.log(this.array)
    }


}

const stack =new Stack();             //Instancia 
stack.Push(60);
stack.Push(55);
stack.Push(22);
stack.Pop();
