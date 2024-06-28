function convertRoman() {
    const roman = document.getElementById("inputRoman").value;
    const resultElement = document.getElementById("result");

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

    for (let i = 0; i < roman.length; i++) {
        const currentValue = romanValues[roman[i]];
        const nextValue = romanValues[roman[i + 1]];

        if (nextValue && nextValue > currentValue) {
            result += nextValue - currentValue;
            i++; // Skip the next value as it has been considered
        } else {
            result += currentValue;
        }
    }

    resultElement.textContent = "El número natural equivalente es: " + result;
}
