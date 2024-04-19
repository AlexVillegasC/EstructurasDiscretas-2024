// Queue

class Queue
{
    constructor()
    {
        this.array = [];
    }

    EnQueue(num) 
    {
        this.array.push(num);
    }

    DeQueue()
    {
        this.array.shift();
    }

    MostrarQueue()
    {
        this.array.forEach(element => { console.log(element) });
    }
};

const Cola = new Queue;

Cola.EnQueue(1);
Cola.EnQueue(2);
Cola.EnQueue(3);
Cola.EnQueue(4);
Cola.EnQueue(5);
Cola.EnQueue(6);
Cola.EnQueue(7);
Cola.EnQueue(8);
Cola.EnQueue(9);
Cola.EnQueue(10);
Cola.MostrarQueue();

console.log("< - - - - - - - - - - >");

Cola.DeQueue();
Cola.MostrarQueue();