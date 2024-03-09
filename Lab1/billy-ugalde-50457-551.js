//+, -, *, /, %,
let nombre = "Billy";
let saludo = "Hola "+ " " + nombre;
console.log(saludo);

/*for (let i = 0; i <= 100; i++){

    if (i % 2 == 0) {
        console.log(i + " " + ".");
    }
}*/

/*for (let r = 0; r <= 100; r++){

    if (r % r) {
        
            console.log("Los numeros primos son: " + r);
        
        
    }
}*/

let vacio = [];
vacio.push("Nuevo elemento");
console.log(vacio);

let numeros = [10, 20, 30, 40, 50];

let frutas = ["manzanas", "banana", "cereza", "durazno"];
console.log(frutas);

let mixto = [42, "texto", true, null];
console.log(mixto);

let varExample = [[39, 45, 6], '5', 6, 0, true, 9, null];

let matriz = [

    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz);

const a = [1, 2, 3];
a.push(a);
console.log(a);

class Gato{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    setEdad(edad) {
        this.edad = edad;
    }

    getNombre() {
        return this.nombre;
    }
    getEdad() {
        return this.edad;
    }

    toString() {
        return "Mi nombre es: " + this.getNombre() + "\n" + "Mi edad es: " + this.getEdad();
    }

}

let arrayG = [new Gato('Mina', 15), new Gato('Tama', 2), new Gato('Pantuflas', 4)];

arrayG.forEach(function (gato) {
    console.log(gato.toString());
});
let phrase;

function esPalindromo(phrase)
{
   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   phrase = phrase.toLowerCase().replace(/\s/g, '');

   // Revertir la cadena
   let splittedphrase = phrase.split('');
    let revertedPhrase = '';
   // Comparar la cadena original con la revertida
    for (let i= splittedphrase.lenght-1; i >= 0; i--) {
        splittedphrase += revertedPhrase;
        
    }
    return cadena === cadenaRevertida;
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false

/*function esPalindromo(cadena1) {
    const cadenaLimpia = cadena1.toLowerCase().replace(/[^a-z]/g, '');// remueve cosas en blanco
    //compara la cadena original con la revertidaaa jajaj y el split que es para separar
    const cadenaRevertida = cadena1.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('');

    return cadenaLimpia == cadenaRevertida;
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false*/ 