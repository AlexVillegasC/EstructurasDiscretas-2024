class Stack
{
    constructor()
    {
        //Creacion del stack
        this.cosas=[];
    }

    Agregar(elemento)
    {
        this.cosas.push(elemento);
    }

    Eliminar()
    {
        this.cosas.pop();
    }

    Tamaño()
    {
        this.cosas.length;
    }

    Mostrar()
    {
        console.log(this.cosas);
    }

    ultimo()
    {
         this.cosas.reverse();
         return this.cosas[0];
       
    }

   


}

const stack = new Stack();
stack.Agregar(1);
stack.Agregar(2);
stack.Agregar(3);

stack.Mostrar();
console.log("Eliminamos el ultimo dijito y quedaria así: ");
stack.Eliminar()
stack.Mostrar();