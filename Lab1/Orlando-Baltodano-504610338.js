function esPalindromo(cadena)
{
   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   cadena = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');

   // Revertir la cadena
   let cadenaRevertida = cadena.split('').reverse().join('');

   //Ahora revertir con un for
   let Splittedphrase = phrase.split("");
    let revertedphrase = "";

    for (let i = Splittedphrase.length - 1; i >= 0; i--)
    {    
        revertedphrase += Splittedphrase[i];
    }
    return phrase === revertedphrase;


    // Comparar la cadena original con la revertida
    return cadena === cadenaRevertida;
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false