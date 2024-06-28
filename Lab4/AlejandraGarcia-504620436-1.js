class Queue {

    constructor(){
        this.array = [];
    }

    EnQueue(element){               //Agrega un elmento a la cola
        this.array.push(element)
    }

    DeQueue()
    {                               //Remover y devolver el primer elemento de la cola
        return this.array.shift();
    }

    printQueue(){
        this.array.forEach(element => {
            console.log(element)
        })
    }

}


const myQueue = new Queue();

myQueue.EnQueue(9);
myQueue.EnQueue(8);
myQueue.EnQueue(5);

myQueue.DeQueue();

myQueue.printQueue();