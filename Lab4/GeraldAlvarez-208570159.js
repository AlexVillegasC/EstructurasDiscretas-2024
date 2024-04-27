//Queue

//firts in 
// firts out

class Queue{
    constructor(){
        this.Array = [];
    }
    push(element){

         this.Array.push(element);
       
    }
    shift(){
        this.Array.shift();
        
    }
    queue(){
        this.Array.forEach(element => {
            console.log(element);
        });
    }
}
const newQueue = new Queue();
newQueue.push(1);
newQueue.push(2);
newQueue.push(3);
newQueue.shift();
newQueue.queue();  