//La variable var tiene un alcance de función, significa que puede ser accedida desde cualquier parte de la función en la que se declaró.

var edad = 25;
console.log("Edad:", edad);

// Reasignación del valor de la variable
edad = 30;

// Imprimiendo el nuevo valor de la variable
console.log("Nueva Edad:", edad);

console.log("----------------------------------------");
//  La variable let tiene un alcance de bloque, lo que significa que solo está disponible dentro del bloque en el que se declaró.
let precio = 50;
console.log("Precio:", precio);

// Reasignación del valor de la variable
precio = 60;

// Imprimiendo el nuevo valor de la variable
console.log("Nuevo Precio:", precio);

console.log("----------------------------------------");
// Definimos una constante para almacenar el valor de PI
const PI = 3.14159;

// Intentamos reasignar el valor de PI (esto generará un error)
// PI = 3.14; // Esto lanzará un error en tiempo de ejecución

// Definimos una función que calcula el área de un círculo
function calcularArea(radio) {
    return PI * radio * radio;
}

// Usamos la función para calcular el área de un círculo con radio 5
const area = calcularArea(5);
console.log("El área del círculo es:", area);
