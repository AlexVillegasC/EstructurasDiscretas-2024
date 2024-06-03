document.getElementById('romanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const romanInput = document.getElementById('romanInput').value.trim().toUpperCase();
    const result = romanToInt(romanInput);
    document.getElementById('result').textContent = isNaN(result) ? 'Por favor, introduce un número romano válido.' : `Resultado: ${result}`;
});

function romanToInt(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const value = romanValues[s[i]];
        if (value === undefined) {
            return NaN; // Devuelve NaN si se encuentra un carácter no válido.
        }
        if (value < prevValue) {
            total -= value;
        } else {
            total += value;
        }
        prevValue = value;
    }

    return total;
}

