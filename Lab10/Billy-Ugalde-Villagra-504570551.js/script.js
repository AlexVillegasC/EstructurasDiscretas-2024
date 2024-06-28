document.getElementById('romanInput').addEventListener('input', function() {
    const romanInput = document.getElementById('romanInput').value.toUpperCase();
    const result = romanToInt(romanInput);
    document.getElementById('result').textContent = result !== null ? `El número natural es: ${result}` : 'Entrada inválida';
});

function romanToInt(s) {
    const romanToValue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    const RomanoValido = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!RomanoValido.test(s)) {
        return null; // Entrada inválida
    }

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = romanToValue[s[i]];
        if (current >= prevValue) {
            total += current;
        } else {
            total -= current;
        }
        prevValue = current;
    }

    return total;
}
