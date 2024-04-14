function esPalindromo(cadena)
{

   cadena = cadena.toLowerCase().replace(/\s/g, ''); // se eliminan los espacios 
   let cadenaRevertida = cadena.split('').reverse().join(''); // se revierte la cadena 
   return cadena === cadenaRevertida; // se compara la cadena original con la revertida 

   
}

console.log(esPalindromo("Anita lava la tina")); 
console.log(esPalindromo("Hola mundo")); 