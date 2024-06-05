//Stack

class Stack
{
    constructor()
    {
        this.array = [];
    }

    OnStack(num)
    {
        this.array.push(num);
    }

    DeStack()
    {
        this.array.pop();
    }

    MostrarStack()
    {
        this.array.forEach(element => { console.log(element) });
    }

};

let Apilar = new Stack

Apilar.OnStack(1);
Apilar.OnStack(2);
Apilar.OnStack(3);
Apilar.OnStack(4);
Apilar.OnStack(5);
Apilar.OnStack(6);
Apilar.OnStack(7);
Apilar.OnStack(8);
Apilar.OnStack(9);
Apilar.OnStack(10);
Apilar.OnStack(11);

Apilar.MostrarStack();

console.log("< - - - - - - - - - - - - - - - >");

Apilar.DeStack();
Apilar.MostrarStack();