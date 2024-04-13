// ------------------Tipos de Variables de Java Scrip---------

Existen 3 tipos de variables en JavaScript: var,const,let.


VARIABLE VAR: 

Las variables de tipo var, se le conocen por ser variables globales, eso quiere decir que
se puede almacenar en ellas todo tipo de datos, ya sea de tipo Int,string, bool, entre otros. 

------------------------EJEMPLO--------------------------- 

console.log("-_-_-_-_-_-Estudiante-_-_-_-_-_-_");

var nombre = "Alondra";
var apellido="Flores";
var edad= 18;

console.log("Nombre: " + nombre + " " + typeof nombre);
console.log("Apellido: " + apellido+ " " + typeof apellido);
console.log("Edad: " + edad+ " " + typeof edad);

------------------------------------------------------------

VARIABLE LET:

Este tipo de Variables se utilizan dentro de un bloque de codigo limitado por llaves, se utiliza
para poder declarar una variable en la que solo se utilizara en estos bloques especificos.

----------------------------------EJEMPLO-------------------------------
console.log("suma")

let resultado=0;


for(let i=1; i<= 100; i++)
{
    resultado += i;
}

console.log(resultado)

var suma = 5 +5;

console.log(suma);

------------------------------------------------------------------------

VARIABLE CONST:

Este tipo de variable se utiliza unicamente para que los datos almacenados en esta NO sean cambiados,
osea que los todo lo que este almacenado en esta variable no será cambiado, basicamente
solo son para lectura. 

--------------------EJEMPLO---------------------

const email = ingeniera@gmail.com; 

email = holaa;

console.log(email); //En este caso, el programa tiraría error ya que ya se ha declarado que email 
es de tipo const, por lo tanto su contenido será siempre constante y solo de lectura.




//