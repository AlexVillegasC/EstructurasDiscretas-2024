// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.

const arrayO_1 = [1, 2, 3, 4, 5];

function getElementAtIndex(index) {
    return arrayO_1[index];
}

console.log("**O(1) - Complejidad Constante:**");
console.log(getElementAtIndex(0) + "\n"); // Imprime 1

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.   

function logn(n) {
    while(n > 1){
        n = Math.floor(n/2)
        console.log(n);
    }
}
console.log("**O(Log N) - Complejidad Logarítmica:**");
console.log(logn(8) + "\n"); // Imprime 3 (índice donde se encuentra el 7)


// 3. **O(N) - Complejidad Lineal:**
//    - Implementa un algoritmo que recorra cada elemento de la entrada una sola vez.   

const arrayO_N = [1, 2, 3, 4, 5, 6];
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("**O(N) - Complejidad Linial:**");
console.log(sumArray(arrayO_N) + "\n");

// 4. **O(N Log N) - Complejidad Log-Lineal:**
//    - Implementa un algoritmo que combine un proceso lineal con uno logarítmico.   

function nLogNFunc(n) {
    let y = n;
    while(n>1){
        n = Math.floor(n/2);
        for (let i = 1; i <= y; i++){
            console. log(i);
        }
    }
}
let anyNumber = 4;    
console.log("**O(N Log N) - Complejidad Log-Lineal:**");
console.log(nLogNFunc(anyNumber)+"\n");    

// 5. **O(N^2) - Complejidad Cuadrática:**
//    - Implementa un algoritmo donde el tiempo de ejecución es proporcional al cuadrado del tamaño de la entrada.

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("**O(N^2) - Complejidad Cuadrática:**");
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log( matriz[i][j] );
    }
}
console.log(" ");

// 6. **O(2^N) - Complejidad Exponencial:**
//    - Implementa un algoritmo que crezca exponencialmente con el tamaño de la entrada.   

function fib(n) {
    if(n === 0){
        return 0;
    }
    if(n === 1){
       return 1; 
    }
    return fib(n-1) + fib(n-2);
}
console.log("**O(2^N) - Complejidad Exponencial:**");
console.log(fib(7));
console.log(" ");

// 7. **O(N!) - Complejidad Factorial:**
//    - Implementa un algoritmo cuyo número de pasos crece factorialmente con el tamaño de la entrada.

function f(n){
    if(n === 0){
        console.log("***********");
        return
    }
    for (let i = 0; i < n; i++) {
        f(n-1);
    }
}
console.log("**O(N!) - Complejidad Factorial**");
f(4);