// Queue


// FIRST IN
// FIRST OUT
class Queue{

    constructor()
    {
        this.array = [];
    }

    Enqueue(element)
    {
        this.array.push(element);
    }

   Dequeue()
   {
       this.array.shift(); 
   }

   printQueue()
   {
        this.array.forEach(element => {
            console.log(element);
        });
   }
}

const cola = new Queue();
cola.Enqueue(1);
cola.Enqueue(2);
cola.Enqueue(3);

cola.Dequeue();

cola.printQueue();