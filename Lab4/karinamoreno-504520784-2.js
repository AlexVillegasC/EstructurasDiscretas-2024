// stack


class Stack{
    constructor(){
        this.array = [];
    }

    add (num){
        this.array.push(num);
    }
    
    remove (){
        this.array.pop();
    }

    showStack(){
        this.array.forEach(element => {
            console.log(element)
        });
    }
}

let stack = new Stack();
stack.add(2);
stack.add(4);
stack.add(9);
stack.showStack();
console.log("-- pop --");
stack.remove();
stack.showStack();