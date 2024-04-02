//EJEMPLO VAR (ambito global)

function gatoMaullando() {//No se puede acceder a la variable fuera de la función
    var maullido = "¡Miau!";
}
gatoMaullando();
console.log(maullido); // Error

//Las variables var se pueden volver a declarar y modificar, sin embargo en un codigo largo puede causar errores
var maullido = "¡Miau!";
console.log(maullido); // Muestra en pantalla: ¡Miau!

maullido = "¡Miau, miau!";
console.log(maullido); // Se modifica y muestra en pantalla: ¡Miau, miau!


//EJEMPLO LET (ambito bloque{})

//Solo está disponible para su uso dentro de ese bloque
let ladrido = "guau";
let repeticiones = 5;

if (repeticiones > 3) {
    let ladridoFuerte = "¡guau, guau, guau!";
    console.log(ladridoFuerte); // "¡guau, guau, guau!"
}// Al intentar acceder a ladridoFuerte fuera del bloque if, se obtendrá error

//Let puede modificarse, pero no volver a declararse
let ladrido2 = "guau";//Funciona
ladrido2= "guau, guau";

let ladrido3 = "guau";//Error
let ladrido3 = "guau, guau"; //Nota: Si la misma variable se define en diferentes ámbitos, no habrá error


//EJEMPLO CONST (ambito bloque{})

//No puede modificarse ni volver a declararse:
 const cacareo = "quiquiriqui";//Error
 cacareo = "quiquiriqui, quiquiriqui";

const cacareo2= "quiquiriqui";//Error
const cacareo2 = "quiquiriqui, quiquiriqui";


//Var y let pueden ser declaradas sin ser inicializadas, const debe ser inicializada durante la declaración.