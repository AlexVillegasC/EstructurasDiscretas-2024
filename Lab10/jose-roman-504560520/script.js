document.getElementById("buttonCalculo").addEventListener("click", function() {
    var numeroRomano = document.getElementById("miNumeroTxt").value;

    if(numeroRomano === ""){
        alert("Por favor, rellene el campo!!");
        return ;
    }

    console.log("Valor ingresado: " + numeroRomano);

    function romanoANumero(romano) {
        const valoresRomanos = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

        // Validar que el número romano esté dentro del rango permitido
        const maxRomano = "MMMCMXCIX";
        if (romano > maxRomano) {
            return "Error: Numero romano fuera del rango permitido (1-3999)";
        }
    
        let numero = 0;
        let longitud = romano.length;
    
        for (let i = 0; i < longitud; i++) {
            let valorActual = valoresRomanos[romano[i]];
            let valorSiguiente = valoresRomanos[romano[i + 1]];
    
            if (valorSiguiente && valorActual < valorSiguiente) {
                numero -= valorActual;
            } else {
                numero += valorActual;
            }
        }
    
        return numero;
    }
    
    var numeroNormal = romanoANumero(numeroRomano);

    var nombreParrafo = document.getElementById("show1");
    nombreParrafo.textContent = numeroNormal;
    
});
