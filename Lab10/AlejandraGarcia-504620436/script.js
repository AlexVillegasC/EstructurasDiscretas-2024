// Función para convertir un número romano en un número natural
function convertRomanToInteger() {
    const romanValues = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    const romanNumberInput = document.getElementById('romanNumber');
    const romanNumber = romanNumberInput.value.toUpperCase();
    let result = 0;
    let prevValue = 0;

    // Recorrer el número romano y calcular el resultado
    for (let i = 0; i < romanNumber.length; i++) {
        const value = romanValues[romanNumber[i]];
        if (value > prevValue) {
            result += value - 2 * prevValue;
        } else {
            result += value;
        }
        prevValue = value;
    }

    // Mostrar el resultado en la página
    const resultElement = document.getElementById('result');
    resultElement.innerText = `El número entero equivalente es: ${result}`;

    // Limpiar el campo de entrada después de la conversión
    romanNumberInput.value = '';
}

// Función para convertir un número natural en un número romano
function convertIntegerToRoman() {
    const integerNumberInput = document.getElementById('integerNumber');
    const integerNumber = parseInt(integerNumberInput.value);
    let result = '';
    let remaining = integerNumber;

    // Definir los valores y símbolos romanos
    const romanSymbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    // Construir el número romano
    for (let i = 0; i < romanValues.length; i++) {
        while (remaining >= romanValues[i]) {
            result += romanSymbols[i];
            remaining -= romanValues[i];
        }
    }

    // Mostrar el resultado en la página
    const resultElement = document.getElementById('result');
    resultElement.innerText = `El número romano equivalente es: ${result}`;

    // Limpiar el campo de entrada después de la conversión
    integerNumberInput.value = '';
}

// Manejar la pulsación de la tecla "Enter" en el campo de entrada de número romano
document.getElementById('romanNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertRomanToInteger();
    }
});

// Manejar la pulsación de la tecla "Enter" en el campo de entrada de número natural
document.getElementById('integerNumber').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        convertIntegerToRoman();
    }
});

// Manejar el clic en el botón de conversión de número romano
document.getElementById('convertRomanButton').addEventListener('click', function() {
    convertRomanToInteger();
});

// Manejar el clic en el botón de conversión de número natural
document.getElementById('convertIntegerButton').addEventListener('click', function() {
    convertIntegerToRoman();
});


