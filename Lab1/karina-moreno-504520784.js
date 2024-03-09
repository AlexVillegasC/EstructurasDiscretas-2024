/*
operadores aritmeticos:     +       -       *       /
*/

let nombre = "Karina";
let saludo = "Hola" + ", " + nombre;

console.log(saludo);

// bucles
for (let i=0; i<=100; i++){
    if(i % 2 == 0){
        console.log(i + ".");
    }
}

//array
let vacio = [];
vacio.push("New");
console.log(vacio);

// numeros enteros
let numeros = [10,20,30,40,50];
console.log(numeros);

// texto
let frutas = ["manzana", "banana", "cereza"];
console.log(frutas);

// mixto
let mixto =[ "texto", true, null];
console.log(mixto);

// subArrays
let varExample = [[39,45,6],'5', 6, 0, true, 9, null];
console.log(varExample);

// matriz
let Matriz = [
    [1, 2, 3 ],
    [4, 5, 6 ],
    [7, 8, 9 ]
];
console.log(Matriz);

//clase en js
class Gato{
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
    
    toString(){
        return "Mi nombre es: " + this.getNombre()+ "\n" + "Mi edad: " + this.getEdad();
    }
}

//añadir datos a la clase
let arrayGato = [new Gato('Vivi',2), new Gato ('Sardy',5), new Gato ('Kai',5)];

//mostrar datos de clases
arrayGato.forEach(function(Gato) {
    console.log(Gato.toString());
});

//revertir, separar, eliminar espacios
function esPalindromo1(cadena){  
cadena = cadena.toLowerCase().replace(/\s /g, ""); 
    let reverted = cadena.split('').reverse().join('')
    
    return reverted == cadena;
}

console.log("\n Palindromo 1" )
console.log(esPalindromo1("ana"));
console.log(esPalindromo1("aleta"));

// sin .reverse
function esPalindromo2(phrase){  
    phrase = phrase.toLowerCase().replace(/ /g, ""); 
    
    let splittedPhrase = phrase.split("");

    let revertedPhrase = "";

    for (let i = splittedPhrase.length - 1; i >= 0; i--) {
        revertedPhrase += splittedPhrase[i]
    }
    
    return revertedPhrase == phrase;
}

console.log("\n Palindromo 2" )
console.log(esPalindromo2("oso"));
console.log(esPalindromo2("aleta"));