// Clase Nodo del Árbol
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

// Función auxiliar para crear un árbol binario simple con un nivel adicional de hijos
function crearArbolBinario() {
    let raiz = new NodoArbol("A");
    raiz.izquierda = new NodoArbol("B");
    raiz.derecha = new NodoArbol("C");
    raiz.izquierda.izquierda = new NodoArbol("D");
    raiz.izquierda.derecha = new NodoArbol("E");
    raiz.derecha.izquierda = new NodoArbol("F");
    raiz.derecha.derecha = new NodoArbol("G");
    raiz.izquierda.izquierda.izquierda = new NodoArbol("H");
    raiz.izquierda.izquierda.derecha = new NodoArbol("I");
    raiz.izquierda.derecha.izquierda = new NodoArbol("J");
    raiz.izquierda.derecha.derecha = new NodoArbol("K");
    raiz.derecha.izquierda.izquierda = new NodoArbol("L");
    raiz.derecha.izquierda.derecha = new NodoArbol("M");
    raiz.derecha.derecha.izquierda = new NodoArbol("N");
    raiz.derecha.derecha.derecha = new NodoArbol("O");
    return raiz;
}

// Recorrido Preorden (Raíz, Izquierda, Derecha)
function recorridoPreorden(nodo) {
    let resultado = [];
    if (nodo !== null) {
        resultado.push(nodo.valor); // Visitar la raíz
        resultado = resultado.concat(recorridoPreorden(nodo.izquierda)); // Recorrer subárbol izquierdo
        resultado = resultado.concat(recorridoPreorden(nodo.derecha)); // Recorrer subárbol derecho
    }
    return resultado;
}

// Recorrido Inorden (Izquierda, Raíz, Derecha)
function recorridoInorden(nodo) {
    let resultado = [];
    if (nodo !== null) {
        resultado = resultado.concat(recorridoInorden(nodo.izquierda)); // Recorrer subárbol izquierdo
        resultado.push(nodo.valor); // Visitar la raíz
        resultado = resultado.concat(recorridoInorden(nodo.derecha)); // Recorrer subárbol derecho
    }
    return resultado;
}

// Recorrido Postorden (Izquierda, Derecha, Raíz)
function recorridoPostorden(nodo) {
    let resultado = [];
    if (nodo !== null) {
        resultado = resultado.concat(recorridoPostorden(nodo.izquierda)); // Recorrer subárbol izquierdo
        resultado = resultado.concat(recorridoPostorden(nodo.derecha)); // Recorrer subárbol derecho
        resultado.push(nodo.valor); // Visitar la raíz
    }
    return resultado;
}

// Ejemplo de uso de las funciones de recorrido
let raiz = crearArbolBinario();
console.log("Recorrido Preorden:");
console.log(recorridoPreorden(raiz).join(' '));
console.log("Recorrido Inorden:");
console.log(recorridoInorden(raiz).join(' '));
console.log("Recorrido Postorden:");
console.log(recorridoPostorden(raiz).join(' '));
