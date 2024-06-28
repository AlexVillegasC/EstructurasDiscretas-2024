// Obtén una referencia al cuadro de texto

const miCuadroTxt = document.getElementById('miCuadroTxt');
const titulo = document.getElementById('titulo');

////////////////////////////////////////////////////////////

function romanToNatural(roman) {
    const romanNumerals = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++; // Skip the next character
        } else {
            result += current;
        }
    }

    return result;
}

///////////////////////////////////////////////////////////////////////////////////

// Agrega un evento de escucha para la tecla "Enter"
miCuadroTxt.addEventListener('keydown', (event) => 
    {
    if (event.key === 'Enter') 
    {
         const romanNumber = miCuadroTxt.value; // OBTENGO EL DATO
         const naturalNumber = romanToNatural(romanNumber);

         console.log(`El número romano ${romanNumber} es igual a ${naturalNumber}.`);


         //const nuevotitulo = miCuadroTxt.value;
         alert("El valor equivalente al numero natural es: "+ naturalNumber);

         //titulo.textContent = nuevotitulo;
        // Obtiene el valor del cuadro de texto
        const textoIngresado = miCuadroTxt.value;

        // Muestra el texto en la consola
        console.log('Texto ingresado:', naturalNumber);
    }
});


