//Stack

// Creamos una clase para representar la pila
class Stack {
    constructor() {
      this.items = []; // Inicializamos un array vacío
    }
  
    // Método para agregar un elemento a la pila
    push(element) {
      this.items.push(element);
    }
  
    // Método para eliminar y devolver el último elemento agregado a la pila
    pop() {
      if (this.items.length === 0) {
        return "Underflow"; // Si la pila está vacía
      }
      return this.items.pop();
    }
  
    // Método para obtener el último elemento agregado a la pila sin eliminarlo
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Método para verificar si la pila está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la pila
    size() {
      return this.items.length;
    }
  
    // Método para limpiar la pila
    clear() {
      this.items = [];
    }
  
    // Método para imprimir la pila
    print() {
      console.log(this.items.toString());
    }
  }
  
  // Ejemplo de uso de la pila
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Elementos de la pila:");
  stack.print(); 
  
  console.log("Último elemento agregado:");
  console.log(stack.peek());
  
  console.log("Eliminando el último elemento agregado:");
  console.log(stack.pop()); 
  
  console.log("Elementos de la pila después de la eliminación:");
  stack.print(); 