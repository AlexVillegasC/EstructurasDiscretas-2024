class queue
{
 numeros = [];
 
 Enqueue()
 {
    this.numeros.push('1', '2', '3', '4');
 }

 Dequeue()
 {
    console.log("El ultimo numero en entrar es el numero 4");
    console.log(numeros);

    const primernumeroensalir = this.numeros.pop();
    console.log("el primero en salir es ");
    console.log(primeroensalir)
    console.log(this.numeros);
 }


}

const queue = new queue();

queue.Enqueue();
console.log("n\n");

queue.Dequeue();