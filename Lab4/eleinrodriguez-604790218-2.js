//stack

//last in first out

class Stack
{
    colors = [];

    enqueue()
    {
        this.colors.push("blue", "white", "purple");
    }

    dequeue()
    {

        console.log("last in is purple");
        console.log(this.colors);

        const firstin = this.colors.pop();

        console.log("first out is", firstin);
        console.log(this.colors);
    }
}

const stack = new Stack();

stack.enqueue();
console.log("\n\n");

stack.dequeue();