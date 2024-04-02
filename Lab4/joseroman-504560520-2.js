//Stack

class Stack{
    constructor(){
        this.array = [];
    }

    EnStack(_element){
        this.array.push(_element);
    }

    DeStack(){
        let deStack = this.array.pop();
        console.log("Se elimino " + deStack)
    }

    PrintStack(){
        this.array.forEach(element => {
             console.log(element);
        });
         
     }

}

const stack = new Stack();
stack.EnStack('perro');
stack.EnStack('gato');
stack.EnStack('loro');
stack.PrintStack();
stack.DeStack();
stack.PrintStack();