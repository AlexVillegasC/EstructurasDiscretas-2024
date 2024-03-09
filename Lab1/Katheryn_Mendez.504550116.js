function esPalindromo(frase) {
    let fraseLimpia = frase.toLowerCase().replace(/[^a-z]/g, '');// remueve cosas en blanco
    //compara la cadena original con la revertidaaa jajaj y el split que es para separar
    let FraseRevertida = '';

    for (let i=fraseLimpia.length-1; i>=0; i--){
        FraseRevertida+= fraseLimpia[i];
    }

    return fraseLimpia === FraseRevertida;
}

console.log("Anita lava la tina"); // true
let result = esPalindromo("Anita lava la tina");
console.log(result);

console.log("Hola mundo");
result = esPalindromo("Hola mundo");
console.log(result);