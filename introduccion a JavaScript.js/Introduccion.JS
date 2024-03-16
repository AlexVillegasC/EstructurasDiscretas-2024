//Operadores aritmeticos 

//Contatenar cadenas
//El operador + concatena strings de texto. Ejemplo:
let nombre = "Ariana";
let saludo = "Hola" + "" + nombre;

//Recuerda que las variables se declaran con let o const, asi como let

//Bucles
for(let num = 0; num < 8; num ++){

}

//Ejemplo, entenderas lo que hace esto;
for(let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i + " " + "." );
    }
}

/*Haz un programa que devuelva los numeros primos del 1 al 100
for(let i = 1; i<= 100; i++) {
    if(i % 2 != 0) {
        console.log(i + "" + ".");
    }
}*/


//Arrays
let vacio = [];
vacio.push("Nuevo elemento");
console.log(vacio);

//Array de numeros enteros
let numeros = [10, 20, 30, 40, 50];
console.log(numeros);

//Array de Strings
let frutas = ["manzana", "banana", "cereza", "durazno"];
console.log(frutas);

//Array mixto
let mixto = [42, "texto", true, null];
console.log(mixto);

//Arrays en JavaScript, como verás, un array puede contener sub-arrays
//de diferentes tipos de datos. Es una declaracion simple
let verExample = [[39, 45, 6], '5', 6, 0, true, 9, null];
console.log(verExample);

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

//Este metodo imprime cada elemento del array "verExample", recorriendo ta

//Una clase en JavaScript
class Gato{
constructor (nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

setNombre(nombre) {
    this.nombre = nombre;
}

getNombre(nombre) {
    return this.nombre;
}

setEdad(edad) {
    this.edad = edad;
}

getEdad(edad) {
    return this.edad;
}
}
function toString() {
    return "Mi nombre es: " + this.getNombre() + "\n" + "Mie edad: " + this.getEdad();
}

//Se meten los objetos en un array
let arrayG = [new Gato('Mina', 4), new Gato('sol', 18)]


arrayG.forEach(function (Gato) {
    console.log(arrayG);
});

//Comienza aqui con los siguientes ejercicios.
//Crea una funcion EsPalindromo que reciba 2 cadenas de texto.
//Return true si la cadena es oalindromo.
//Return false si la cadena no es palindromo.

//Preubas
//Oso => True
//aaa => True
//"" => False
//"   " => False
//console.log(esPalindomo("Anita lava la tina")); // true
//console.log(esPalindromo("Hola mundo")); // False

f/*unction esPalindromo(cadena) {
    cadena = cadena.tolowerCase(); //Hacer todo minuscula.
    cadena = cadena.replace(/\s/g, ''); // remover characteres en blanco
    cadena = cadena.split(''); // revertir la cadena
}*/
function esPalindromo(phrase)
{
    phrase = phrase.toLowerCase(); //hacer minuscula

    phrase= phrase.replace(/[^a-zA-Z]/g, ''); //elimina los caracteres no alfanuméricos
    let cadenaOriginal = phrase;
    //refvertir la cadena y la sepera para concatenear los caracteres para devolverlos
    
    let revertedString = phrase.split('').reverse().join('');

    //coomparar la cadena original con la revertida
    return revertedString === cadenaOriginal;
}

console.log(esPalindromo("Anita lava la tina")); //true
console.log(esPalindromo("Hola mundo")); //false
console.log(esPalindromo("A man, a plan a canal, Panama!")) //true
console.log(esPalindromo("aaaa")) //true


let Splittedphrase = phrase.split("");
let revertedphrase = "";

for (let i = Splittedphrase.length - 1; i >= 0; i--)
{    
    revertedphrase += Splittedphrase[i];
}
    return phrase === revertedphrase;
