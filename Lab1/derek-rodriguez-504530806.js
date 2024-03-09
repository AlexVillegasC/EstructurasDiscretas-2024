function esPalindromo2(phrase)
{
    phrase = phrase.toLowerCase();// hacer todo minuscula
    //remover caracteres en bkanco
    phrase = phrase.replace(/\s/g, '');
    // revertir la cadena
   
    let splittedPhrase = phrase.split('');
    let revertida = '';

    for (let i = splittedPhrase.lenght-1; i >= 0; i--)
    {
        revertida += splittedPhrase[i];
    }

    if(revertida == cadena)
    {
        return true ;
    }
    else
    {
        return false;
    }
}