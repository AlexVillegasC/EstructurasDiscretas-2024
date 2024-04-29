console.log("Complejidad Constante");
// 1. **O(1) - Complejidad Constante:**
//- Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, 
//sin importar el tamaño de la entrada. 

function ComplejidadConstante() {
    let arreglo = [10, 20, 30, 40, 50]; // Independientemente la entrada sola hace un paso
    let elementoEnPosicionTres = arreglo[3]; // En este caso buscará la posición 3 del arreglo
    return elementoEnPosicionTres; // Retornar el elemento encontrado
}

// Llamada a la función y asignación del resultado a una variable
 let resultado = ComplejidadConstante();

 console.log(resultado); // Esto imprimirá 40


 console.log("Complejidad Logarítmica");

// 2. **O(Log N) - Complejidad Logarítmica:**
//- Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   
function busquedaBinaria(arreglo, elemento) 
{
        let inicio = 0;
        let fin = arreglo.length - 1;
    
        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);
    
            // Si el elemento está en el medio, lo encontramos
            if (arreglo[medio] === elemento) {
                return medio;
            }
            // Si el elemento está en la mitad derecha, ajustamos el rango de búsqueda
            else if (arreglo[medio] < elemento) {
                inicio = medio + 1;
            }
            // Si el elemento está en la mitad izquierda, ajustamos el rango de búsqueda
            else {
                fin = medio - 1;
            }
        }
    
        // Si no se encuentra el elemento, retornamos -1
        return -1;
}


let arreglo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    let elementoBuscado = 12;
    let indice = busquedaBinaria(arreglo, elementoBuscado);
    
    if (indice !== -1) {
        console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indice}.`);
    } else {
        console.log(`El elemento ${elementoBuscado} no se encuentra en el arreglo.`);
    }
console.log("Complejidad lineal");


// 3. **O(N) - Complejidad Lineal:**
//- Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.
function algoritmoLineal(array) 
{
    for (let i = 0; i < array.length; i++) {
        // Realiza alguna operación con el elemento array[i]
        console.log(array[i]);
    }
}

// Ejemplo de uso:
const entrada = [1, 2, 3, 4, 5];
algoritmoLineal(entrada);

console.log("Complejidad Log-Lineal");


// 4. **O(N Log N) - Complejidad Log-Lineal:**
//- Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const medio = Math.floor(array.length / 2);
    const izquierda = mergeSort(array.slice(0, medio));
    const derecha = mergeSort(array.slice(medio));

    return merge(izquierda, derecha);
}

function merge(izquierda, derecha) {
    let resultado = [];
    let izqIndex = 0;
    let derIndex = 0;

    while (izqIndex < izquierda.length && derIndex < derecha.length) {
        if (izquierda[izqIndex] < derecha[derIndex]) {
            resultado.push(izquierda[izqIndex]);
            izqIndex++;
        } else {
            resultado.push(derecha[derIndex]);
            derIndex++;
        }
    }

    return resultado.concat(izquierda.slice(izqIndex)).concat(derecha.slice(derIndex));
}

// Ejemplo de uso:
const array = [5, 3, 8, 4, 2, 7, 1];
const arrayOrdenado = mergeSort(array);
console.log(arrayOrdenado);


console.log("Complejidad cuadratica");


// 5. **O(N^2) - Complejidad Cuadrática:**
//- Implementa un algoritmo donde el tiempo de ejecución es proporcional
// al cuadrado del tamaño de la entrada.

function selectionSort(Array) {
    const n = Array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (Array[j] < Array[minIndex]) {
                minIndex = j;
            }
        }
        // Intercambiar el elemento actual con el mínimo encontrado
        if (minIndex !== i) {
            let temp = Array[i];
            Array[i] = Array[minIndex];
            Array[minIndex] = temp;
        }
    }
    return Array;
}

// Ejemplo de uso:
const Array = [5, 3, 8, 4, 2, 7, 1];
const ArrayOrdenado = selectionSort(array);
console.log(ArrayOrdenado);

console.log("Complejidad Exponencial.");
// 6. **O(2^N) - Complejidad Exponencial:**
//- Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   
function generarSubconjuntos(conjunto) {
    const resultado = [];
    
    function generarRecursivo(subconjunto, indice) {
        if (indice === conjunto.length) {
            resultado.push(subconjunto);
            return;
        }
        // Incluir el elemento actual en el subconjunto
        generarRecursivo([...subconjunto, conjunto[indice]], indice + 1);
        // No incluir el elemento actual en el subconjunto
        generarRecursivo(subconjunto, indice + 1);
    }
    
    generarRecursivo([], 0);
    return resultado;
}

// Ejemplo de uso:
const conjunto = [1, 2, 3];
const subconjuntos = generarSubconjuntos(conjunto);
console.log(subconjuntos);

console.log("Complejidad Factorial");
// 7. **O(N!) - Complejidad Factorial:**
//- Implementa un algoritmo cuyo número de pasos crece factorialmente
// con el tamaño de la entrada.

function factorial(n) 
{
    if (n === 0) 
    {   
        return 1;
    } else 
    {
        return n * factorial(n - 1) 
    }
} 
    console.log(factorial(6))

