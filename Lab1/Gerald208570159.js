function esPalindromo2(phrase)
{
    phrase = phrase.toLowerCase();// hacer todo minuscula
    phrase = phrase.replace(/\s/g, '');       //remover caracteres en bkanco
    let splittedPhrase = phrase.split('');    // revertir la cadena
    let revertida = '';

    for (let i = splittedPhrase.length-1; i >= 0; i--)
    {
        revertida += splittedPhrase[i];
    }

    if(revertida == phrase)
    {
        return true ;
    }
    else
    {
        return false;
    }
}
console.log(esPalindromo2("Anita lava la tina"));
console.log(esPalindromo2("Hola mundo"));