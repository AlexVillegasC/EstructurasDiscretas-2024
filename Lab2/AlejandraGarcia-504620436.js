// Ejemplo VAR
var actividad = "Estoy haciendo ejercicio"; // Correcto: Puede ser reasignado
var horasEjercicio = 2;

if (horasEjercicio <= 1) {
    console.log(actividad);
} else {
    // Incorrecto: Se vuelve a declarar una variable 'actividad' en el mismo ámbito
    var actividad = "Ya no puedo hacer más ejercicio."; 
    var despedida = "¡Gracias por la sesión!";
    console.log(actividad + " " + despedida);
}
//console.log(despedida); // Esto daría error porque 'despedida' está fuera de su ámbito
console.log();

// Ejemplo LET
let alumno = "Yendry Zelaya";
let cursosInscritos = 5;
console.log(alumno);

if (cursosInscritos == 5) {
    // Correcto: 'matricula' es declarado y utilizado dentro del mismo ámbito
    let matricula = "Su inscripción está completa.";
    console.log(matricula); // "Su inscripción está completa."
}
//console.log(matricula); // Esto daría error porque 'matricula' está fuera de su ámbito
alumno = "Alejandra Garcia"; // Correcto: Se puede modificar
console.log(alumno + '\n');

// Ejemplo CONST
const pi = 3.14159;
console.log(`El valor de pi es: ${pi}`);

// Incorrecto: No se puede modificar una constante
//pi = 3.14;

const autor = "Yulieth Garcia";
console.log(`Este programa fue escrito por: ${autor}`);
