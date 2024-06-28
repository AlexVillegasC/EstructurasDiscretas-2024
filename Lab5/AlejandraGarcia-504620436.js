// 1. **O(1) - Complejidad Constante:**
function obtenerPrimer(arr) {
    if (arr.length === 0) {
      return null; 
    }
    return arr[0];
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(1).  



// 2. **O(Log N) - Complejidad Logarítmica:**
function complejidadLogaritmica(n) {
    if (n <= 1) {
      return;
    }
    complejidadLogaritmica(n / 2);
  } //En el mejor de los casos (cuando n es una potencia de 2), la complejidad de tiempo es O(log n). 
    //En el peor de los casos (cuando n no es una potencia de 2), la complejidad de tiempo sigue siendo O(log n).



// 3. **O(N) - Complejidad Lineal:**
function complejidadLineal(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(n), donde n es la longitud del array arr.




// 4. **O(N Log N) - Complejidad Log-Lineal:**
function complejidadLogLineal(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mitad = Math.floor(arr.length / 2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);
  
    return merge(complejidadLogLineal(izquierda), complejidadLogLineal(derecha));
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
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(n log n), donde n es la longitud del array arr.  




// 5. **O(N^2) - Complejidad Cuadrática:**
function complejidadCuadratica(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(`[${i}][${j}]`);
      }
    }
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(n^2), donde n es la longitud del array arr.




// 6. **O(2^N) - Complejidad Exponencial:**
function complejidadExponencial(n) {
    if (n === 0) {
      return 1;
    }
    return complejidadExponencial(n - 1) + complejidadExponencial(n - 1);
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(2^n).




// 7. **O(N!) - Complejidad Factorial:
function complejidadFactorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * complejidadFactorial(n - 1);
  } //Tanto en el mejor como en el peor de los casos, la complejidad de tiempo es O(n!).
