class Stack{

    Frutas = [];

    Enqueue(){
        this.Frutas.push("Banano", "mazana", "Pera");
    }

    Dequeu(){
        console.log("El ultimo en entrar es Pera");
        console.log(this.Frutas);

        const primeroEnSalir = this.Frutas.pop();

        console.log("EL primero es en salir es...");
        console.log(primeroEnSalir);
        console.log(this.Frutas);

    }
}

const stack = new Stack();

stack.Enqueue();
console.log("\n\n");

stack.Dequeu();
