// // Operadores aritméticos
// // +
// // -
// // *
// // /

// // ¿Concatenar cadenas?
// // El operador + concatena strings de texto. Ejemplo: 
// let nombre = "Alex"; 
// let saludo = "Hola " + " "+ nombre;
// console.log(saludo); //  Mostrará: Hola Cosi! console.log es el método que muestra cadenas de texto en la consola.

// // Recuerda que las variables se declaran con let o const, así como let variable o const variable

// /* Bucles */
// for(let num = 0; num < 8; num++) {

// }

// // // Ejemplo, entenderás lo que hace esto:
// // for(let i = 0; i <= 100; i++) {
// //     if(i % 2 == 0){
// //         console.log(i + " " + ".");
// //     }
// // }
// // Función para verificar si un número es primo
// // function esPrimo(num) {
// //     // 0, 1 y los negativos no son primos
// //     if (num <= 1) {
// //         return false;
// //     }
// //     // Verificamos si num es divisible por algún número entre 2 y la raíz cuadrada de num
// //     for (let i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
// //         if (num % i === 0) {
// //             return false; // Si es divisible, no es primo
// //         }
// //     }
// //     return true; // Si no encontramos divisores, es primo
// // }

// // for(let i = 1; i <= 100; i++) {
// //     if (esPrimo(i)) {
// //         console.log(i); // Imprime el número primo
// //     }
// // }
// // Haz un programa que devuelva los números primos del 1 al 100:


// // Arrays
// let vacio = [];
// vacio.push("Nuevo elemento");
// console.log(vacio);

// // Array de numeros enteros
// let numeros = [10, 20, 30, 40, 50];
// console.log(numeros);

// // Array de Strings
// let frutas = ["manzana", "banana", "cereza", "durazno"];
// console.log(frutas);

// // Array mixto
// let mixto = [42, "texto", true, null];
// console.log(mixto);

// // Arrays en JavaScript, como verás, un array puede contener sub-arrays, 
// // de diferentes tipos de datos. Es una declaración simple
// let varExample = [[39,45,6], '5', 6, 0, true, 9, null];

// // Matriz
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log(matriz);

//   // Referencia Circular
// const a = [1, 2, 3];
// a.push(a);
// console.log(a);

//   // Este método imprime cada elemento del array "varExample", recorriendo también los subarrays.

// /* Una clase en JavaScript */
// class Gato {
//     constructor(nombre, edad) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     setNombre(nombre) {
//         this.nombre = nombre;
//     }

//     getNombre() {
//         return this.nombre;
//     }

//     setEdad(edad) {
//         this.edad = edad;
//     }

//     getEdad() {
//         return this.edad;
//     }

//     toString() {
//         return "Mi nombre es: " + this.getNombre() + "\n" + "Mi edad: " + this.getEdad();
//     }
// }

// // Se meten los objetos en un array
// let arrayG = [new Gato('Mina', 15), new Gato('Tama', 2), new Gato('Pantuflas', 4)];

// // JavaScript es muy accesible, mira:
// arrayG.forEach(function(gato) {
//     console.log(gato.toString());
// });

// Comienza aquí con los siguientes ejercicios.
// Crea una funcion EsPalindromo que reciva 2 cadenas de texto.
// Return true si la cadena es palindromo.
// Return false si la cadena no es palindromo.

// // Pruebas
// oso => TRUE
// aaa => TRUE
// "" => FALSE
// "   " => FALSE

function esPalindromo(phrase)
{


   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   phrase = phrase.toLowerCase().replace(/\s/g, '');

   // Revertir la cadena
    let splittedPhrase = phrase.split('');
    let revertedPhrase ='';
    
    // Recorrer el Array 'cadenaEnArray' desde el ultimo al primer elemento.
    // Almacenar el strintg revertido en la variable revertedString.
 
   // Comparar la cadena original con la revertida
   return phrase === revertedPhrase;
}


console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // falsee