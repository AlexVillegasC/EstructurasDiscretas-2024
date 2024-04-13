class Stack
{
    constructor()
    {
        this.array =[];
    }

    Push(element)
    {
        this.array.push(element);
        console.log(this.array);
    }

    Pop()
    {
        this.array.pop();
        console.log(this.array)
    }

    // PrintStack()
    // {
    //     this.array.forEach(element => {
    //         console.log(element);
    //     });
    // }
}

const stack =new Stack();
stack.Push(10);
stack.Push(20);
stack.Push(30);
stack.Pop();
//stack.PrintStack();