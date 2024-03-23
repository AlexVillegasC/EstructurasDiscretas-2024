function esPalindromo(cadena)
{
   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   cadena = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');

   // Revertir la cadena
   let cadenaRevertida = cadena.split('').reverse().join('');

   //Ahora revertir con un ciclo for
   let Splittedphrase = phrase.split("");
    let revertedphrase = "";

    for (let i = Splittedphrase.length - 1; i >= 0; i--)
    {    
        revertedphrase += Splittedphrase[i];
    }
    return cadena === revertedphrase;

   

}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false
console.log(esPalindromo("A man, a plan a canal, Panama!")) //true
console.log(esPalindromo("aaaa")) //true

