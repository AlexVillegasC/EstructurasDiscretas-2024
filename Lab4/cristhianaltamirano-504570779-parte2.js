class Stack {
    constructor() {
      this.array = []; // Arreglo para almacenar los elementos de la pila
    }
  
    // Método para agregar un elemento en la parte superior de la pila
    push(element) {
      this.array.push(element);
    }
  
    // Método para eliminar y devolver el elemento en la parte superior de la pila
    pop() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.array.pop();
    }
  
    // Método para obtener el elemento en la parte superior de la pila sin eliminarlo
    peek() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.array[this.array.length - 1];
    }
  
    // Método para verificar si la pila está vacía
    isEmpty() {
      return this.array.length === 0;
    }
  
    // Método para obtener el tamaño de la pila
    size() {
      return this.array.length;
    }
  
    // Método para mostrar todos los elementos de la pila
    display() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.array.join(", ");
    }
  
    // Método para modificar un elemento en la pila en una posición específica
    modify(index, newValue) {
      if (index < 0 || index >= this.size()) {
        return "Índice fuera de rango";
      }
      this.array[index] = newValue;
    }
  }
  
  // Ejemplo de uso de la pila
  const pila = new Stack(); // Crear una nueva pila
  
  // Agregar elementos a la pila
  pila.push("Libro 1");
  pila.push("Libro 2");
  pila.push("Libro 3");
  
  console.log("Elementos en la pila:", pila.display()); // Mostrar elementos en la pila
  
  // Quitar el elemento en la parte superior de la pila
  console.log("Elemento eliminado de la pila:", pila.pop());
  
  // Mostrar el elemento en la parte superior de la pila
  console.log("Elemento en la parte superior de la pila:", pila.peek());
  
  // Modificar un elemento en la pila
  pila.modify(1, "Nuevo Libro");
  console.log("Elementos en la pila después de modificar:", pila.display());