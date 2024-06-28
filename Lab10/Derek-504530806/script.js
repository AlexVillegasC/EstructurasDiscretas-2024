document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("miCuadroTxt");
    var titulo = document.getElementById("Titulo");



    let I = 1;
    let V = 5
    let X = 10
    let L = 50
    let C = 100
    let D = 500
    let M = 1000

    function convertirNumeroRomano(numeroRomano) {
        const valores = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };
             let total = 0;
                let anterior = 0;

                for (let i = numeroRomano.length - 1; i >= 0; i--) {
                    let actual = valores[numeroRomano[i]];

                    if (actual >= anterior) {
                        total += actual;
                    } else {
                        total -= actual;
                    }

                    anterior = actual;
                    
                   
                }
                return total;
        }


    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {

        
            let numeroRomano = input.value.trim().toUpperCase();
                let numeroNormal = convertirNumeroRomano(numeroRomano);
                if (numeroNormal < 4000 && numeroNormal >= 1)
                    {
                        alert("El numero normal es:" + numeroNormal); 
                    }
                else
                {
                    alert("El numero es muy potente, no se puede mostrar");
                }
        }// 
    });
});
