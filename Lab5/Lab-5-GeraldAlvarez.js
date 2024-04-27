// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.  
{function sumaDe1a100() {
    const n = 100; 
    const suma = (n * (n + 1)) / 2; 
    return suma;
}

console.log(sumaDe1a100()); }

// 2. *O(Log N) - Complejidad Logarítmica:*
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   
{
function busquedaBinaria(arr, elemento) 
{
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);

        // Si encontramos el elemento en el medio
        if (arr[medio] === elemento) {
            return medio;
        }
        // Si el elemento está en la mitad derecha del arreglo
        else if (arr[medio] < elemento) {
            inicio = medio + 1;
        }
        // Si el elemento está en la mitad izquierda del arreglo
        else {
            fin = medio - 1;
        }
    }

    // Si no se encuentra el elemento
    return -1;
}

const arregloOrdenado = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const elementoBuscado = 16;

const indiceEncontrado = busquedaBinaria(arregloOrdenado, elementoBuscado);
if (indiceEncontrado !== -1) 
{
    console.log('El elemento ${elementoBuscado} se encuentra en el índice ${indiceEncontrado}');
} else 
{
    console.log('El elemento ${elementoBuscado} no se encuentra en el arreglo');
}
}
// 3. *O(N) - Complejidad Lineal:*
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   
{function encontrarMaximo(arreglo) {
    // inicializamos el maximo con el primer elemento del arreglo
    let maximo = arreglo[0];

    // recorremos cada elemento del arreglo una sola vez
    for (let i = 1; i < arreglo.length; i++) {
        // si el elemento actual es mayor que el maximo actual
        if (arreglo[i] > maximo) {
            // actualizamos el maximo
            maximo = arreglo[i];
        }
    }

    // devolvemos el valor maximo encontrado
    return maximo;
}

const miArreglo = [15, 3, 8, 21, 4, 7];
const maximoValor = encontrarMaximo(miArreglo);
console.log(`El valor máximo en el arreglo es: ${maximoValor}`);}

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.  
{function mergeSort(arr) {
    // Si el arreglo tiene un solo elemento o está vacío, ya está ordenado
    if (arr.length <= 1) {
        return arr;
    }

    // Encuentra el índice de la mitad del arreglo
    const middle = Math.floor(arr.length / 2);

    // Divide el arreglo en dos mitades
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    // Llama recursivamente a mergeSort en ambas mitades
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    // Combina las mitades ordenadas
    return merge(sortedLeft, sortedRight);
}

// Función para combinar dos mitades ordenadas
function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    // Combina los elementos de las dos mitades en orden
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Agrega los elementos restantes de left, si los hay
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Agrega los elementos restantes de right, si los hay
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}
}
// Ejemplo de uso
const arreglo = [38, 27, 43, 3, 9, 82, 10];
const arreglordenado = mergeSort(arreglo);
console.log(`El arreglo ordenado es: ${arreglordenado}`);
// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
{
    function bubbleSort(arr) {
        // Obtenemos el tamaño del arreglo
        const n = arr.length;
    
        // Recorremos el arreglo varias veces
        for (let i = 0; i < n - 1; i++) {
            // En cada iteración, recorremos el arreglo hasta el índice n - i - 1
            for (let j = 0; j < n - i - 1; j++) {
                // Si el elemento actual es mayor que el siguiente, intercambiamos los elementos
                if (arr[j] > arr[j + 1]) {
                    const temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    
        // Retornamos el arreglo ordenado
        return arr;
    }
    
    // Ejemplo de uso
    const arreglo = [64, 34, 25, 12, 22, 11, 90];
    const arregloOrdenado = bubbleSort(arreglo);
    console.log(`El arreglo ordenado es: ${arregloOrdenado}`);
    
}
{
    // 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   
function fibonacci(n) {
    // Caso base: Si n es 0 o 1, regresamos n
    if (n === 0 || n === 1) {
        return n;
    }

    // Llamamos recursivamente a la función para calcular los dos números anteriores de la secuencia
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Ejemplo de uso
const numero = 10;
const resultado = fibonacci(numero);
console.log(`El número ${numero} de la secuencia de Fibonacci es: ${resultado}`);

}
// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
{
    function permutar(arr) {
        // Inicializamos un array para almacenar todas las permutaciones
        const permutaciones = [];
        
        // Función recursiva para generar permutaciones
        function permutarRecursivamente(currentArr, currentPerm) {
            // Si la longitud de la permutación actual es igual a la longitud del arreglo original
            if (currentPerm.length === arr.length) {
                // Agregamos la permutación a la lista de permutaciones
                permutaciones.push([...currentPerm]);
                return;
            }
    
            // Iteramos a través de los elementos del arreglo
            for (let i = 0; i < currentArr.length; i++) {
                // Tomamos el elemento actual
                const element = currentArr[i];
                
                // Creamos una copia del arreglo actual sin el elemento seleccionado
                const remainingArr = currentArr.slice(0, i).concat(currentArr.slice(i + 1));
    
                // Añadimos el elemento seleccionado a la permutación actual
                currentPerm.push(element);
                
                // Llamamos recursivamente a la función con el arreglo restante y la permutación actualizada
                permutarRecursivamente(remainingArr, currentPerm);
                
                // Quitamos el último elemento añadido para retroceder en el proceso
                currentPerm.pop();
            }
        }
    
        // Iniciamos la recursión con el arreglo original y una permutación vacía
        permutarRecursivamente(arr, []);
    
        // Retornamos todas las permutaciones
        return permutaciones;
    }
    
    // Ejemplo de uso
    const arreglo = [1, 2, 3];
    const permutaciones = permutar(arreglo);
    console.log(`Todas las permutaciones posibles de ${arreglo} son:`);
    console.log(permutaciones);
    
}