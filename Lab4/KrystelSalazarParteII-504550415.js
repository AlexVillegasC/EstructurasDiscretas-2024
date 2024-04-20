// Stack

class Stack
{
constructor()
{
    this.array = [];
}
Push(element)
{
    this.array.push(element);
    console.log(this.array);
}

Pop ()
{
    this.array.pop();
    console.log(this.array);
}

}
const stack =new Stack();
stack.Push(1);
stack.Push(2);
stack.Push(3);
stack.Pop();
