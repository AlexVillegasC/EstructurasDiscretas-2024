function convertir() {
    var romanNumber = document.getElementById('romanNumber').value;
    var number = romanToNumber(romanNumber);
    document.getElementById('result').innerText = "El número es: " + number;
}
function convertir() {
    var romanNumber = document.getElementById('romanNumber').value;
    var number = romanToNumber(romanNumber);
    document.getElementById('result').innerText = "El número es: " + number;
}

function romanToNumber(roman) {
    // Objeto que mapea los caracteres romanos a sus valores numéricos correspondientes
    var romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    var number = 0;

    // Iterar sobre cada carácter del número romano
    for (var i = 0; i < roman.length; i++) {
        var currentValue = romanNumerals[roman[i]];
        var nextValue = romanNumerals[roman[i + 1]];

        // Si hay un siguiente valor y es mayor, restar el valor actual
        if (nextValue !== undefined && nextValue > currentValue) {
            // Restar el valor actual y avanzar al siguiente par de caracteres
            number += (nextValue - currentValue);
            i++; // Avanzar al siguiente par de caracteres
        } else {
            // De lo contrario, sumar el valor actual
            number += currentValue;
        }
    }

    return number;
}

