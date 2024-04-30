class Queue{

    constructor()
    {
        this.array = [];
    }
    
    EnQueue (element)
    {
        this.array.push(element);
        console.log(this.array);
    }

    DeQueue (element)
    {
        this.array.shift();
    }
    printQueue()
    {
        console.log(this.array);
    }
}

const queue = new Queue();
queue.EnQueue(20);
queue.EnQueue(10);
queue.EnQueue(30);

queue.DeQueue();

queue.printQueue();


