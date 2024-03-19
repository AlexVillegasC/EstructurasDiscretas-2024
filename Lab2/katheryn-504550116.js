//La variable let es usada en los programas de forma que se debe de asignar un valor, antes de empezar a
console.log("Practica de let");

let num=5;

for (let i = 0; i < 10; i++){
    let num =i;
    console.log("Numero aumentado let: "+num); //se muestra el numero aumentando de 0 a 9, creado dentro del for
}

console.log(num); //se mostrara el numero 5, no el aumentado

//La variable var, puede usarse de forma global

console.log("Practica de var");

var num2 =6;

for(var i=0; i<10; i++){
    var num2=i;
    console.log("Numero aumentado var: " + num2);
}

console.log(num2); //Se muestra el ultimo cambio del numero.

//La constante const, a como bien lo dice su nombre, nunca cambia de valor. Si se intenta cambiar una constante, esta misma daria error

console.log("Practica const")

const euler = 2.71;

//euler = 2.555 //Si se hace el siguiente procedimiento, el programa daria error

console.log("La constante es: " + euler);