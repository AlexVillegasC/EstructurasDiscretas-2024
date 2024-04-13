//Queue

class Queue{
    array = []

    EnQueue(element) {
        this.array.push(element);
        console.log(this.array);
    }

    DeQueue(){
        this.array.shift();
        console.log(this.array);
      }
}

const myQueue = new Queue(); //instancia de la clase

//Agregar elementos
console.log("Agregando elementos....\n");
myQueue.EnQueue(5);
myQueue.EnQueue(23);
myQueue.EnQueue(3);
myQueue.EnQueue(71);
myQueue.EnQueue(4);

console.log("FIFO...")
myQueue.DeQueue();

//Este procedimiento se repite, hasta que la cola se acabe. Por demostracion, solo hice el procedimiento una vez. 
//Tomando en cuenta que aunque este saliendo un elemento, es posible que a su vez, entren mas procedimientos con segundos de diferencia..