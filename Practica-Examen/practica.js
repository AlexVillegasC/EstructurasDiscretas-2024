
// let N = 20;
// for(i = 1; i < N; i++)
// {
//     console.log("Hello world");
// } //Imprime en pantalla: 9 
//--------------------------------------------------------------------------

// let N = 20;
// for(i = 1; i < N; i = i * 2)
// {
//     console.log("Hello world");
// }//Imprime en pantalla: 
//--------------------------------------------------------------------------

function logFunction(n, count = 0) {    
    if (n === 1) {
        return count;
    }
    n = Math.floor(n / 2);
    return logFunction(n, count + 1);
}
console.log(logFunction(8));

// function determinarSaludo(hora) {

//     if (hora >= 6 && hora < 12) {
//         return "¡Buenos días!";
//     } else if (hora >= 12 && hora < 18) {
//         return "¡Buenas tardes!";
//     } else if (hora >= 18 && hora < 24) {
//         return "¡Buenas noches!";
//     } else if (hora >= 0 && hora < 6) {
//         return "¡Es muy temprano, vuelve a dormir!";
//     } else {
//         return "Hora no válida";
//     }
// }

// determinarSaludo(9);
//--------------------------------------------------------------------------

// function haceAlgo(array) {
//     let arrayRevertido = [];
//     for(let i = array.length - 1; i >= 0; i--) {
//         arrayRevertido.push(array[i]);
//     }
//     return arrayRevertido;
// } 
//--------------------------------------------------------------------------

// function nombre() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// nombre();
//--------------------------------------------------------------------------

// function desconocido(array) {
//     const length = array.length;

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length - i - 1; j++) {
//             if (array[j] < array[j + 1]) {
//                const temp = array[j];
//                array[j] = array[j + 1];
//                array[j + 1] = temp;
//            }
//        }
//     }
//    return array;
//
