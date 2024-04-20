//STACK

class STACK{
    array=[]
    AddElement(element){
        this.array.push(element);
    }

    TakeOutStack(){
        this.array.pop();
    }

    PrintOut(){
        console.log(this.array + "\n");
    }
}

const myStack = new STACK();

console.log("Agregando....");
myStack.AddElement(34);
myStack.AddElement(65);
myStack.AddElement(78);
myStack.AddElement(90);
myStack.AddElement(12);
myStack.PrintOut();

console.log("Eliminando del stack....\n");
myStack.PrintOut();