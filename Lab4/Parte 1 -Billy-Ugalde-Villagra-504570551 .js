class Queue{
    
    constructor() {
        this.array = [];
    }

     EnQueue(element) {
         this.array.push(element);
    } 
    
    Dequeun() {
        return this.array.shift();
    }
    printQueuen() {
        this.array.forEach(element => {
            console.log(element)
        });
    }
}
const myQueue = new Queue();
myQueue.EnQueue(10);
myQueue.EnQueue(7);
myQueue.EnQueue(3);
myQueue.Dequeun();
myQueue.printQueuen();
