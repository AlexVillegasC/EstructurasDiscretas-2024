// VAR
// Ámbito var

var j= 6;  // Variable de ambito global
function Numeros() {
    var i= 5, k= 9; // Variables de ambito local
    console.log(j);
    console.log(i);
}
Numeros();
//console.log(k); // No se puede imprimir el nueve ya que encuentra fuera de alcanse

// Var se puede volver a declarar y modificar

var total = 8;

for (var i = 1; i <= 10; i++) {
    total += i;
}
console.log(total);

var total = 90;
console.log(total);

// Hoisting de var

console.log(saludar); // Aunque no se haya definido antes la variable por defecto su mustra indefinida sin provocar una error
var saludar = "Holaaaa!!";

// Problemas de var

var salario = 250000;
var ventasRealizadas = 3;
if( ventasRealizadas >= 5 ){
    var salario = (ventasRealizadas * 20000) + salario;
}
else{
    var salario = salario + 20000;
}
console.log("Su salario es: " + salario);
// Debido a que var se puede volver a definir y modificar si quiero mantener un valor y no cambiar su contenido
// no me restringe si le asigno el mismo nombre.


// LET
// let tiene un ámbito de bloque

let num1= 8;
function Numeros() {
    let k= 9;
    //console.log(num1); // Con let a diferencia de var no se puede acceder a variales 
    // que se hayan declarado fuera del bloque
    console.log(k);
}
Numeros();
//console.log(k); // Igualmente si es declarada dentro de un bloque no se puede acceder a ella fuera del mismo

// let puede modificarse pero no volver a declararse

let totalSuma = 8; // Se declara la variable totalSuma

for (let i = 1; i <= 10; i++) {
    let totalSuma = 3; // Se puede volver a definir pero en ambitos diferentes
    totalSuma += i;
    console.log(totalSuma);
}
console.log(totalSuma); // Se imprime el resultado de totalSuma como fue definido anteriormente

//let totalSuma = 75; // Como se resalta esto es incorrecto ya que let no puede volver a declararse en un mismo ambito
totalSuma = 75; // Pero sí modificarse
console.log(totalSuma);

// Hoisting de let

//console.log(despedida); // A diferencia de var, con let no se inicializa con un "undefined", si no que provoca un error
let despedida = "Adiosss!!";
console.log(despedida);

// CONST
const nombrePerro = "Scooby"; // Const debe ser declarada y asignale un valor al mismo tiempo
//const nombreGato; // Esto es incorrecto
//nombreGato = "Mimi"; // Esto tambien
const nombreGato = "Mimi"; // Esta es la forma correcta
console.log(nombrePerro);
console.log(nombreGato);

//const nombrePerro = "Firulais"; // X
//nombrePerro = "Firulais"; // Const tampoco se puede modificar ni volver a definir

const celular = { // Un objeto declarado con const si se puede modificar 
    modelo: "iPhone 14",
    almacenamiiento: 256,
    RAM: 16,
    bateria: 4500
}
console.log("El delular es: " + celular.modelo);
celular.modelo = "S24 Ultra"; // Se puede modificar de esta manera
console.log("El delular es: " + celular.modelo);
