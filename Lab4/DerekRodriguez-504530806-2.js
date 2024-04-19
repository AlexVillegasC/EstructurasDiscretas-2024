class Stack
{
    constructor()
    {
        this.Numbers = [1,2,3,4,5]
    }

    EnStack (element) 
     {      
        this.Numbers.push(element);
    }

    DeStack()
    {
        this.Numbers.pop()
    }

    printStack()
    {
        this.Numbers.forEach(element =>
        {
            console.log(element )
            
        });
    }

}


const stack = new Stack()

for (let i = 0; i <= 10; i++)
{
    if (i != stack)
    {
        let element = i + 6;
        let element2 = i + 7;
        
        stack.EnStack(element);
        
        console.log(stack.printStack());

        stack.DeStack();
        
    }

    console.log("---------------------------------")
}