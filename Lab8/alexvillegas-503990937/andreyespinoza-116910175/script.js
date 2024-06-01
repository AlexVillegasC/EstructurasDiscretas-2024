let Escribir = document.getElementById('miCuadroTxt');
let Mostrar = document.getElementById('ContainerSaves');
Escribir.addEventListener('input', function(){

    Mostrar.textContent = Escribir.value;

});