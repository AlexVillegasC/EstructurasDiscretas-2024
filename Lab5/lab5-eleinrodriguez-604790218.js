// 1. complejidad constante o(1)

const numeros = [1, 2, 3, 4, 5];

function getNumber(index) 
{
    return numeros[index];
}

console.log("---------- complejidad constante -----------");
console.log(getNumber(0) + "\n"); // Imprime 1

// 2. complejidad logaritmica o(log n) 

function logn(n) {
    while(n > 1){
        n = Math.floor(n/2)
        console.log(n);
    }
}
console.log("---------- complejidad logaritmica -----------");
console.log(logn(8) + "\n"); // Imprime 3 (índice donde se encuentra el 7)


// 3. complejidad lineal o(n)

const numbers = [1, 2, 3, 4, 5, 6];
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("---------- complejidad lineal -----------");
console.log(sumArray(numbers) + "\n");

// 4. complejidad log lineal o(n log n)

function nLogN(n) {
    let y = n;
    while(n>1){
        n = Math.floor(n/2);
        for (let i = 1; i <= y; i++){
            console. log(i);
        }
    }
}
let anyNumber = 2;    
console.log("---------- complejidad log lineal -----------");
console.log(nLogN(anyNumber)+"\n");    

// 5. complejidad cuadratica o(n^2)

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log("---------- complejidad cuadratica -----------");
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log( matriz[i][j] );
    }
}
console.log(" ");

// 6. complejidad exponencial o(2^N)

function fib(n) {
    if(n === 0){
        return 0;
    }
    if(n === 1){
       return 1; 
    }
    return fib(n-1) + fib(n-2);
}
console.log("---------- complejidad exponencial -----------");
console.log(fib(7));
console.log(" ");

// 7. complejidad factorial o(n!)

function f(n){
    if(n === 0){
        console.log("***********");
        return
    }
    for (let i = 0; i < n; i++) {
        f(n-1);
    }
}
console.log("---------- complejidad factorial -----------");
f(5);