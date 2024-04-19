// Queue

class Queue{
    constructor(){

        this.array =[]

    }

    Enqueue (element){ //Agrega un elemento al final de la cola
        this.array.push(element);
        console.log(this.array); 
    }

    DeQueue () { //Elimina y devuelve el primer elemento de la cola
         this.array.shift();
    } 

    printQueue()
    {
        console.log(this.array);
    }
}
const queue = new Queue();
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);
queue.DeQueue();
queue.printQueue();
