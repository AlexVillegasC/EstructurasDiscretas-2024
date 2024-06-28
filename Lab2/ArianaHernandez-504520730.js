// Ejemplo de uso de variables `var`
var nombreUsuario = "Ariana Hernandez"; // Variable global de tipo `string`
var edadUsuario = 20; // Variable global de tipo `number`


saludarUsuario(); // Función que utiliza las variables globales

function saludarUsuario() {
  var saludo = "Hola, " + nombreUsuario + "! ¿Cómo estás?"; // Variable local de tipo `string`
  console.log(saludo);
}

// Ejemplo de uso de variables `let`
let nombreProducto = "Manzana"; // Variable local de tipo `string` dentro del bloque `if`
let precioProducto = 1.50; // Variable local de tipo `number` dentro del bloque `if`

if (precioProducto < 2.00) {
  let descuento = 0.10; // Variable local de tipo `number` dentro del bloque `if`
  let precioFinal = precioProducto - (precioProducto * descuento);
  console.log("El precio final del producto " + nombreProducto + " es de $" + precioFinal);
}

// Ejemplo de uso de variables `const`
const PI = 3.1415926535; // Variable constante de tipo `number`
const IVA = 0.18; // Variable constante de tipo `number`

const totalCompra = 100.00; // Variable local de tipo `number`
const impuesto = totalCompra * IVA;
const totalConImpuesto = totalCompra + impuesto;

console.log("El total de la compra es de $" + totalConImpuesto + ", incluyendo un impuesto del " + (IVA * 100) + "%");
