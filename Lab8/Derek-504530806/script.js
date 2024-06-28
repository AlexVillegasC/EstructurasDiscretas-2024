document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("miCuadroTxt");
    var titulo = document.getElementById("Titulo");

    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            var nuevoTitulo = input.value;
            titulo.textContent = nuevoTitulo;
            alert(nuevoTitulo);
        }// 
    });
});
