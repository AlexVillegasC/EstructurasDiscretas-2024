class Stack 
{
    constructor() 
    {
      this.items = []; 
    }
  
    push(element) 
    {
      this.items.push(element);
    }
   
    peek() 
    {
      if (this.isEmpty()) {
        return "No se encontraron elementos en la pila";
      }
      return this.items[this.items.length - 1];
    }

    isEmpty() 
    {
        return this.items.length === 0;
    }

    display() {
      if (this.isEmpty()) {
        return "La pila está vacía";
      }
      return this.items.join(", ");
    }
  }
  
  const pila = new Stack();
  
  pila.push("Sandia");
  pila.push("Melon");
  pila.push("Piña");
  
  console.log("Elementos en la pila:", pila.display());
  