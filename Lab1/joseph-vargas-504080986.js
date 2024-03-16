 //Como concatenar cadenas?
 let nombre = "Alex";
 let saludo = "Hola" +  " " + nombre;
 console.log(saludo);

 //ejemplo para hacer un for
  for(let num = 0; num<0 ; num++)
  {

  }

  //Muestr los numeros pares
 for(let i = 0; i<=100; i++)
 {
    if(i % 2 == 0)
    {
        console.log(i + " " + ".")
    }
 }

 //Muestra los numeros primos
 for(let i = 0; i<=100; i++)
 {
   if(i % 2 != 0)
    {
        console.log(i + " " + ".")
    }
 }

 //Arrays
 let vacio = [];
 vacio.push("Nuevo elemento");
 console.log(vacio);

 //Array de numeros enteros
 let numeros = [10,20,30,40,50];
console.log(numeros);

//Array strings
let frutas = ["manzana", "banana", "cereza", "durazno"];
console.log(frutas);

//Array mixto
let mixto = [42, "texto", true, null];
console.log(mixto);

//Arrays en javascript, puede contener sub-arrays, 
//de diferentes tipo s de datos. Es una declaracion simple

let varExample = [[39, 45,6],'s',6,0,true,9,null];

//matriz
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz);

//Referencia circular
const a = [1,2,3];
a.push(a);
console.log(a);

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
    toString(){
        return "Mi nombre es: " + this.getNombre() + "\n" + "Mi edad: " + this.getEdad();
    }
}

//se meten los objetos en un array
let arrayG = [new Gato('Mina',15),new Gato('Tama',2),new Gato('Pantuflas',4)];

//java muy accesible, mira
arrayG.forEach(function(gato){
    console.log(gato.toString());
});

function esPalindromo(phrase)
{
    // texto = texto.toLowerCase(); //hacer todo minuscula
    // //remover caracteres en blanco
    // texto = texto.replace(/\s/g,'');
    //forma buscada por mi para remover caracter en blanco

    //revertir la cadena

  //forma de dereck  
    //let splittedPhrase = texto.split(''); //Divide la palabra en letras
    //splittedPhrase = splittedPhrase.reverse();  //Les da vuelta
   // splittedPhrase = splittedPhrase.join('');
//    if(splittedPhrase == texto)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
    
    //forma del profe
    phrase = phrase.toLowerCase().replace(/\s/g, '');
    let splittedPhrase = phrase.split('');
    let revertedPhrase = '';

  

    for(let i = splittedPhrase.length - 1; i >= 0; i--)
    {
        revertedPhrase += splittedPhrase[i];
    }

    //revertedPhrase = revertedPhrase.split('');

    // return revertedPhrase === revertedPhrase;
     
    if(revertedPhrase == phrase)
    {
        return true;
    }
    else
    {
        return false;
    }

    //comparar la cadena original con la revertido
}
   
console.log(esPalindromo("Anita lava la tina")); //true
console.log(esPalindromo("Hola mundo")); //false

let hola;
//Adios solo prue