// EJEMPLO DE VAR
var mensaje = "Hola"; // Esto es una variable Var global

function Saludar() {
    var saludar = "Hola Mundo"//Esto es una variable local dentro una funcion.
}

console.log(mensaje); //Por lo tanto para que nos de error esta linea de codigo debemos utilizar la variable global y no la local


var carro = "honda"; //En esta parte estoy demostrando que la variable var permite declarar dos variables con el mismo nombre y no daria error, pero hay que tener cuidado al utilizar esto porque se puede redefinir variables que no deseamos
var carro = "honda y suzuki";


//EJEMPLO DE LET
let nombre = Jose;
let contador = 4;

if (contador > 3) {
    let nombre2 = "Carlos";
    console.log(nombre2); // Aqui la varible va a devolver el nombre de Carlos ya que si esta definida en el bloque
}
console.log(nombre2); //Aqui el codigo nos daria error ya que la varible utilizada no esta dentro del bloque

let marca = "Nike"; // Estas variables nos darian error ya que la variable let no se puede redeclarar como lo hacen las variables var.
let marca = "Adidas";//Pero si definimos una variable let dentro de un bloque y otra global con el mismo nombre , no nos daria error.


//EJEMPLO DE CONST
const saludo = "Hola mundo"; // Esto no se puede hacer en una variable const ya que el valor de ella no podemos modificarse una vez declarado, funciona igual en metodos constantes.
saludo = "Hola";

const mascota = "Perro"; //Las variables const no tienen la capacidad de poder refinirse, por lo tanto esvto nos daria error 
const mascota = "Gato";









