//EJEMPLO VAR
var karaoke = "Estoy Cantando"; //se pueden volver a declarar y a modificar  //Ambito global
var canciones=4;                    //al poder declarar variables con el mismo nombre puede causar confuciones a la hora de llamarlas

if(canciones<=3){
    console.log(karaoke); 
}

else{
    var karaoke="Ya no puedo cantar mas. ";  //se pueden volver a declarar y a modificar 
    var despedirse= "Muchas gracias"; //Ambito local
    console.log(karaoke +  despedirse + '\n'); 
}
 
//console.log(despedirse);  no se puede llamar fuera porque es de ambito local



//EJEMPLO LET
let estudiante = "Pablo Garcia: ";
let numeroCursos = 5;
console.log(estudiante);
if (numeroCursos == 5) {
     let matricula = "Su bloque de cursos esta completo.";
     console.log(matricula);// "dice Su bloque de cursos esta completo."
 }
//console.log(matricula) // Seria error porque matricula se declaró dentro del bloque y no se podria llamar fuera.
estudiante="Greilyn Esquivel"; //se puede modificar 
console.log(estudiante+ '\n');
//let estudiante="Alex Villegas" //No se puede volver a declarar la variable con el mismo nombre



//EJMPLO CONST 
//const hamburguesa="Hamburguesa con papas";   
//hamburguesa= "Hamburguesa sencilla";  //No se puede modificar ni volver a declarar variables del mismo nombre

const hamburguesa={
    nombre: "Hamburguesa de la casa",
    tiempoPreparacion: 10,   
}

console.log(`La ${hamburguesa.nombre} se prepara en ${hamburguesa.tiempoPreparacion} minutos.`);


//Hoisting:
//Hoisting con var: cuando accedemos a una variable NO inicializada no se nos caera el programa
//solo nos mostrara el mensaje de undefined

//Hoisting con let y const: si hacemos uso de una variable NO inicializada, el programa se caera.