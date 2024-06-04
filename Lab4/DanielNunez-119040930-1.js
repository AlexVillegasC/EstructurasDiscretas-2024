// Clase Queue usando una implementación FIFO
class Queue {
    constructor() {
        this.array = [];
    }

    // Agregar un elemento al final de la cola
    Enqueue(element) {
        this.array.push(element);
    }

    // Eliminar el primer elemento de la cola
    Dequeue() {
        this.array.shift(); 
    }

    // Mostrar los dos primeros elementos de la cola
    printQueue() {
        console.log(this.array.slice(0, 2).join(', '));
    }
}

// Crear una cola y agregar tres números
const cola = new Queue();
cola.Enqueue(1);
cola.Enqueue(2);
cola.Enqueue(3);

// Eliminar el primer número
cola.Dequeue();

// Mostrar los dos primeros números
cola.printQueue(); // Output: 2, 3

