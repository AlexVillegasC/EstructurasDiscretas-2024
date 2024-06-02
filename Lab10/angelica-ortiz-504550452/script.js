function convertir() {
    var romanNumber = document.getElementById('romanNumber').value;
    var number = numberToRoman(romanNumber);
    document.getElementById('result').innerText = "El número natural equivalente es: " + number;
}

function numberToRoman(romano) {
    const convert = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };
    
      // initialize the sum
      let number = 0;
    
      // the previous symbol value
      let previous = 0;
    
      // loop through Roman numeral symbols
      for (let i = 0; i < romano.length; i++) {
        // get the converted value and handle unknown symbols
        const current = convert[romano[i]] ?? 0;
    
        // add the current symbol value
        number += current;
    
        // if the left-side symbol is a subtractive notation
        if (previous < current) {
          // undo the wrongly added number and subtract the left-side value
          number -= previous + previous;
        }
    
        // the current value is the left-side value for the next loop
        previous = current;
      }
      
      return number;
}


    // var romanNumerals = {
    //     'I': 1,
    //     'V': 5,
    //     'X': 10,
    //     'L': 50,
    //     'C': 100,
    //     'D': 500,
    //     'M': 1000
    // };

    // var number = 0;

    // for (var i = 0; i < roman.length; i++) {
    //     var currentValue = romanNumerals[roman[i]];
    //     var nextValue = romanNumerals[roman[i + 1]];

    //     if (nextValue && nextValue > currentValue) {
    //         // Si el siguiente valor es mayor, restamos el valor actual
    //         number -= currentValue;
    //     } else {
    //         // Si no, sumamos el valor actual
    //         number += currentValue;
    //     }
    // }

    // return number;

 