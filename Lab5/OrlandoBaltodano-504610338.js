
// 1) O(1) - Complejidad constante:
//Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.

function obtenerPrimerElemento(array) {
    return array[0]; //retorna el primer elemento
  }
  console.log("El primer elemento del array es: " + obtenerPrimerElemento([2,5,6,3,20,5]));
  console.log("Fin del algoritmo de complejidad constante")
  console.log("----------------------------------")


  // 2) O(Log N) - Complejidad Logarítmica:
  //Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.

  function busquedaBinaria(array, clave){ //la clave seria el indice del mumero que buscas
        let inicio = 0;
        let fin = array.length - 1;

        while (inicio <= fin)
        {
            //calculamos el medio del arreglo
            let medio = Math.floor((inicio + fin) / 2);
            //comparamos el medio con la clave
            if (array[medio] === clave)
            {
                return medio;
            } 
            //si el medio es menor que la clave entonces el inicio es igual al medio + 1
            else if (array[medio] < clave)
            {
                inicio = medio + 1;
            } else
            {
                fin = medio - 1;
            }
        }
        return -1; 
    }
  console.log("El numero que estas buscando es: " + busquedaBinaria([1,2,3,4,5],4))
  console.log("Fin del algoritmo de complejidad Logaritmica")
  console.log("----------------------------------")


  // 3) O(N) - Complejidad lineal:
  //Implementa un algoritmo que recorra cada elemento de la entrada una sola vez
 
  function encontrarMaximo(array) {
    //recorremos el arreglo y buscamos el numero maximo
    let maximo = array[0];
    for (let i = 1; i < array.length; i++) {
        //si el numero es mayor que el maximo entonces lo cambiamos por el nuevo numero maximo
      if (array[i] > maximo) {
        maximo = array[i];
      }
    }
    return maximo;
  }
  console.log("El numero maximo es: " + encontrarMaximo([2,4,60,8,10]))
  console.log("Fin del algoritmo de complejidad lineal")
  console.log("----------------------------------")
  
  // 4) O(N Log N) - Complejidad Log-Lineal:
  //Implementa un algoritmo que combine un proceso lineal con uno logarítmico.
  
  function QuickSort(array) {
    if (array.length <= 1) //En el caso base tenemos que si el arreglo esta vacio entonces devuelve el arreglo tal cual esta
    {
      return array;
    }
    const pivot = array[0]; //escogemos como el pivot el numero de la primera posicion
    const izquierda = [];
    const derecha = [];
    //recorremos el arreglo y separamos los numeros en la izquierda y la derecha
    for (let i = 1; i < array.length; i++) 
    {
        //si el numero es menor que el pivot se agrega a la izquierda y si no se agrega a la derecha
      if (array[i] < pivot) {
        izquierda.push(array[i]);
      } else {
        derecha.push(array[i]);
      }
    }
    //llamamos recursivamente a la funcion para ordenar la izquierda y la derecha
    return [...QuickSort(izquierda), pivot, ...QuickSort(derecha)];
  }
  console.log("El arreglo ordenado se ve así: ["+ QuickSort([5,13,43,872,3,13,23])+"]")
  console.log("Fin del algoritmo de complejidad Log-Lineal")
  console.log("----------------------------------")
  
  // 5) O(N^2) - Complejidad cuadrática:
  //Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

  function Bubble(array) {

    let n = array.length;

    for (let i = 0; i < n; i++)
    {

      for (let j = 0; j < n - i - 1; j++) 
      {
        //si el numero de la posicion j es mayor que el numero de la posicion j + 1 entonces intercambiamos los numeros
        if (array[j] > array[j + 1])
        {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  console.log("El arreglo ordenado se ve así: ["+ Bubble([4,3,2,5,213,54,32,54,23,233])+"]")
  console.log("Fin del algoritmo de complejidad cuadratica")
  console.log("----------------------------------")
  
  // 6) O(2^N) - Complejidad Exponencial:
  //Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.
  function fibonacci(n) {

    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  console.log("El numero de fibonacci es: " + fibonacci(5))
  console.log("Fin del algoritmo de complejidad Exponencial")
  console.log("----------------------------------")
  
  // 7) O(N!) - Complejidad Factorial:
  //Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.
  function permutaciones(array) {
   
    const resultados = [];
   
    function permutar(arr, memo = []) {
        //si el arreglo esta vacio entonces agregamos el arreglo a la lista de resultados
      if (arr.length === 0) {
        resultados.push(memo);
      } else {
        //si el arreglo no esta vacio entonces recorremos el arreglo y agregamos el numero a la lista de permutaciones
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          //llamamos recursivamente a la funcion permutar y le pasamos el arreglo sin el numero que se agrego a la lista de permutaciones
          permutar(curr.slice(), memo.concat(next));
       }
     }
   }
   permutar(array);
   return resultados;
  }
  console.log(permutaciones([1,2,3]))
  console.log("Fin del algoritmo de complejidad Factorial")
  console.log("----------------------------------")