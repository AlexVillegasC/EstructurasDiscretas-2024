// Clase Stack para manejar una pila LIFO
class Stack {
    constructor() {
        this.array = [];
    }

    // Método para agregar un elemento en la parte superior de la pila
    push(element) {
        this.array.push(element);
    }

    // Método para eliminar y devolver el elemento en la parte superior de la pila
    pop() {
        return this.array.pop();
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.array.length === 0;
    }
}

// Función para revertir una cadena de texto utilizando una pila
function reverseString(str) {
    let stack = new Stack();
    let reversedStr = '';

    // Llenar la pila con los caracteres de la cadena
    for (let char of str) {
        stack.push(char);
    }

    // Construir la cadena revertida sacando los caracteres de la pila
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }

    return reversedStr;
}

// Ejemplo de uso: revertir una cadena de texto
console.log(reverseString("hello")); // Output: "olleh"

