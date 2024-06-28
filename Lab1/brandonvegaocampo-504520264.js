
// DETECTAR PALINDROMO

function esPalindromo(cadena) {

    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, ''); //elimina caracteres no alfabeticos y transforma la cadena en minusculas 
    let cadenaInvertida = cadenaLimpia.split('').reverse().join(''); //invierte la cadena ya limpia de los caracteres especiales
    return cadenaLimpia === cadenaInvertida; //compara la primer cadena ya alterada con la invertida

}

console.log(esPalindromo("Evil is a name of a foeman, as I live")); // la cadena es procesada y en la consola dira si es palidromo (true) o no (false)
console.log(esPalindromo("Ana limpia la casa"));
console.log(esPalindromo("Mariposa"));