function esPalindromo(cadena) {
     // Guardar la cadena original para imprimirla después
     const cadenaOriginal = cadena;
 
     // Convertir a minúsculas y remover caracteres no alfabéticos incluyendo espacios.
     cadena = cadena.toLowerCase().replace(/[^a-z0-9]/gi, '');
 
     // Revertir la cadena usando un bucle for
     let cadenaSplitted = cadena.split('');
     let cadenaRevertida = "";
 
     for (let i = cadenaSplitted.length - 1; i >= 0; i--) {
         cadenaRevertida += cadenaSplitted[i];
     }
 
     // Comparar la cadena original con la revertida
     if (cadenaRevertida == cadena) {
         console.log(`Es palíndromo: ${cadenaOriginal}`);
         return true;
     } else {
         console.log(`No es palíndromo: ${cadenaOriginal}`);
         return false;
     }
 }
 
 // Pruebas
 esPalindromo("Anita lava la tina"); // Es palíndromo: Anita lava la tina
 esPalindromo("Hola mundo"); // No es palíndromo: Hola mundo
 