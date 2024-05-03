class Queue{

    constructor()
    {
        this.array = [];  //Inicializa cola con array vacío
    }
    
    EnQueue (element)
    {
        this.array.push(element);  //Agrega elemento al final de la cola
        console.log(this.array);
    }

    DeQueue (element)    
    {  
        this.array.shift();   //Elimina el primer elemento de la cola
    }
    
    printQueue()
    {
        console.log(this.array);   //Imprime estado actual
    }
    
}

const queue = new Queue();  //Instancia
console.log("---------- New elements ----------")
queue.EnQueue(50);
queue.EnQueue(60);
queue.EnQueue(70);

console.log("\n---------- Removing First Element ----------")
queue.DeQueue();

queue.printQueue();   //Imprime la cola actual


