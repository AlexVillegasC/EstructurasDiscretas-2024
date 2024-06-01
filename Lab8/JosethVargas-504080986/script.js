// Obtén una referencia al cuadro de texto

const miCuadroTxt = document.getElementById('miCuadroTxt');
const miCuadroTxt2 = document.getElementById('miCuadroTx2');
const titulo = document.getElementById('titulo');


// Agrega un evento de escucha para la tecla "Enter"
miCuadroTxt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') 
    {
         const nuevotitulo = miCuadroTxt.value;
         titulo.textContent = nuevotitulo;
        // Obtiene el valor del cuadro de texto
        const textoIngresado = miCuadroTxt.value;

        // Muestra el texto en la consola
        console.log('Texto ingresado:', textoIngresado);
    }
});

// miCuadroTxt2.addEventListener('keydown', (event) => {
//     if (event.key === 'Enter') 
//     {
//         const nuevotitulo = miCuadroTxt.value;
//         titulo.textContent = nuevotitulo;
//     }
// });
