//Stack
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  // Ejemplo de uso:
  let stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log("Pila completa: ", stack.printStack());
  console.log("Elemento en la cima de la pila: ", stack.peek());
  console.log("Elemento removido de la pila: ", stack.pop());
  console.log("Pila después de remover un elemento: ", stack.printStack());