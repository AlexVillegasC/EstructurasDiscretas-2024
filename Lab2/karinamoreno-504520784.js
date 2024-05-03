//diferencias entre var, let y const + ejemplo

var seller = "vendo pan";
var num = 5;

if (num >= 4){
    seller = "vendo arroz";
}

//las variables var se pueden redeclaradas y actualizar sin importar su bloque

console.log(seller)

let student = "estudiante de inglés";
let num2 = 5;

if (num2> 4){
    let student = "estudiante de cálculo";                    
    console.log(student);
}

// las variables let pueden ser actualizadas pero no redeclardas

console.log(student);

const age = dieciocho;
// las variables const deben ser incializadas al ser declaradas
// estas variables no pueden ser actualizadas
// si intentara redefinir la variable y mostrarla, el programa daría error