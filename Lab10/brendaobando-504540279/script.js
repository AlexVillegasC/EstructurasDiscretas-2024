function convertRoman() {
    const romanInput = document.getElementById('romanInput').value.toUpperCase();
    const resultElement = document.getElementById('result');
    
    // Mapa de valores romanos a enteros
    const romanToIntMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    // Verificar si la entrada está en el rango permitido
    const validRomanNumerals = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    if (!validRomanNumerals.test(romanInput)) {
        resultElement.textContent = 'Entrada no válida. Ingresa un número romano válido entre I y MMMCMXCIX.';
        return;
    }

    let total = 0;
    let prevValue = 0;

    // Recorrer la cadena de entrada de derecha a izquierda
    for (let i = romanInput.length - 1; i >= 0; i--) {
        const currentValue = romanToIntMap[romanInput[i]];

        // Aplicar la lógica de suma y resta
        if (currentValue >= prevValue) {
            total += currentValue;
        } else {
            total -= currentValue;
        }
        
        prevValue = currentValue;
    }

    resultElement.textContent = `Resultado: ${total}`;
}