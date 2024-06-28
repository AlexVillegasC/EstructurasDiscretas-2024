// Función de búsqueda lineal
// function busquedaLineal(arr, elementoABuscar) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === elementoABuscar) {
//             return i; // Devuelve el índice del elemento encontrado
//         }
//     }
//     return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
// }

// // Ejemplo de uso de la función de búsqueda lineal
// let numerosLineal = [10, 20, 30, 40, 50];
// let resultadoLineal = busquedaLineal(numerosLineal, 30);
// console.log(resultadoLineal);

// if (resultadoLineal !== -1) {
//     console.log(`Elemento encontrado en el índice: ${resultadoLineal}`);
// } else {
//     console.log("Elemento no encontrado.");
// }

function busquedaBinaria(arr, elementoABuscar) {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (arr[medio] === elementoABuscar) {
            return medio; // Devuelve el índice del elemento encontrado
        } else if (arr[medio] < elementoABuscar) {
            izquierda = medio + 1; // Descarta la mitad izquierda
        } else {
            derecha = medio - 1; // Descarta la mitad derecha
        }
    }

    return -1; // Devuelve -1 si el elemento no se encuentra en el arreglo
}

// Ejemplo de uso de la función de búsqueda binaria
let numerosBinaria = [10, 20, 30, 40, 50, 52, 70, 75, 99]; // Asegúrate de que el arreglo esté ordenado
let resultadoBinaria = busquedaBinaria(numerosBinaria, 52);

if (resultadoBinaria !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultadoBinaria}`);
} else {
    console.log("Elemento no encontrado.");
}

 
 // Ejemplo de uso de la función de búsqueda binaria
 let numeros = [10, 20, 30, 40, 50, 52, 70, 75, 99]; // Asegúrate de que el arreglo esté ordenado
 let resultado = busquedaBinaria(numeros, 52);
 
 if (resultado !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultado}`);
 } else {
    console.log("Elemento no encontrado.");
 }
 
 // Clase Nodo de Árbol Binario
 class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
 }
 
 // Función auxiliar para crear un árbol binario simple
 function crearArbolBinario() {
    let raiz = new NodoArbol("A");
    raiz.izquierda = new NodoArbol("B");
    raiz.derecha = new NodoArbol("C");
    raiz.izquierda.izquierda = new NodoArbol("D");
    raiz.izquierda.derecha = new NodoArbol("E");
    raiz.derecha.izquierda = new NodoArbol("F");
    raiz.derecha.derecha = new NodoArbol("G");
    return raiz;
 }
 
 // Recorrido en preorden (Raíz, Izquierda, Derecha)
 function recorridoPreorden(nodo) {
    if (nodo !== null) {
        console.log(nodo.valor); // Visitar la raíz
        recorridoPreorden(nodo.izquierda); // Recorrer subárbol izquierdo
        recorridoPreorden(nodo.derecha); // Recorrer subárbol derecho
    }
 }
 
 // Recorrido en inorden (Izquierda, Raíz, Derecha)
 function recorridoInorden(nodo) {
    if (nodo !== null) {
        recorridoInorden(nodo.izquierda); // Recorrer subárbol izquierdo
        console.log(nodo.valor); // Visitar la raíz
        recorridoInorden(nodo.derecha); // Recorrer subárbol derecho
    }
 }
 
 // Recorrido en postorden (Izquierda, Derecha, Raíz)
 function recorridoPostorden(nodo) {
    if (nodo !== null) {
        recorridoPostorden(nodo.izquierda); // Recorrer subárbol izquierdo
        recorridoPostorden(nodo.derecha); // Recorrer subárbol derecho
        console.log(nodo.valor); // Visitar la raíz
    }
 }
 
 // Ejemplo de uso de los recorridos de árbol binario
 let raiz = crearArbolBinario();
 console.log("\n*----- Recorrido en preorden -----*");
 recorridoPreorden(raiz);
 console.log("\n*----- Recorrido en inorden -----*");
 recorridoInorden(raiz);
 console.log("\n*----- Recorrido en postorden -----*");
 recorridoPostorden(raiz);