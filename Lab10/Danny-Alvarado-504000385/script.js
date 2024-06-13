function romanToInteger(roman) {
    const romanToValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentVal = romanToValue[roman[i]];
        const nextVal = romanToValue[roman[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result -= currentVal;
        } else {
            result += currentVal;
        }
    }
    return result;
}

function isValidRoman(roman) {
    const romanPattern = /^(?=[MDCLXVI])M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return romanPattern.test(roman);
}

function convertRoman() {
    const input = document.getElementById('romanInput').value;
    const upperInput = input.toUpperCase();
    const resultElement = document.getElementById('result');

    if (input !== upperInput) {
        resultElement.innerText = 'Por favor, ingrese las letras en mayúsculas.';
        resultElement.style.opacity = 0;
        setTimeout(() => { resultElement.style.opacity = 1; }, 10);
        return;
    }

    if (!isValidRoman(input)) {
        resultElement.innerText = 'Número romano no válido. Asegúrese de que el número romano sea correcto.';
        resultElement.style.opacity = 0;
        setTimeout(() => { resultElement.style.opacity = 1; }, 10);
        return;
    }

    const result = romanToInteger(input);
    resultElement.innerText = `El número es: ${result}`;
    resultElement.style.opacity = 0;
    setTimeout(() => { resultElement.style.opacity = 1; }, 10);
}
