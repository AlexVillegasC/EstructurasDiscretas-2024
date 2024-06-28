function convertRomanNumeral() {
    const romanNumeral = document.getElementById('romanNumeral').value.toUpperCase();
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

    for (let i = 0; i < romanNumeral.length; i++) {
        if (i < romanNumeral.length - 1 && romanNumerals[romanNumeral[i]] < romanNumerals[romanNumeral[i + 1]]) {
            result -= romanNumerals[romanNumeral[i]];
        } else {
            result += romanNumerals[romanNumeral[i]];
        }
    }

    document.getElementById('result').innerText = result;
}