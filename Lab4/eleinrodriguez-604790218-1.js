//queue

//first in first out

class Queue
{

    colors = [];

    enqueue()
    {
        this.colors.push("blue", "white", "purple");
    }

    dequeue()
    {
        console.log("first in is blue");
        console.log(this.colors);

        const firstout = this.colors.shift();

        console.log("first out is", firstout);
        console.log(this.colors);
    }
    

}

const queue = new Queue();

queue.enqueue();
console.log("\n\n");

queue.dequeue();