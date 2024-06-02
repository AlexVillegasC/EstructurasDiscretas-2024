//Var, let y const

//Var es una variable que puede ser modificada
//dentro de cada funcion de manera independiente

var Direccion = "derecha";

function ExampleVar()
{
    var Direccion = "izquierda"; //cambiamos el valor de la variable
    console.log(Direccion); //imprime el nuevo valor
}

//Const se usa para asignar algo que no puede cambiar
//y en caso de intentarlo, fallara

function ExampleConst()
{
    const Pi=3.1416;
    //Pi=3.14;
    console.log(Pi);
}

//let solo se puede utilizar dentro de la misma
//funcion donde se define de lo contario tira error

function ExampleLet()
{
    for (let i = 1; i <= 10; i++)
    {
        console.log(i); //funcionara ya que esta dentro de donde se definio
    }
    console.log(i+1); //no funcionara, esta fuera de donde se definio
}
ExampleVar();
console.log(Direccion);
ExampleConst();
ExampleLet();