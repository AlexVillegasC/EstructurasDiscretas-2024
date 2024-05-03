// Var
var x = 10;

function ejemploFuncion() {
    var y = 20;
    console.log(x); // Muestra un  10
    console.log(y); // Muestra  un 20
}

ejemploFuncion();
console.log(x); // Muestra un 10
console.log(y); // No muestra por que no esta definida goblamente

// Let
let a = 30;

if (true) {
    let b = 40;
    console.log(a); // Muestra un 30
    console.log(b); // Muestra un 40
}

console.log(a); // Muestra un 30
console.log(b); // No mostrara b por que no esta definida globalmente

// const
const PI = 3.14; // Declaramos una constante PI y le asignamos el valor de 3.14

if (true) {
    const RADIO = 10; // Dentro del bloque if declaramos otra constante RADIO y le asignamos el valor de 10
    console.log(PI); // imprime el valor de PI que es 3.14
    console.log(RADIO); // imprime el valor de RADIO que es 10
}

console.log(PI); // se imprime el valor de PI
console.log(RADIO); // ocurre un error ya que RADIO no esta definida fuera del if
