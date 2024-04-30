class Fila
{

    constructor() //Creacion del Array
    {
        this.Objetos = [];

    }

    Agregar()  //Para Agregar
    {
        this.Objetos.push();
    }

    Eliminar()
    {
        //Para eliminar el primer Objeto de la fila
            this.Objetos.shift();
        
    }

    Tamaño() //Medir el Array
    {
        return this.Objetos.length;
    }

    Frente()
    {
        return this.Objetos[0];
    }

    mostrar()
    {
        console.log(this.Objetos);
    }
}


const fila = new Fila();
fila.Agregar(1);
fila.Agregar(2);
fila.Agregar(3);

console.log("El primer número de la fila es: " + fila.Frente());
console.log("Todos los elementos de la Fila: ");
fila.mostrar();

console.log("El primero en eliminarse es: " + fila.Frente() );
fila.Eliminar();

console.log("Todos los elementos de la Fila actualizados: ");
fila.mostrar();