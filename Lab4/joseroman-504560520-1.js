//Queue

class Queue{
    constructor(){
        this.array = [];
    }

    EnQueue(_element){
        this.array.push(_element);
        //console.log(this.array);
    }

    DeQueue(){
        let deQueue = this.array.shift();
        console.log("Se elimino " + deQueue)
        //console.log(this.array);
    }

    PrintQueue(){
       this.array.forEach(element => {
            console.log(element);
       });
        
    }
}

const queue = new Queue();
queue.EnQueue(4);
queue.EnQueue(3);
queue.EnQueue(2);
queue.PrintQueue();
queue.DeQueue();
queue.PrintQueue();