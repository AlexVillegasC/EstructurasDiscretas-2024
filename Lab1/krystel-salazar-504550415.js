function esPalindromo (phrase){
    //convertir a minusculas y remover caracteres no alfabeticos incluyendo 
    phrase = phrase.toLowerCase().replace(/\s /g, '');

    //Revertir la cadena
    let splittedPhrase = phrase. split('');
    let reversePhrase = ' ';

    //Recorrer el Array 'cadenaEnArray' desde el ultimo al primer elemento 
    //Almacenar el string revertido en la variable  revertedString
    for(let i=splittedPhrase-1; i>=0; i--){

        reversePhrase += splittedPhrase[i];
    }

        return splittedPhrase == reversePhrase;
    
    
    }
    console.log(esPalindromo("Anita lava la tina")); // true
    console.log(esPalindromo("Hola mundo")); // false