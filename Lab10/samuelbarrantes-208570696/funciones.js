

document.addEventListener("DOMContentLoaded", function() {

    document.querySelector('button').addEventListener('click', function() {
        const inputNum = document.getElementById("cuadroR").value;
        const resultado = romanToInt(inputNum);
        document.getElementById('resultado').textContent = `El numero natural es: ${resultado}`;
    });

    function romanToInt(valores){

        const romanosList={
            'I' : 1,
            'V' : 5,
            'X' : 10,
            'L' : 50,
            'C' : 100,
            'D' : 500,
            'M' : 1000
        };

        let total = 0; 
        for(let i=0;i < valores.length;i++){
            let current = romanosList[valores[i]];
            let next = romanosList[valores[i+1]];

            if(next>current){
            total += (next - current);
            i++;
            }else{
            total += current;
            }
        }
        return total;
    } 
});
