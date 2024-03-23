//-------Laboratorio2--------
//Var, let y const: Diferencias.

///////////////////////////////

//Var: Las variables declaradas con var tienen un alcance
//de funcion o global, es decir, pueden ser accedidas dentro de la
//funcion o globalmente en el ambito en el que fueron declaradas.

//EJEMPLO

var figura="Dibujando un Circulo";

console.log(figura);

figura="Dibujando un cuadrado";

console.log(palabra);

//Let: Solo estan disponibles dentro del bloque en el que fueron declaradas.

//EJEMPLO

function ejemploBloque() {

    let y=10;

    if(true) {
        let z=20;
        console.log("Dentro del bloque if, z es:", z);
    }
    console.log("Dentro de la funcion, y es:", y);
}

ejemploBloque();

//Const: Deben inicializarse con un valor al momento de la declaracion
//y no pueden ser reasignadas a otro valor posteriormente.

const pi=3.14159; //declaracion de variable

//Se intenta asignar el valor de la constante
pi=3.14; //lanza error en tiempo de ejecucion

//Se imprime el valor de la constante
console.log("El valor de pi es:", pi);