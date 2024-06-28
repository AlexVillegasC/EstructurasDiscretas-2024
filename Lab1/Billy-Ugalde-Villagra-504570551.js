
// Palindromo

function esPalindromo(cadena) {

    let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, ''); //elimina caracteres no alfabeticos y transforma la cadena en minusculas 
    let cadenaInvertida = cadenaLimpia.split('').reverse().join(''); //invierte la cadena ya limpia de los caracteres especiales
    return cadenaLimpia === cadenaInvertida; //compara la primer cadena

}

console.log(esPalindromo("Oso")); // salida es true ya que oso al reves dice lo mismo