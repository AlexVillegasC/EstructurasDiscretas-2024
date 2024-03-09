// let nombre = "Frander";
// let saludo = "Hola " + nombre;

// console.log(saludo);


// for (let num=0; num<8; num++)
// {

// }

// // for (let x=0; x<=100; x++)
// // {
// //     if(x%2 != 
// //     {
// //         console.log(x+" " +".");
// //     }
// // }

// // let vacio = [];
// // vacio.push("Nuevo elemnto");
// // console.log(vacio);


// let numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros);

// let frutas = ["banano", "aguacate", "fresa", "sandia"];
// console.log(frutas);

// let cosas = [1 , "Banano", 2];
// console.log(cosas);

// let varExample = [[1,3,2], '5' , 6, 0, true, 9, null];
// console.log(varExample);

// let matriz = [

//     [1,2,3],
//     [5,3,2],
//     [6,7,7]
// ];
// console.log(matriz);

// const a = [1,2,3];
// a.push(a);
// console.log(a);

// class gato{

//     constructor (nombre, edad)
//     {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     setNombre (nombre)
//     {
//         this.nombre = nombre;
//     }

//     setEdad (edad)
//     {
//         this.edad = edad;
//     }

//     getNombre ()
//     {
//         return this.nombre;
//     }

//     getEdad ()
//     {
//         return this.edad;
//     }

//     ToString ()
//     {
//         console.log( "Nombre: " + this.getNombre + "\n Edad: "+ this.getEdad);
//     }

// };

// let arrayG = [new gato ("Frander", 15), new gato ("Daniel", 10), new gato ("maluma", 10) ];

// console.log(arrayG);

function esPalindromo(texto) {
    texto = texto.toLowerCase();
    texto = texto.replace(/\s/g, '');
    let splittedcaracteres = texto.split('');
    let caracteresRevetidos  = '';

    for (let i = splittedcaracteres.length - 1; i >= 0; i--) {
        caracteresRevetidos += splittedcaracteres[i]; // Corrected concatenation
    }

    return texto === caracteresRevetidos;
}

console.log(esPalindromo("hola mundo")); // false
console.log(esPalindromo("oso")); // true


////








