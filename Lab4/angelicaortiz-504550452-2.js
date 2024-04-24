// Stack

class Stack
{

    constructor()
    {
        this.array = [];   //Se inicializa array vacío
    }

    Push(element)
    {
        this.array.push(element);   //Agrega elemnto al final del array
        console.log(this.array);    //Imprime estado actual
    }

    Pop()
    {
        this.array.pop();    //Elimina el último elemento del array
        console.log(this.array);    //Imprime estado actual
    }

}

const stack = new Stack();  //Instancia

console.log("---------- New elements ----------")
stack.Push(5);
stack.Push(6);
stack.Push(7);

console.log("\n---------- Removing Last Element ----------")
stack.Pop();
