
https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/#:~:text=const%20no%20puede%20modificarse%20ni,actualizar%20ni%20volver%20a%20declarar
// let tiene un ámbito 

let saludar = "dice Hola";
let tiempos = 4;

if (tiempos > 3) {
    let hola = "dice Hola tambien";
    console.log(hola);// "dice Hola tambien"
}
console.log(hola) // hola is not defined

// Var


// Const