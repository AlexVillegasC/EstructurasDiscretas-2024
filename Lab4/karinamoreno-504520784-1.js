// queue 

class Queue{
    constructor(){
        this.array = [];
    }

    enQueue(num){
        this.array.push(num)
        console.log(this.array)
    }

    deQueue(){
        this.array.shift()
    }

    showQueue(){
        this.array.forEach(num => {
            console.log(num);
        });
    }
}

const queues = new Queue()
queues.enQueue(2)
queues.enQueue(5)
queues.showQueue()
console.log("-- dequeue --")
queues.deQueue()
queues.showQueue()