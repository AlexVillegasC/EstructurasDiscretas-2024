function esPalindromo(phrase)
{
    phrase =phrase.ToLowerCase().replace(/\s/g,''); //Hacer todo minuscula
    //revertir la cadena
    let splittedPhrase =phrase.split('');
    let revertedPhrase="";

    for(let i=splittedPhrase-1;i>=0;i--)
    {
        revertedPhrase-=splittedPhrase[i];
    }

    return phrase  ==revertedPhrase;
}
console.log(esPalindromo("Anita lava la tina")); //true
console.log(esPalindromo("Hola mundo")); //false