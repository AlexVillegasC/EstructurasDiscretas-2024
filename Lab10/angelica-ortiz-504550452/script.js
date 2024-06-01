function convertir() {
    var romanNumber = document.getElementById('romanNumber').value;
    var number = romanToNumber(romanNumber);
    document.getElementById('result').innerText = "El número natural equivalente es: " + number;
}

function romanToNumber(roman) {
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

    for (var i = 0; i < roman.length; i++) {
        var currentValue = romanNumerals[roman[i]];
        var nextValue = romanNumerals[roman[i + 1]];

        if (nextValue && nextValue > currentValue) {
            // Si el siguiente valor es mayor, restamos el valor actual
            number -= currentValue;
        } else {
            // Si no, sumamos el valor actual
            number += currentValue;
        }
    }

    return number;
}
 