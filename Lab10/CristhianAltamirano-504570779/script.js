const numberInput = document.getElementById('number-input');
const resultOutput = document.getElementById('result-output');
const exampleOutput = document.getElementById('example-output');
const convertBtn = document.getElementById('convert-btn');
const conversionTypeRadios = document.getElementsByName('conversion-type');

const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

const romanPattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

function romanToNatural(roman) {
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const currentValue = romanValues[roman[i]];
        const nextValue = romanValues[roman[i + 1]] || 0;
        if (nextValue > currentValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }
    return result;
}

function isValidRoman(roman) {
    return romanPattern.test(roman);
}

function naturalToRoman(natural) {
    let result = '';
    for (const [roman, value] of Object.entries(romanValues)) {
        while (natural >= value) {
            result += roman;
            natural -= value;
        }
    }
    return result;
}

function convertNumber() {
    const inputValue = numberInput.value.trim();
    let conversionType = Array.from(conversionTypeRadios).find(radio => radio.checked).value;

    if (conversionType === 'natural-to-roman') {
        const natural = parseInt(inputValue);
        if (isNaN(natural) || natural <= 0 || natural > 3999) {
            alert('Ingresa un numero natural valido entre 1 y 3999');
            return;
        }
        const romanNumber = naturalToRoman(natural);
        resultOutput.value = romanNumber;
        exampleOutput.textContent = '(Ej: 1994)';
    } else {
        const roman = inputValue.toUpperCase();
        if (!isValidRoman(roman)) {
            alert('Ingresa un numero romano valido');
            return;
        }
        const naturalNumber = romanToNatural(roman);
        resultOutput.value = naturalNumber;
        exampleOutput.textContent = '(Ej: MCMXCIV)';
    }
}

numberInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        convertNumber();
    }
});

conversionTypeRadios.forEach(radio => {
    radio.addEventListener('change', convertNumber);
});

convertBtn.addEventListener('click', convertNumber);