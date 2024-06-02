function romanToNatural(_roman) {
    romanNums = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let _natural = 0;
    let prev = 0;

    for (let i = _roman.length - 1; i >=0; i--){
        const element = _roman[i];
        const current = romanNums[element];
        if(current < prev){
            _natural -= current;
        }else{
            _natural += current;
            prev = current;
        }
    }

    return _natural;
}

document.addEventListener("DOMContentLoaded", function(){
    let roman = document.getElementById('ingresar');
    let result = document.getElementById('mostrar');

    document.querySelector(".convert-button").addEventListener("click", function (){
        const numeroRomano = roman.value;
        const numeroNatural = romanToNatural(numeroRomano);
        result.textContent = `Número natural equivalente: ${numeroNatural}`;
    })
})