// 1.[ O(1) ] - Complejidad Constante:
console.log('Complejidad Constante')

const animales = ["gato", "perro", "oso", "panda", "caballo"]
// se mostrara el primer elemento de la lista, por lo que este ejemplo solo requiere de una iteracion
const mostrarAnimales = items => {
  console.log(items[0])
}

mostrarAnimales(animales)

// 2. [ O(Log N) ] - Complejidad Logarítmica:
console.log('Complejidad Logaritmica')

const frutas = ["manzana", "banana", "cereza", "dresa", "uva"];

function buscarFruta(nombre, array) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);         // se divide el espacio de búsqueda a la mitad
        const frutaActual = array[mid];

        if (frutaActual === nombre) {
            return `se ha encontrado la fruta "${nombre}" en la posición ${mid}!`;
        } else if (frutaActual < nombre) {
            left = mid + 1; // busca por la mitad derecha
        } else {
            right = mid - 1; // busca por la mitad izquierda
        }
    }

    return `la fruta "${nombre}" no esta en la lista.`;
}

const frutaBuscada = "cereza";
console.log(buscarFruta(frutaBuscada, frutas));


// 3. [ O(N) ] - Complejidad Lineal:
console.log('Complejidad Lineal')

function sumaArray(arrayLineal) {
    let suma = 0;
    for (let i = 0; i < arrayLineal.length; i++) {
        suma += arrayLineal[i];
    }
    return suma;
}

// en este ejempplo, N es la cantidad de elementos en el arreglo
// por lo que la cantidad de iteraciones depende de la cantidad de elementos en el arreglo

const lineal = [16, 4, 7, 2, 6];
const resultado = sumaArray(lineal);

console.log(`La suma es: ${resultado}`);


// 4. [ O(N Log N) ] - Complejidad Log-Lineal:
console.log('Complejidad Log-Lineal')

function busquedaBinaria(arr, elemento) {
    let inicio = 0;
    let fin = arr.length - 1;

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (arr[medio] === elemento) {
            return medio; // elemento encontrado
        } else if (arr[medio] < elemento) {
            inicio = medio + 1; // el elemento está en la mitad derecha
        } else {
            fin = medio - 1; // el elemento está en la mitad izquierda
        }
    }

    return -1; // Elemento no encontrado
}

const arregloOrdenado = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const indice = busquedaBinaria(arregloOrdenado, 9);
console.log("el elemento 9 se encuentra en el índice:", indice);


// 5. [ O(N^2) ] - Complejidad Cuadrática:
console.log('Complejidad Cuadrática')
function findPairsWithSum(arr, num) {
    const pairs = [];
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === num) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Ejemplo de uso
const arr = [2, 4, 3, 5, 7, 8, 9];
const num = 7;
const result = findPairsWithSum(arr, targetSum);
console.log("Pares con suma igual a", targetSum, ":", result);



// 6. [ O(2^N) ] - Complejidad Exponencial:

console.log('Complejidad Exponencial')

function generarCombinaciones(elementos) {
    const n = elementos.length;
    const totalCombinaciones = 2 ** n;

    for (let i = 0; i < totalCombinaciones; i++) {
        const combinacion = [];
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                combinacion.push(elementos[j]);
            }
        }
        console.log(combinacion);
    }
}

const exponencialEjemplo = [1, 2, 3];
generarCombinaciones(exponencialEjemplo);



// 7. **O(N!) - Complejidad Factorial:**

console.log('Complejidad Factorial')

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const numero = 4;
const res = factorial(numero);
console.log("El factorial de", numero, "es:", res);
