/*Operadores aritmeticos
*
/
+
-

//Concatenar cadenas?
//E l operador + concatena strings de texto ejemplo:
let nombre = "Jose";
let saludo = "Hola" + " "+ nombre;
console.log(saludo); // Mostrar nombre

//Bucles
for (let num = 0; num < 8; num++) 
{
    
}

//Ejemplo de bucle
for (let i = 0; i <=100; i++) {
    if (i % 2 == 0) {
        console.log(i + "  " + ".");
    }
    
}*/

//Programa que devuelve los numeros primos del 1 al 100

for (let i = 2; i <= 100; i++) {
    let Primo = true;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            Primo = false;
            break;
        }
    }
    if (Primo) {
        console.log(i);
    }
}

//Arrays
let vacio = [];
vacio.push("Nuevo elemento");
console.log(vacio);

//Array de numeros enteros
let numeros = [10, 20, 30, 40, 50];
console.log(numeros);

//Array de strings
let frutas = ["manzana", "banana", "cereza", "durazno"];
console.log(frutas);

//Array mixto
let mixto = [42, "texto", true, null];
console.log(mixto);

//Arrays en JavaScript como veras un array puede contener sub-arrays, de diferentes tipos de datos. Es una declaracion simple
let varExample = [[39, 45, 6], '5', 6, 0, true, 9, null];

//Matriz 
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz);

//Referencia circular 
const a = [1, 2, 3];
a.push(a);
console.log(a);

//Clase en java script
class Gato {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setEdad(edad){
        this.edad = edad;
    }

    getEdad(){
        return this.edad;
    }

    toString() {
        return "Mi nombre es: " + this.getNombre() + "\n" + "Mi edad: " + this.getEdad();
    }

}

 //Se meten los objetos en un array
 let arrayG = [new Gato('Mina', 15), new Gato('Tama', 2), new Gato('Pantunflas', 4)];

 //JavaScript es muy accesible
 arrayG.forEach(function(gato) {
    console.log(gato.toString());
 });


function esPalindromo(phrase) //Hacer todo minuscula
{
    // Hacer todo minuscula
    //remover characters en blanco
    phrase = phrase.toLowerCase();
    phrase = phrase.replace(/\s/g, '');
    // revertir la cadena 
    let splittedPhrase = phrase.split('');
    let revertedPhrase = '';
    // comparar la cadena original con la revertida
    for (let i = splittedPhrase.length-1; i >= 0; i--) {
        revertedPhrase += splittedPhrase[i];
    }

    if(revertedPhrase == phrase){
        return true;
    }
    else
    {
        return false;
    }
}

console.log(esPalindromo("Anita lava la tina"));//true
console.log(esPalindromo("Hola mundo")); //false
 