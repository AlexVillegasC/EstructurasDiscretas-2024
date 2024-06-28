const romanInput = document.getElementById('romanInput');
const convertButton = document.getElementById('convertButton');
const outputText = document.getElementById('outputText');

const romanValues = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanToInt(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const currentValue = romanValues[str[i]];
        const nextValue = romanValues[str[i + 1]] || 0;

        if (currentValue < nextValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }
    }
    return result;
}

convertButton.addEventListener('click', () => {
    const romanNumber = romanInput.value.toUpperCase();
    const naturalNumber = romanToInt(romanNumber);
    outputText.textContent = `${romanNumber} = ${naturalNumber}`;
});