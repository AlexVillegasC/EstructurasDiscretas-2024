
//

function esPalindromo(cadena)
{
   // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios
   cadena = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');

   // Revertir la cadena
   let cadenaRevertida = cadena.split('').reverse().join('');

   // Comparar la cadena original con la revertida
   return cadena === cadenaRevertida;
}

// function esPalindrome(cadena){
//     cadena = cadena.toLowerCase();
//      cadena = cadena.replace(/\s/g, '');
//      cadena = cadena.replace(/[^a-zA-Z0-9 ]/g, '');
//      cadena = cadena.split('');
//      let newCadena = cadena.reverse();
//      newCadena = newCadena.join('');
//      cadena = cadena.join('');

//      return cadena == newCadena;
// }

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("OSO")); // true
//console.log(esPalindromo("Hola mundo")); // false