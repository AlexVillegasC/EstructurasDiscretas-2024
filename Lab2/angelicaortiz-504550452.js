//Investigación Lab2

//***********************Variables var:
console.log("*****Variable var*****");
//      Tienen un ámbito global o local, es decir que al ser declaradas fuera de 
//      una función puede ser utilizada en todo el porgrama. Por otro lado, si se
//      declara dentro de la función solo podrá ser utilizada en la función. 

//Por ejemplo: Al llamar la variable "vocales", devuelve el valor dado correctamente.

var vocales = " a, e, i, o, u";

function abecedario()
{
    var consonantes = " B, C, D, F, G, H, J, K, L, M, N, Ñ, P, Q, R, S, T, V, W, X, Y, Z ";
}

console.log(vocales);

//Por el contrario, al llamar a la variable consonantes se devuelve un error.
var vocales = " a, e, i, o, u";

function abecedario()
{
    var consonantes = " B, C, D, F, G, H, J, K, L, M, N, Ñ, P, Q, R, S, T, V, W, X, Y, Z ";
}

//console.log(consonantes);

//Las variables var se pueden redeclarar y modificar. Ej:
var nombre = "Angélica";
var nombre = "María";
console.log(nombre);

//o
var nombre = "María";
nombre = "Angélica";
console.log(nombre);

//Hosting de var:
//      En JavaScript al declarar e inicializar una variable var, la declaración se eleva
//      a la parte superior del ámbito y se inicializan con undefined.

//Por ejemplo,
console.log(saludar);
var saludar = "Hola, qué tal?";

//se interpreta como:
var saludar;
console.log(saludar);
saludar = "Hola, que tal?";

//Debilidad de la variable var:
//      Si se declara una variable var en un lugar del programa y luego se vuelve a hacer uso
//      de la misma con un valor diferente, puede generar problemas al compilar ya que se 
//      obtendrá un resultado diferente al esperado. Es un problema si no se hace a propósito.

//Ejemplo, en lugar de imprimir los números del 1 al 10 imprime los números del 10 al 1.

var numeros = " 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ";

if(numeros)
{
   var numeros = " 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ";
}
console.log(numeros);

//***********************Variables let:
console.log("\n*****Variable let*****");
//      La variable let tiene un ámbito de bloque, es decir, entre {}. Esto significa 
//      que cualquier variable let declarada solo está disponible dentro de su bloque ({}).

let calif_apro = "Aprobado";
let nota = 9;

if(nota < 7)
{
let calif_necesaria = 7;
let calif_desa = "Desaprobado \n";
console.log(calif_desa + "Calificación necesaria: " + calif_necesaria); 
}
else
{
    console.log(calif_apro);
    //console.log(calif_apro + "Calificación necesaria: " + calif_necesaria); 
}
//   -->Cuando se llama a la variable calif_necesaria dentro del bloque else se genera un error 
//      ya que la variable fue declarada en el bloque if.
//   -->Por otro lado, podemos ver que calif_apro sí se puede usar en el bloque else ya 
//      fue declara fuera de if y else.


//      A diferencia de las variables var, las variables let NO se pueden redeclarar pero SÍ 
//      se pueden modificar.

//  Esto funciona:
let hola = "Hola!";
hola = " HolaaA ";
console.log(hola);

//  esto no:
let chao = "Chao";
//let chao = " ChaooO";

//      Pero si se define en diferentes ámbitos, sí funciona porque se toma como si fuesen dos 
//      variables diferentes.

let ID = 504550452;

if(ID)
{
    let ID = 102220463;
    console.log(ID);
}
console.log(ID);

//      Al igual que en var el hosting let eleva las declaraciones al inicio del ámbito, pero
//      no se inicializan como undefined. Entonces cuando se usan antes de ser declaradas,
//      en lugar del undefined se devuelve un error.

//Ejemplo: 
/*
console.log(telefono);
let telefono = "8393-8274";
*/

//***********************Variables const:
console.log("\n*****Variable const*****");
//      Solo se puede acceder a ellas en el bloque donde fueron declaradas (Si fueron
//      declaradas en uno), igual que las variables let.

//      Las variables const NO pueden modificarse ni redeclararse.

//NO se puede hacer esto:
/*
const apellido = "Ortiz";
apellido = "Barrantes";

Esto tampoco:

const apellido = "Ortiz";
const apellido = "Barrantes";
*/





