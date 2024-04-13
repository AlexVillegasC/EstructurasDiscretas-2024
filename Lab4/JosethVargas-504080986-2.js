class Stack
{
    constructor()
    {
        this.array = [5];
    }

    Push(element)
    {
        this.array.push(element);
    }
    
    Pop()
    {
        this.array.pop();
    }

    PrintStack()
    {
        this.array.forEach(element => 
            {
                console.log(element);
            });
    }

}

const stack = new Stack();

console.log("Array inicia con 5, luego se le agrega 1,2 y 3");
stack.Push(1);
stack.Push(2);
stack.Push(3);
stack.PrintStack();

console.log("Como la funcion es Stack, entonces: \n");
console.log("No se eliminara el primero(5) como sucede en Queue, esta vez sera el ultimo(3)");
stack.Pop();
stack.PrintStack();

let obj1 = {value:10};
let obj2 = obj1;
obj2.value = 20;


// const Number = [1, 2, 3];

// console.log("El array comienza con los numeros 1,2 y 3");
// console.log(Number);

// for(let i = 0; i < 3; i++)
// {
//     Number.push(i+4);
//     console.log(Number);
//     Number.pop();
//     console.log(Number);
// }

