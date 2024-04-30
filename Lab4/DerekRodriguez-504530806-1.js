// Queue 
class Queue
{
    constructor()
    {
        this.Numbers = [1,2,3,4,5]
    }

    EnQueue (element) 
     {      
        this.Numbers.push(element);
    }

    DeQueue()
    {
        this.Numbers.shift()
    }

    printQueue ()
    {
        this.Numbers.forEach(element =>
        {
            console.log(element )
            
        });
    }

}


const queue = new Queue()

for (let i = 0; i <= 10; i++)
{
    if (i != queue)
    {
        let element = i + 6;

        
        queue.EnQueue(element);
    
        console.log(queue.printQueue());
        queue.DeQueue();
    }

    console.log("---------------------------------")
}








