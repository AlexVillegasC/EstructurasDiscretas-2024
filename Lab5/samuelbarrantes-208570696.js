// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada. 

const primerElemento = (arreglo) => {  // No se depende del tamaño de la entrada 
    return arreglo[0];                 // Ya que puede haber una cantidad grande de elementos dentro del arrgelo
  };                                   // Pero en este caso solo se esta buscando mostrar el 12, lo que hace que sea de o(1)  
  let marcadores = [12, 55, 67, 94, 22];
  console.log(primerElemento(marcadores)); // 12

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   
function busquedaBinaria(arreglo, elemento) {  // vi que busqueda binaria es un ejemplo muy quemado, pero sirve para entender
    let inicio = 0;
    let fin = arreglo.length - 1;            // los algoritmos de complejidad lograritmica como en este ejemplo,buscan emepezar por la mitad 
    let medio;

    while (inicio <= fin) {
        medio = Math.floor((inicio + fin) / 2); // con esta igualdad podremos encontrar el numero del medio del arreglo
                                                // ya que ejecuta con la mitad del tamaño de entrada y no completo
        if (arreglo[medio] === elemento) { //
            return medio; // Elemento encontrado
        } else if (arreglo[medio] < elemento) {
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return -1; // Elemento no encontrado
}
const numeros = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const resultado = busquedaBinaria(numeros, 9);
console.log(resultado); // Imprimirá 4, que es el índice del elemento 9 en el arreglo


// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   
// segun lo investigado es o(N) por ser un ciclo que recorra los numeros que nosotros le enviamos 
function  recorrido (n){
  for(element of n){
    console.log(element);
  }
}
let entrance = [11,12,13];
  recorrido(entrance);
  //11
  //12
  //13
// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proc-eso lineal con uno logarítmico. 

// Para este ejemplo utilicé una intelegencia Artificial como herramienta para poder generarlo
const mergeSort = arr => {  //toma el arreglo como argumento
  if (arr.length <= 1) return arr; // se compara para ver si es 1 o 0, si es así el arr estaría ordenado o vacío
  const mid = Math.floor(arr.length / 2);  // calcula el punto medio 
  const merge = (left, right) => { //ordena los arreglos 'left' y 'right' 
      let result = [], l = 0, r = 0;
      while (l < left.length && r < right.length)
          result.push(left[l] < right[r] ? left[l++] : right[r++]);
      return result.concat(left.slice(l)).concat(right.slice(r));
  };
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
};

const binarySearch = (arr, target) => {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) return mid;
      arr[mid] < target ? left = mid + 1 : right = mid - 1; 
  }
  return -1;
};

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const target = 25;

const sortedArr = mergeSort(arr);
const resultIndex = binarySearch(sortedArr, target);

console.log(resultIndex !== -1 ? `El elemento ${target} fue encontrado en el índice ${resultIndex}.` : `El elemento ${target} no fue encontrado en el arreglo.`);


// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.
function traverseMatrix(matrix){
  const rows = matrix.length;
  const columns = matrix[0].length;

  for(let i =0;i <rows;i++){
    for(let j=0;j<columns;j++){        // escogi el ejemplo de una matriz porque para mostrarla se necesitan dos for anidados
                                      // y en lo que envestigué una funcion con dos for, forma parte de O(N^2)

      console.log(matrix[i][j]);
    }
  }
}
let Matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
traverseMatrix(Matrix);
// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   
function fibonacci(n) { // leyendo descubrí que para explicar o(2^N) la sucesion de 
  //fibonacci es un buen ejemplo 
  if (n <= 1) {      
      return n;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2); // se realiza la recursiva para obtener el termino ´n´
      // de la serie 
    }
}
console.log(fibonacci(5)); // Devuelve 5

// 7. **O(N!) - Complejidad Factorial:** Una de las peores complejidades que existen ya que crece de una manera rapida 
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
function factorial(n) {
  if (n === 0) {  // si ´n´ es igual a 0, se va a retornnar un 1 
      return 1;
  } else {
      return n * factorial(n - 1);  // realiza la operacion recursiva 
  }
}
console.log(factorial(5)); // Devuelve 120
