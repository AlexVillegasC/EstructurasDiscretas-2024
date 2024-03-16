//Ejemplo de uso de variables Var


var nombre = "Hola mundo"; // esto es una variable de tipo var global


function Saludar() {
    var Name = "Mundo"; // es una variable local dentro de este bloque de codigo
    console.log(nombre); // Por lo tanto para que nos de conflicto esta linea debemos utilizar la variable global y no las locales
}
var Saludo = "Hi";
var Saludo = "Hello world"; // se puede declarar dos variables con el mismo nombre y mensaje, pero hay que tener cuidado al utilizar esto porque se pueden redefinir variables que no queremos
Saludo = "Hoy es viernes";

//Ejemplo de uso de variables let

let nombre = "Billy";
let numero = 6;

if (numero > 4) {
    let lastName = "Ugalde";
    console.log(lastName);  
}
console.log(lastName); //si se usa esta variable let, de esta manera va a dar error ya que no se puede usar por fuera del bloque de codigo


let carro = "Toyota";
let carro = "Hilux"; // en let esto no se puede hacer a diferencia de var, da error al declarar dos veces, si se define una global y la misma en una funcion esto si se podría hacer

//Ejemplo de uso de variables Const

const despedida = "Adios";
despedida = "chao";
const despedida = "hola";  // esto no se puede hacer ya que una variable constante no se puede modificar ni redefinir

// Funciona igual para los metodos constantes