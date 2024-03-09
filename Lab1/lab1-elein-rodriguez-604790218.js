

function esPalindromo(cadena)
{
   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   cadena = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');

   // Revertir la cadena
   let cadenaSplitted = cadena.split('');

   let cadenaRevertida = "";

   //reverse usando for
   for(let i = (cadenaSplitted.length - 1); i>= 0; i--)
    {
        cadenaRevertida += cadenaSplitted[i];
    }

   // Comparar la cadena original con la revertida
   return cadena === cadenaRevertida;
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false