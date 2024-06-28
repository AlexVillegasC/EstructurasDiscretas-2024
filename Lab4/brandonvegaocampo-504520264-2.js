class stack {

    constructor() {
        this.stack = []

    }

    push(element) {

        this.stack.push(element); // Agrega un elemento al final de la pila

    }
  
    pop() {

        if (this.isEmpty()) {

           "Stack is empty"; 

        }

        this.stack.pop(); // Elimina el primer elemento de la pila y lo devuelve
    }
  
    peek() {

        if (this.isEmpty()) {

           "Stack is empty";

        }

        this.stack[this.stack.length - 1]; // Obtiene el ultimo elemento de la pila sin eliminarlo
    }
  
    printStack() {

        let str = "";

        for (let i = 0; i < this.stack.length; i++) { // Imprime la pila

          str += this.stack[i] + " ";

        }
    }
}

let stack = new Stack();

stack.push(4);
stack.push(1);
stack.push(7);

console.log("Elementos de la pila:" + stack.print());

  
console.log("Último elemento agregado:" + console.log(stack.peek()));

  
console.log("Eliminando el último elemento agregado:" + console.log(stack.pop()));