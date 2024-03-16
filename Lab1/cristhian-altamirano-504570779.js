let nombre = "Cristhian";
let saludo = "Hola " + " " + nombre;
console.log(saludo);
/*Bucles*/

for(let num = 0; num < 8; num ++)
{
}

console.log("\n---------------------------------------------------------------- \n");

for(let i = 0; i < 100; i ++)
{
    if(i % 2 == 0)
    {
        console.log(i + " " + ".");
    }
}

console.log("\n---------------------------------------------------------------- \n");
for(let i = 1; i < 100; i ++)
{
    if(i % 2 != 0)
    {
        console.log(i + " " + ".");
    }
} 

console.log("\n---------------------------------------------------------------- \n");

let vacio = []
vacio.push("Nuevos elementos");

console.log(vacio);

console.log("\n---------------------------------------------------------------- \n");

let numeros = [10, 20, 30, 40, 50]

let mixto = [42, "texto", true, null]
console.log(mixto);

console.log("\n---------------------------------------------------------------- \n");

let varExample = [[39, 45, 6], "5", 6, 0, true, 9, null ]
console.log(varExample);

console.log("\n---------------------------------------------------------------- \n");

let matriz = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8]
    ]

    console.log(matriz);

    console.log("\n---------------------------------------------------------------- \n");

    const a = [1, 2, 3]
    a.push(a);
    console.log(a);

    console.log("\n---------------------------------------------------------------- \n");

    class Gato
    {
        constructor(nombre, edad)
        {
            this.nombre = nombre;
            this.edad = edad;
        }

        setNombre()
        {
            this.nombre = nombre;
        }

        setEdad()
        {
            this.edad = edad;
        }

        getNombre()
        {
            return this.nombre;
        }

        getEdad()
        {
            return this.edad;
        }
    }

    function toString()
    {
        return "Mi nombre es: " + this.getNombre() + "\n" + "Mi edad: " + this.getEdad();
    }

    let arrayG = [new Gato('Ojon', 3), new Gato('Principe', 7), new Gato('Pericle', 2)];

    arrayG.forEach(function(Gato)
    {
        console.log(arrayG);

        console.log("\n---------------------------------------------------------------- \n");
    })

function esPalindromo(cadena){  
    cadena = cadena.toLowerCase().replace(/[^a-zA-Z]/g, ''); 
    
    let separarCadena = cadena.split("");

    let revertirCadena = "";

    for (let i = separarCadena.length - 1; i >= 0; i--) {
        revertirCadena += separarCadena[i]
    }
    
    return revertirCadena == cadena;
}

console.log("\nFuncion Palindromo. " )
console.log(esPalindromo("oso")); // Devuelve true
console.log(esPalindromo("aleta")); // Devuelve false
console.log(esPalindromo("ana")); // Devuelve true
console.log(esPalindromo("Anita lava la tina")); // Devuelve true
console.log(esPalindromo("No es un palindromo")); // Devuelve false
console.log(esPalindromo("A man, a plan, a canal, Panama!")); // Devuelve true
console.log(esPalindromo("aaaa")); // Devuelve true