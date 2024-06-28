function calculateRomanNumeral() {
    let numero = document.getElementById("numero").value;
    let result = NumberRoman(numero);
    alert("El valor numérico del número romano es: " + result);
}

function NumberRoman(numero) {
    let romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = 0; i < numero.length; i++) {
        let currentValue = 0;

        for (let key in romanValues) {
            if (numero[i].toUpperCase() === key) {
                currentValue = romanValues[key];
                break;
            }
        }

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    if (result > 3999) {
        alert("No se permiten numeros mayores a MMMCMXCIX!");
    }

    return result;
}