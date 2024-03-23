
// Diferencias entre Var,Let y const 
// Var solía ser la declaración más utilizada, sino la úncia, la cual tenía un ámbito de tipo global y ámbito de tipo función o local.
// Pero con la llegada de ES2015 (ES6) llegán ciertos cambios, entre ellos los ámbitos de tipo let y const.
// acontinuación tendremos unos ejmplo del tipo var para que nos quede claro.


//ejemplo de un var con ámbito globla
var mensajedeConfirmacion = "Datos correctamente ingresados";
console.log(mensajedeConfirmacion); // al ser un codigo extremadamente corto no se nota, pero al ser global se puede llamar en cualquier momento sin problema
 
// ejmplo de var con ámbito local
function mensajedeSegurida(mensaje){
    var mensaje = "correctamente"; // al ser mensaje una varibale dentro de de un metodo, no nos permite poder mostrar sus datos de forma externa 
}
mensaje = "Datos eliminados correctamente"; // Pero var nos permite con una de sus funcionalidades poder llamar a 
                                            //la varibale por su nombre y poder enviar un mensaje distinto para poder llamarlo desde fuera de la función
console.log(mensaje);
///Por otro lado podremos enccontrar el "hosting var" esto lo encontraremos reflejado cuando una la declaracion de varibales o funciones se colocan arriba de su ámbito 
///antes de que se ejecute el código

//veamos un ejemplo 
var mensajes;
console.log(mensajes); // undefined 
mensajes = "Datos evaluados correctamente"; // Nos envía undefined--porque estamos intentando mostrar el mensaje antes de definirlo por eso no nos permite

// el problema que se puede encontrar en la declaracion con var es que podemos declarar una variable con un mensaje y luego redefinir la variable con otro mensaje
// el problema de esto se dará en códigos grandes, que se nos confunda que ya habíamos redefinido la variable antes y volverlo hacer, estos nos dará problemas en la salida, nos podrá enviar mensajes distintos 
var text = "Usuario encontrado";
var edad = 20;

if(edad >=18){
    var text = "El usuario tiene la mayoria de edad";// claro ejemplo de como redefinimos el contenido de la varibal,esto nos puede traer problemas en la salida 
}
console.log(text);
// para solucionar este problema aparecen las declaraciones let y const, las cuales veremos a continuación 

//let: viene a solucionar el problema de var, dando así solo su utilidad entre las llaves, lo cual nos dice que es de ambito de bloques , veamoslo con el mismo ejemplo 

var tex = "encontrado!!";
let edades = 20;

if(edades >=18){
    let te = "Usuario cumple con los requesitos";// claro ejemplo de como redefinimos el contenido de la varibale,esto nos puede traer problemas en la salida 
    console.log(te);
}
//console.log(te); si lo intentamos llamar desde esta linea nos enviará un error, ya que no se encuentra dentro de las llaves
// también podremos nombrar variable con un mismo nombre y llamarlas y nos mostrarán mensajes distintos, esto y siempre se 
// se encuentren en ámbitos diferentes, mostraremos un ejemplo para aclarar

let texto = "Buenas noches"; 
 if(true){
     let texto = "Buenos dias";
     console.log(texto);      // Estamos modificando el contenido de la variable pero en ámbitos diferentes, lo que no me afecta el contenido  
}
 console.log(texto);
 // Al igual que var let también cuenta cuenta con el hosting, con la diferencia de que el sitema en consola no enviará un undefined
 // sino envía un error como tal

 // Ultima declaración que mencionaremos es const, aunque se pueden encontrar cirtas similitudes tiene la gran diferencia
 // de const mantiene los valores constantes 

 // tiene el ámbito de bloque 
 // Al mantener los valores constantes hace que no se pueda redefinir los valores de las varibales, o volver a declararlos 

 //  ejemplo
//  const W ="Calculo realizado con exito";
//  W ="calculo realizado";
                                                   // los  comento porque al no poderse dará error todo el codigo 
//tampoco nombrarla dos veces con el mismo nombre
// const W = "Correcto";                       
// const W = "Incorrecto"; 
// esto  nos obliga a tener que inicializar las variables cuando son declaradas 


//un objeto const no se puede modificar, pero sus propiedades si, mientras, veamos un ejemplo 
const W = {
    textos: "Calculo se ha determinado con exito", // esto nos permite actualizar las propiedades que cuenta el obejto const
    // en este caso "W"
}

// con respecto al hosting de const, sucede exactamente igual que como sucede con let 