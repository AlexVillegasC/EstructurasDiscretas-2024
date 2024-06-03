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
    
    let result = 0;
    let prevValue = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        const value = romanValues[s[i]];
        
        if (value < prevValue) {
            result -= value;
        } else {
            result += value;
        }
            
        prevValue = value;
    }
    
    return result;
}

function convertir() {
    const romanInput = document.getElementById('romanInput').value.toUpperCase();
    const resultado = document.getElementById('resultado');
    
    if (romanInput === '') {
        resultado.textContent = 'Por favor, introduce un número romano.';
    } else {
        const decimal = romanToInt(romanInput);
        resultado.textContent = `El número decimal equivalente es: ${decimal}`;
    }
}
