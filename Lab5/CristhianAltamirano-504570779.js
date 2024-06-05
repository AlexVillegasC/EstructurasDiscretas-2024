//Ejemplo 0(1)
console.log("Ejemplo O(1)\n");
function obtenerPrimerElemento(arr) {
    // El tiempo de ejecución no depende del tamaño del arreglo
    // Siempre se ejecutará en una cantidad constante de pasos
    return arr[0];
  }

  //Ejemplo de uso.
    console.log("Obtener El Primer Elemento De [1, 2, 3, 4, 5]");
  console.log(obtenerPrimerElemento([1, 2, 3, 4, 5])); 

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(Log N)
console.log("Ejemplo O(Log N)\n");

function busquedaBinaria(arr, target) {
    // Ordenamos el arreglo primero
    arr.sort((a, b) => a - b);
  
    let izquierda = 0;
    let derecha = arr.length - 1;
  
    while (izquierda <= derecha) {
      const medio = Math.floor((izquierda + derecha) / 2);
  
      if (arr[medio] === target) {
        return medio; // Elemento encontrado
      } else if (arr[medio] < target) {
        izquierda = medio + 1; // Buscamos en la mitad derecha
      } else {
        derecha = medio - 1; // Buscamos en la mitad izquierda
      }
    }
  
    return -1; // Elemento no encontrado
  }

    // Ejemplo de uso.
    arr = [10, 22, 35, 44, 56, 67, 78, 89, 100];
    target = 44;

    console.log(arr);

    let indice = busquedaBinaria(arr, target);

    if (indice !== -1) {
        console.log(`Elemento ${target} encontrado en el índice ${indice}`);
      } else {
        console.log(`Elemento ${target} no encontrado`);
      }

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(N)
console.log("Ejemplo O(N)\n");

function sumaElementos(arr) {
    let suma = 0;
  
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
  
    return suma;
  }
  
  // Ejemplo de uso
  let array = [10, 20, 30, 40, 50];
  let sumaTotal = sumaElementos(array);

    console.log(array);
  
  console.log(`La suma total de los elementos es: ${sumaTotal}`);
  

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(N Log N)
console.log("Ejemplo O(N Log N)\n");

function mergeSort(arreglo) {
    if (arreglo.length <= 1) {
      return arreglo;
    }
  
    const mitad = Math.floor(arreglo.length / 2);
    const izquierda = arreglo.slice(0, mitad);
    const derecha = arreglo.slice(mitad);
  
    return merge(mergeSort(izquierda), mergeSort(derecha));
  }
  
  function merge(izquierda, derecha) {
    let resultado = [];
    let i = 0;
    let j = 0;
  
    while (i < izquierda.length && j < derecha.length) {
      if (izquierda[i] < derecha[j]) {
        resultado.push(izquierda[i++]);
      } else {
        resultado.push(derecha[j++]);
      }
    }
  
    return resultado.concat(izquierda.slice(i), derecha.slice(j));
  }

  // Ejemplo de uso
let arreglo = [5, 2, 4, 6, 1, 3];
let arrayOrdenado = mergeSort(arreglo);

console.log(`Array original: ${arreglo}`);

console.log(`Array ordenado: ${arrayOrdenado}`);

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(N^2)
console.log("Ejemplo O(N^2)\n");

function bubbleSort(arre) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arre[j] > arre[j + 1]) {
          // Intercambiar arr[j] y arr[j+1]
          [arre[j], arre[j + 1]] = [arre[j + 1], arre[j]];
        }
      }
    }
    return arre;
  }

    // Ejemplo de uso
    let arre = [64, 34, 25, 12, 22, 11, 90];
    console.log(`Array original: ${arre}`);

    let arregloOrdenado = bubbleSort(arre);

    console.log(`Array ordenado: ${arregloOrdenado}`);

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(2^N)                
console.log("Ejemplo O(2^N)\n");

function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }

    // Ejemplo de uso
    console.log("Fibonacci de 34:");
    console.log(fibonacci(34));

    console.log("\nOtro Ejemplo");

    function potenciaRecursiva(base, exponente) {
        if (exponente === 0) {
          return 1; // Caso base: exponente 0
        } else {
          return base * potenciaRecursiva(base, exponente - 1); // Llamada recursiva
        }
      }
      
      // Ejemplo de uso
      let base = 2;
      let exponente = 5;
      
      let resultado = potenciaRecursiva(base, exponente);
      
      console.log(`${base} elevado a la potencia ${exponente}: ${resultado}`);
      

console.log("\n---------------------------------------------------------------- \n");

//Ejemplo O(N!)
console.log("Ejemplo O(N!)\n");

function permutaciones(cadena) {
    if (cadena.length <= 1) {
      return [cadena];
    }
  
    let permutacionesAnteriores = permutaciones(cadena.slice(1));
    let primeraLetra = cadena[0];
    let resultado = [];
  
    for (let i = 0; i < permutacionesAnteriores.length; i++) {
      let permutacionActual = permutacionesAnteriores[i];
  
      for (let j = 0; j <= permutacionActual.length; j++) {
        let permutacion = permutacionActual.slice(0, j) + primeraLetra + permutacionActual.slice(j);
        resultado.push(permutacion);
      }
    }
  
    return resultado;
  }

    // Ejemplo de uso
    let cadena = "abc";
    let resultadoPermutaciones = permutaciones(cadena);
    
    console.log(`Permutaciones de ${cadena}:  ${resultadoPermutaciones}`);
