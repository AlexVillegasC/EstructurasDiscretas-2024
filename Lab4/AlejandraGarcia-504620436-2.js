class Stack {
    constructor() {
        this.array = [];
    }

    // Agregar un elemento al tope del stack
    push(element) {
        this.array.push(element);
    }

    // Remover y devolver el elemento en el tope del stack
    pop() {
        return this.array.pop();
    }

    // Ver el elemento en el tope del stack sin removerlo
    peek() {
        return this.array[this.array.length - 1];
    }

    // Verificar si el stack está vacío
    isEmpty() {
        return this.array.length === 0;
    }

    // Obtener el tamaño del stack
    size() {
        return this.array.length;
    }
}

// Ejemplo de uso
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.peek()); // Debería mostrar 3

console.log(myStack.pop()); // Debería mostrar 3
console.log(myStack.pop()); // Debería mostrar 2

console.log(myStack.size()); // Debería mostrar 1
console.log(myStack.isEmpty()); // Debería mostrar false
