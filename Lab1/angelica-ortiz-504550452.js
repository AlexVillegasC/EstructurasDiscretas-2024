function esPalindromo(phrase) {
    // Convertir a minúsculas y eliminar caracteres no alfabéticos
    phrase = phrase.toLowerCase().replace(/\s/g, '');

    // Crear un array con cada carácter de la frase
    let splittedPhrase = phrase.split('');
    let reversePhrase = '';

    // Recorrer el array desde el último al primer elemento
    // Almacenar el string revertido en la variable reversePhrase
    for (let i = splittedPhrase.length - 1; i >= 0; i--) {
        reversePhrase += splittedPhrase[i];
    }

    // Comparar la frase original con la frase revertida
    return phrase === reversePhrase;
}

console.log(esPalindromo("Anita lava la tina")); // true
console.log(esPalindromo("Hola mundo")); // false
