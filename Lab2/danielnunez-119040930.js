// Ejemplo de let
function contarHastaDiez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i); // Accesible dentro del bloque
    }
    //console.log(i); // Error: i no está definida fuera del bloque
}
contarHastaDiez();

// Ejemplo de var
var mensaje = "Hola";

function actualizarMensaje() {
    var mensaje = "Adiós"; // Variable local dentro de la función, distinta a la externa
    console.log(mensaje); // Imprime "Adiós"
}

console.log(mensaje); // Imprime "Hola"
actualizarMensaje(); // Imprime "Adiós"

// Ejemplo de const
const PI = 3.1416;
// PI = 3.14; // Error: No se puede reasignar una constante
console.log(PI); // Imprime 3.1416
