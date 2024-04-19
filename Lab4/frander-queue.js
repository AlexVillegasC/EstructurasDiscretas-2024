class Queue{

    Frutas = [];

    Enqueue(){
        this.Frutas.push("Banano", "mazana", "Pera");
    }

    Dequeau(){

        console.log("EL primero en entrar es banana...");
        console.log(this.Frutas);

        const PrimeroEnSalir = this.Frutas.shift();

        console.log("El primero en salir es...");
        console.log(PrimeroEnSalir)
        console.log(this.Frutas);
    }
    

}

const queue = new Queue();

queue.Enqueue();
console.log("\n\n");

queue.Dequeau();
