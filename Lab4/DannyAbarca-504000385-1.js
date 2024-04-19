class Queue 
{
    constructor() 
    {
      this.array = []; 
    }
  
    enqueue(element) 
    {
      this.array.push(element);
    }
  
    dequeue() 
    {
      return this.array.shift();
    }

    
    front() 
    {
      if (this.isEmpty()) 
      {
        return "Actualmente no se encuentran elementos en la cola";
      }
      return this.array[0];
    }

    isEmpty() 
    {
      return this.array.length === 0;
    }

    size() 
    {
        return this.array.length;
    }

    display() 
    {
      if (this.isEmpty()) 
      {
        return "La cola está vacía";
      }
      return this.array.join(", ");
    }
    
  }

  const cola = new Queue(); 
  
  // Agregar elementos a la cola
  cola.enqueue(1);
  cola.enqueue(2);
  cola.enqueue(3);
  
  console.log("Elementos en la cola:", cola.display()); 
