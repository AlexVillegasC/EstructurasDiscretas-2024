// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada. 
function obtenerValorConstante() {
    return 10; // Siempre se retorna el mismo valor
  }
  
  console.log(obtenerValorConstante()); // Imprime: 10
  

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso. 
function busquedaBinaria(array, elemento) {
    let inicio = 0;
    let fin = array.length - 1;
  
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2);
      if (array[medio] === elemento) {
        return medio;
      } else if (array[medio] < elemento) {
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1; // Elemento no encontrado
  }
  
  let array = [1, 3, 5, 7, 9, 12, 16, 19, 22];
  let elementoABuscar = 16;
  
  let indice = busquedaBinaria(array, elementoABuscar);
  
  if (indice !== -1) {
    console.log("Elemento encontrado en el índice:", indice);
  } else {
    console.log("Elemento no encontrado");
  }
  

// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.  
function sumarElementos(array) {
    let suma = 0;
    for (let elemento of array) {
      suma += elemento;
    }
    return suma;
  }
  
  let array = [1, 2, 3, 4, 5];
  let sumaTotal = sumarElementos(array);
  console.log("Suma total del array:", sumaTotal); // Imprime: 15
  

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   
function ordenacionCombinacion(array) {
    if (array.length <= 1) {
      return array; // Caso base: array ya ordenado
    }
  
    let mitad = Math.floor(array.length / 2);
    let izquierda = ordenacionCombinacion(array.slice(0, mitad));
    let derecha = ordenacionCombinacion(array.slice(mitad));
  
    return combinarArraysOrdenados(izquierda, derecha);
  }
  
  function combinarArraysOrdenados(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < izquierda.length && j < derecha.length) {
      if (izquierda[i] <= derecha[j]) {
        resultado.push(izquierda[i]);
        i++;
      } else {
        resultado.push(derecha[j]);
        j++;
      }
    }
  
    return resultado.concat(izquierda.slice(i)).concat(derecha.slice(j));
  }
  
  let array = [5, 2, 4, 6, 1, 3];
  let arrayOrdenado = ordenacionCombinacion(array);
  console.log("Array ordenado:", arrayOrdenado); // Imprime: [1, 2, 3, 4, 5, 6]
  

// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
function encontrarParejasSuma(array, objetivo) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === objetivo) {
          pares.push([array[i], array[j]]);
        }
      }
    }
    return pares;
  }
  
  let array = [1, 6, 4, 5, 2, 3];
  let objetivo = 7;
  
  let paresEncontrados = encontrarParejasSuma(array, objetivo);
  console.log("Pares que suman", objetivo, ":", paresEncontrados); // Imprime: [[1, 6], [2, 5]]
  

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   
function generarSubconjuntosPotencia(array) {
    let subconjuntos = [];
    let longitud = array.length;
  
    // Recorrer todas las posibles máscaras de bits
    for (let mascara = 0; mascara < (1 << longitud); mascara++) {
      let subconjuntoActual = [];
      for (let i = 0; i < longitud; i++) {
        // Comprobar si el bit i está encendido en la máscara
        if ((mascara & (1 << i)) !== 0) {
          subconjuntoActual.push(array[i]);
        }
      }
      subconjuntos.push(subconjuntoActual);
    }
  
    return subconjuntos;
  }
  
  let array = [1, 2, 3];
  let subconjuntosPotencia = generarSubconjuntosPotencia(array);
  console.log("Subconjuntos de potencia:", subconjuntosPotencia);
  // Imprime: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
  

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
//Todos en el peor de los casos: 0(n^2)
//Todos en el mejor de los casos: 0nlogn
function permutacionesRecursivas(array) {
    let permutaciones = [];
  
    if (array.length === 0) {
      return [[]]; // Caso base: array vacío, una permutación
    }
  
    for (let i = 0; i < array.length; i++) {
      let elementoActual = array[i];
      // Obtener permutaciones del subconjunto restante
      let permutacionesRestantes = permutacionesRecursivas(array.slice(0, i).concat(array.slice(i + 1)));
  
      for (let permutacion of permutacionesRestantes) {
        permutaciones.push([elementoActual].concat(permutacion));
      }
    }
  
    return permutaciones;
  }
  
  let array = [1, 2, 3];
  let permutaciones = permutacionesRecursivas(array);
  console.log("Permutaciones de:", array, ":", permutaciones);
  // Imprime: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
