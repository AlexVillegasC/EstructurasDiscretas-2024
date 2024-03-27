//USO DE VAR


function SumandoNumeros(Num)
{
    var Sumar4 = 4;
    Num = Num + Sumar4;

    return Num;
}

console.log(SumandoNumeros(5)) // aqui estamos usando var dentro de una funcion.
//console.log(Sumar4)  // si llamamos a Sumar4 desde este punto va a dar error, esto porque si var es 
//                        declarado dentro de una funcion no se puede llamar fuera de esta misma.



// USO DE LET

let perro = "Guau Guau";
//let perro = "Guf Guf"; // si trato de redefinir la variable let en un mismo "bloque" da error

if (perro == "Guau Guau")
{
    let perro = "Guf Guf";
    console.log(perro);
}

console.log(perro); // a pesar de llamarse igual (perro) como estan en distintos bloques "{}"
                   // no se toma como la misma variable si no que actuan como diferentes.




// USO DE CONST


const RestarNumeros = 
{
    texto : "Resta con exito",
    num: 5 
} // const es una variable que no se puede modificar y no se puede volver a declarar como lo hace var
// sin embargo en este ejemplo le estoy dando 2 propiedades las cuales si pueden ser modificadas
// por ejemplo 

//RestarNumeros.num = 6; // al hacer esto le estamos cambiando el valor a num
console.log(6 - RestarNumeros.num)
console.log(RestarNumeros.texto)