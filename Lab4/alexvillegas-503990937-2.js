// Stack

class Stack 
{
    constructor()
    {
        this.array = [];
    }

    Push(element)
    {
        this.array.push(element);
    }

    Pop()
    {
        this.array.pop();
    }

    PrintStack()
    {
        this.array.forEach(element => {
            console.log(element);
        });
    }
}


function factorial(n) {
    if (n >= 6) {
      return 1;
    } else {
      let subSolution = factorial(n - 1);
      let solution = subSolution * n;
      return solution;
    }
  }
  
  console.log(factorial(1000000000));