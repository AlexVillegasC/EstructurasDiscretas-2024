//Queue
//First In
//First Out

// Definir la clase Queue
class Queue {
    constructor() {
      this.element = [];
    }
  
    // Agregar un elemento al final de la cola
    enqueue(element) {
      this.elements.push(element);
    }
  
    // Eliminar y devolver el primer elemento de la cola
    dequeue() {
      return this.elements.shift();
    }
  
    // Obtener el primer elemento de la cola sin eliminarlo
    peek() {
      return this.elements[0];
    }
  
    // Obtener el tamaño de la cola
    size() {
      return this.elements.length;
    }
  
    // Verificar si la cola está vacía
    isEmpty() {
      return this.elements.length === 0;
    }
  }
  
  // Ejemplo de uso
  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log(myQueue.dequeue()); 
  console.log(myQueue.size());    
  console.log(myQueue.peek());    
  console.log(myQueue.isEmpty()); 