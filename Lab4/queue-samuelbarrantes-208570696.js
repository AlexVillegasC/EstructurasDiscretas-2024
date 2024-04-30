//Queue

//firts in 
// firts out

class Queue{
    constructor(){
        this.Array = [];
    }
    push(element){

         this.Array.push(element);
         console.log(this.Array);
       
    }
    shift(){
        this.Array.shift();
        console.log(this.Array);
        
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





