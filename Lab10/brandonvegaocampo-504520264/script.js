document.getElementById('roman-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const romanInput = document.getElementById('roman-input').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    const decimal = romanToDecimal(romanInput);

    if (decimal !== null) {
        resultDiv.textContent = `El número decimal es: ${decimal}`;
    } else {
        resultDiv.textContent = 'Número romano inválido.';
    }

});

function romanToDecimal(roman) {
    const romanNumerals = {

        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000

    };

    let decimal = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {

        const currentValue = romanNumerals[roman[i]];

        if (!currentValue) {
            return null; // Retorna null si el carácter no es un numeral romano válido
        }

        if (currentValue < prevValue) {
            decimal -= currentValue;
        } else {
            decimal += currentValue;
        }

        prevValue = currentValue;

    }

    return decimal;
    
}