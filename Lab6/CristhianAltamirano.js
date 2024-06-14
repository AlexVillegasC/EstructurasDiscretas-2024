class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Función auxiliar para crear un árbol binario
function crearArbolBinario() {
    let raiz = new NodoArbol(1);

    // Subárbol izquierdo
    raiz.izquierda = new NodoArbol(2);
    raiz.izquierda.izquierda = new NodoArbol(4);
    raiz.izquierda.derecha = new NodoArbol(5);
    raiz.izquierda.izquierda.izquierda = new NodoArbol(8);
    raiz.izquierda.izquierda.derecha = new NodoArbol(9);
    raiz.izquierda.derecha.izquierda = new NodoArbol(10);
    raiz.izquierda.derecha.derecha = new NodoArbol(11);

    // Subárbol derecho
    raiz.derecha = new NodoArbol(3);
    raiz.derecha.izquierda = new NodoArbol(6);
    raiz.derecha.derecha = new NodoArbol(7);
    raiz.derecha.izquierda.izquierda = new NodoArbol(12);
    raiz.derecha.izquierda.derecha = new NodoArbol(13);
    raiz.derecha.derecha.izquierda = new NodoArbol(14);

    return raiz;
}

// Recorrido preorden
function recorridoPreorden(nodo) {
    if (nodo !== null) {
        console.log(nodo.valor);
        recorridoPreorden(nodo.izquierda);
        recorridoPreorden(nodo.derecha);
    }
}

// Recorrido inorden
function recorridoInorden(nodo) {
    if (nodo !== null) {
        recorridoInorden(nodo.izquierda);
        console.log(nodo.valor);
        recorridoInorden(nodo.derecha);
    }
}

// Recorrido postorden
function recorridoPostorden(nodo) {
    if (nodo !== null) {
        recorridoPostorden(nodo.izquierda);
        recorridoPostorden(nodo.derecha);
        console.log(nodo.valor);
    }
}

// Recorrido por nivel
function recorridoPorNivel(raiz) {
    if (raiz === null) return;

    const cola = [raiz];

    while (cola.length > 0) {
        const nodo = cola.shift();
        console.log(nodo.valor);

        if (nodo.izquierda !== null) {
            cola.push(nodo.izquierda);
        }

        if (nodo.derecha !== null) {
            cola.push(nodo.derecha);
        }
    }
}

let arbol = crearArbolBinario();

/*
    Estructura del árbol binario:

                1
             /     \
            2       3
           / \     / \
          4   5   6   7
         / \   / \   / \
        8   9 10 11 12 13 14 

    Recorrido preorden: 1, 2, 4, 8, 9, 5, 10, 11, 3, 6, 12, 13, 7, 14
    Recorrido inorden: 8, 4, 9, 2, 10, 5, 11, 1, 12, 6, 13, 3, 14, 7
    Recorrido postorden: 8, 9, 4, 10, 11, 5, 2, 12, 13, 6, 14, 7, 3, 1
*/

console.log("Pre-order:");
recorridoPreorden(arbol);

console.log("In-order:");
recorridoInorden(arbol);

console.log("Post-order:");
recorridoPostorden(arbol);

console.log("Level-order:");
recorridoPorNivel(arbol);