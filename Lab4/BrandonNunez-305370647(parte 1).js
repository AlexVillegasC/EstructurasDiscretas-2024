class Queue {
    constructor() {                  
        this.array = [];
    }
    
    EnQueue(element) {               // Agrega un elemento al final de la cola
        this.array.push(element);
        console.log(this.array);    
    }

    DeQueue() {                      //Elimina el primer elemento de la cola
        this.array.shift();
    }

    printOut() {                   //Muestra 
        console.log(this.array);
    }
}

const queue = new Queue();          // instancia 

queue.EnQueue(5);
queue.EnQueue(36);                
queue.EnQueue(100);

queue.DeQueue();                   

queue.printOut();                // Mostrar la cola actual
