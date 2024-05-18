// Definición del nodo del árbol binario
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Función para crear un árbol binario 
function crearArbolEjemplo() {
    /*
    ILUSTRACIÓN DEL ÁRBOL
             1
            / \
           2   3
         /      \
        4        5
    */
    let raiz = new Nodo(1);
    raiz.izquierda = new Nodo(2);
    raiz.derecha = new Nodo(3);
    raiz.izquierda.izquierda = new Nodo(4);
    raiz.izquierda.derecha = new Nodo(5);
    return raiz;
}

// Función para realizar el recorrido Pre-Order
function preOrder(nodo) {
    if (nodo) {
        console.log(nodo.valor); // Visita el nodo actual
        preOrder(nodo.izquierda); // Recorre el subárbol izquierdo
        preOrder(nodo.derecha); // Recorre el subárbol derecho
    }
}

// Función para realizar el recorrido In-Order
function inOrder(nodo) {
    if (nodo) {
        inOrder(nodo.izquierda); // Recorre el subárbol izquierdo
        console.log(nodo.valor); // Visita el nodo actual
        inOrder(nodo.derecha); // Recorre el subárbol derecho
    }
}

// Función para realizar el recorrido Post-Order
function postOrder(nodo) {
    if (nodo) {
        postOrder(nodo.izquierda); // Recorre el subárbol izquierdo
        postOrder(nodo.derecha); // Recorre el subárbol derecho
        console.log(nodo.valor); // Visita el nodo actual
    }
}

// Crear un árbol binario 
let raiz = crearArbolEjemplo();

console.log("\nRecorrido Pre-Order:");
preOrder(raiz);

console.log("\nRecorrido In-Order:");
inOrder(raiz);

console.log("\nRecorrido Post-Order:");
postOrder(raiz);