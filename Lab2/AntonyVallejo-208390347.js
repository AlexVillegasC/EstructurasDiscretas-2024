//var
//Las variables declaradas con var tienen un alcance de función. 
//Esto significa que están disponibles dentro de la función en la que se declaran, 
//independientemente del bloque en el que se encuentren.


function Ejemplovar() {
    var number=100;
    console.log(number);
}
Ejemplovar();
//let
//La variable let puede ser considerada una variable global y se puede usar en cualquier parte
//del codigo hasta dentro de un bucle

let Number=5;
for(let i=0;i<=Number;i++)
{
    Resultado=Number*i;
    console.log(Resultado);
}

//Const es una palabra clave que se utiliza para declarar variables 
//que no pueden ser reasignadas después de su inicialización.
// Es decir, una vez que se le asigna un valor a una variable con const,
// ese valor no puede ser cambiado posteriormente durante la ejecución del programa.

const Nombre="Antony";

console.log(Nombre);

//Nombre="Luis"; Esto no se puede hacer ya que dara error, 
//porque no puede ser reasignada

