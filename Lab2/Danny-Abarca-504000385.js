console.log("<-----Ejemplo del Var----->");

var edad = 29;

 function datosPersonales () 
 {
   var nombre = "Danny Orlando Abarca Alvarado";
   console.log ("Nombre: " + nombre);
   
 }

 datosPersonales ();

 if (edad == 29)
 {
   console.log("Edad: " + edad);
 }

/*En este ejemplo se detreminan 2 variables de tipo VAR (nombre y edad),
  donde estas puede ser utilizada para declarar variables en diferentes 
  partes del código y cómo estas variables pueden ser accedidas dentro y 
  fuera de bloques condicionales y funciones.
*/

console.log("<-----Ejemplo LET----->");

function mostraNum ()
{
   let num = [];

   for (let i = 0; i < 5; i++)
   {
      num.push (i);
   }
   console.log(num);
}

mostraNum();

/* let se utiliza para declarar variables con ámbito de bloque, lo que 
significa que la variable i solo estará disponible dentro del bucle for. 
Esto proporciona un mejor control sobre el ámbito de las variables en el 
código y evita posibles problemas relacionados con el alcance de las variables.*/

console.log("<-----Ejeplmo const----->");

function calculaArea (radio)
{
  const PI = 3.14159;
  const area = PI * radio^2;
  return area;
}

const radio = 5;
const areaCirculo = calculaArea(radio);

console.log ("El area de un circulo, el cual tiene un radio de " + radio + "CM, seria de: " + calculaArea(radio));

/*En este ejemplo, se usa const para declarar constantes ( PI) cuyos valores no cambiarán durante la ejecución del programa. 
Esto ayuda a escribir un código más claro y predecible, y también protege contra la reasignación accidental de valores.*/