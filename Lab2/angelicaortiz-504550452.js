//Investigación Lab2

//Variables var:
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

console.log(consonantes);

//Las variables var se pueden redeclarar y modificar. Ej:
var nombre = "Angélica";
var nombre = "María";

//o
var nombre = "Angélica";
nombre = "María";

//Hosting de var:
//      En JavaScript al declarar e inicializar una variable var, la declaración se eleva
//      a la parte superior del ámbito y se inicializan con undefined.

//Por ejemplo:

console.log(saludar);
var saludar = "Hola, qué tal?";

//se interpreta como:

var saludar;
console.log(saludar);
saludar = "Hola, que tal?";

