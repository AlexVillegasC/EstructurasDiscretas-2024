

// EJEMPLO VAR

//Las variables pueden ser levantadas aun sin haber sido asignadas un valor
console.log(saludo); // "undefined"
var saludo = "Hola";
console.log(saludo); // "Hola"

//En este ejemplo la vairable es global, pues se esta asignando fuera de un bloque.
// sin embargo, una variable asignada dentro de un bloque puede ser llamada como si fuese global.

function colores_numeros() {
    var color = "naranja";
    var numero = 1;

    console.log(color); // "naranja"
    console.log(numero); // "1"

}

console.log(color); // El resultado sigue siendo "naranja".

var numero = 10; // El valor es reasignado de forma valida.
console.log(numero); //El resultado sera "10" en lugar de "1" porque ese es el valor mas reciente que se le dio a la variable.


// EJEMPLO LET

function nombre() {
    let nombre = "BrandonVega";
    console.log(nombre); // "BrandonVega"
    
    //La variable "let" tiene asignacion de bloque, lo que significa que solamente se asignara en el bloque donde se nombrara.
}

console.log(nombre); // "Error" la variable apaarece como indefinida.

let nombre = "BrandonVega";
console.log(nombre); // "BrandonVega" pues ya ha sido asignada de forma global.

let nombre = "JosephJoestar"; // Da error pues no se puede reasignar una variable let a menos que se haga dentro de un bloque primero, permitiendo esto de manera global.


// EJEMPLO CONST

const despedida = "adios";
// const despedida = "sayonara"; // Da error pues const no puede ser redefinido dentro o fuera del bloque, solamente logrando cambios por medio de arrays y metodos.
