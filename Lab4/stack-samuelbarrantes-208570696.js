// Task

class Task{
    constructor(){
        this.Array = [];
    }
    push(element){

         this.Array.push(element);
         console.log(this.Array);
       
    }
    pop(){
        this.Array.pop();
        console.log(this.Array);
        
    }
    taskeach(){
        this.Array.forEach(element => {
            console.log(element);
        });
    }
}
const task = new Task();
task.push(1);
task.push(2);
task.push(3);
task.pop();
task.taskeach();





