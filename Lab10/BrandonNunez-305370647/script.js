function convertRomanToDecimal() {
    const romanNumber = document.getElementById('romanNumberInput').value.toUpperCase();
    const romanNumerals = {
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

    for (let i = romanNumber.length - 1; i >= 0; i--) {
        const currentValue = romanNumerals[romanNumber[i]];
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
        prevValue = currentValue;
    }

    document.getElementById('result').innerText = result;
}
