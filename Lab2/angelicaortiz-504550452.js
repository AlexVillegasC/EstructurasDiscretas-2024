//Investigación Lab2

//***********************Variables var:
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

console.log(vocales);

//Las variables var se pueden redeclarar y modificar. Ej:
var nombre = "Angélica";
var nombre = "María";

//o
var nombre = "Angélica";
nombre = "María";

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
//      





