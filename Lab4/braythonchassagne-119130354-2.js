class Stack
{
 numeros = [];
 
 stack()
 {
    this.numeros.push('1', '2', '3', '4');
 }

 stack()
 {
    console.log("El ultimo numero en entrar es el numero 4");
    console.log(numeros);

    const primernumeroensalir = this.numeros.pop();
    console.log("el primero en salir es ");
    console.log(primeroensalir)
    console.log(this.numeros);
 }


}

const stack = new stack();

stack.Enqueue();
console.log("n\n");

queue.Dequeue();