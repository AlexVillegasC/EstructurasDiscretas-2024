//Queue

let numeros 

class Queue 
{
    constructor()
    {
        this.array = [];
    }
    InQueue(element) {
        this.array.push(element)
      }
    OutQueue()
    {
        this.array.shift()
    }
    printQueue()
    {
        console.log(this.array);   
    }

}

let queue = new Queue();
queue.InQueue(1)
queue.InQueue(2)
queue.InQueue(3)
queue.InQueue(4)
queue.printQueue()
queue.OutQueue()
queue.printQueue()
queue.InQueue(734)
queue.printQueue()
queue.OutQueue()
queue.printQueue()