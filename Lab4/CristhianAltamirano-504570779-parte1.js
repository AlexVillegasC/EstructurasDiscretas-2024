class Queue 
{
    constructor() 
    {
      this.array = []; // Arreglo para almacenar los elementos de la cola
    }
  
    // Método para agregar un elemento al final de la cola
    enqueue(element) 
    {
      this.array.push(element);
    }
  
    // Método para eliminar y devolver el primer elemento de la cola
    dequeue() 
    {
      if (this.isEmpty()) 
      {
        return "La cola está vacía";
      }
      return this.array.shift();
    }
  
    // Método para obtener el primer elemento de la cola sin eliminarlo
    front() {
      if (this.isEmpty()) 
      {
        return "La cola está vacía";
      }
      return this.array[0];
    }
  
    // Método para verificar si la cola está vacía
    isEmpty() 
    {
      return this.array.length === 0;
    }
  
    // Método para obtener el tamaño de la cola
    size() {
      return this.array.length;
    }
  
    // Método para mostrar todos los elementos de la cola
    display() {
      if (this.isEmpty()) 
      {
        return "La cola está vacía";
      }
      return this.array.join(", ");
    }
  
    // Método para modificar un elemento en la cola en una posición específica
    modify(index, newValue) 
    {
      if (index < 0 || index >= this.size()) 
      {
        return "Índice fuera de rango";
      }
      this.array[index] = newValue;
    }
  }
  
  // Ejemplo de uso de la cola
  const cola = new Queue(); // Crear una nueva cola
  
  // Agregar elementos a la cola
  cola.enqueue("Manzana");
  cola.enqueue("Plátano");
  cola.enqueue("Naranja");
  
  console.log("Elementos en la cola:", cola.display()); // Mostrar elementos en la cola
  
  // Quitar el primer elemento de la cola
  console.log("Elemento eliminado de la cola:", cola.dequeue());
  
  // Mostrar el primer elemento de la cola
  console.log("Primer elemento de la cola:", cola.front());
  
  // Modificar un elemento en la cola
  cola.modify(1, "Pera");
  console.log("Elementos en la cola después de modificar:", cola.display());
  