
class Queue
{
    constructor()
    {
        this.Array = [];
    }
   
    Elementoqueue(Elemento)
    {
        this.Array.push(Elemento);//Agregar elementos al arreglo
    }

    Dequeue()
    {
        if(this.isEmpty())
        {
            return "No hay datos";
        }
        return this.Array.shift();//Eliminar el primer elemento del array
    }
    isEmpty()
    {
        return this.Array.length===0;
    }
    ObtenerQueue()
    {
        if(this.isEmpty())
        {
            return "No hay datos";
        }
        return this.Array[0];
    }
    Size()
    {
        return this.Array.length;
    }
    print()
    {
      console.log(this.Array);
    }
}

let Cola= new Queue;

Cola.Elementoqueue(1);
Cola.Elementoqueue(2);
Cola.Elementoqueue(3);
Cola.Elementoqueue(4);

Cola.print();

Cola.Dequeue();

Cola.print();