class queue
{
 numeros = [];
 
 Enqueue()
 {
    this.numeros.push('1', '2', '3', '4');
 }

 Dequeue()
 {
    console.log("El primer numero en entrar es el numero 1");
    console.log(numeros);

    const primernumeroensalir = this.numeros.shift();
    console.log("el primero en salir es ");
    console.log(primeroensalir)
    console.log(this.numeros);
 }


}

const queue = new queue();

queue.Enqueue();
console.log("n\n");

queue.Dequeue();