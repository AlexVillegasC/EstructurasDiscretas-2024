class Queue
{
    constructor()
    {
        this.Number = [4];        
    }

    EnQueue(element)
    {
        this.Number.push(element);
    }
    DeQueue()
    {
        this.Number.shift();
    }
    printQueue()
    {
        this.Number.forEach(element => {
            console.log(element);
            });
    }
}

const cola = new Queue();

console.log("Array comienza con el valor 4 y luego se agregan 1,2 y 3");
cola.EnQueue(1);
cola.EnQueue(2);
cola.EnQueue(3);

cola.printQueue();
console.log("Como es el metodo Queue, se elimina el primer numero agregado");
cola.DeQueue();
cola.printQueue();