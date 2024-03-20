//Diferencias entre varfiables let,var y const y ejemplos de como usarlos


//Ejemplo de let
// let se puede definir como una variable que solo se puede acceder en el mismo bloque de codigo en el que se definio



for(let i = 0; i < 10; i++) //como definimos i como variable let 
{
    console.log(i); // aqui se puede acceder porque esta en el mismo bloque de codigo

}
   // console.log(i); //mientras que aqui ya no se puede acceder ya que no se encuentra en el mismo bloque de codigo por lo tanto al correr el codigo tira error
                //que dice que i no esta definida



//Ejemplo de var
//var se puede definir como una variable global osea que una vez definida se puede utilizr en cualquier parte del codigo
//Ademas que se puede volver a definir


    var nota = "Hola" ; //se define la varaible nota como una cadena de caracteres
        
function Promedio()
{

    nota = Math.floor(Math.random() * 100) + 1;  //aqui se reescribe como un numero random de 1-100
    if(nota >= 70)
    {
        return console.log("Usted ha aprobado "+ "su nota es: " + nota);
    }       
    else if (nota < 70) 
    {
    return console.log("Usted ha reprobado "+ "su nota es: " + nota);
    }

}
Promedio()


//Ejemplo de cosnt
//cosnt se puede definir como una variable constante osea que una vez definida no se pude volver a reescribir

const account = "Una cuenta";

account = "Nueva cuenta"; //Como se puede observar al intentar darle un nuevo valor a la variable tira error 

