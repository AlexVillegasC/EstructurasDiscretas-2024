// Explicar cual es esta estructura de datos y como se comporta.
// Crear un nuevo Map
let mapa = new Map();

// Agregar una clave y un valor al Map
mapa.set("producto", "Ordenador");

// Obtener el valor asociado con la clave "producto"
console.log(mapa.get("producto")); // imprime: "Ordenador"


// Explicar, como se puede recorrer un Hash Map, paso a paso.
// Agregar más pares clave-valor al Map
mapa.set("precio", 1200);
mapa.set("marca", "Dell");

// Recorrer el Map usando forEach
mapa.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor: ${valor}`);
});

// Salida esperada:
// Clave: producto, Valor: Ordenador
// Clave: precio, Valor: 1200
// Clave: marca, Valor: Dell


// Explicar el siguiente ejemplo:
// Array de ejemplo con duplicados
let arr = [5, 10, 5, 15, 20, 10, 25, 30, 35, 25, 30, 35, 40, 45, 40];

// Contar duplicados en el array
let duplicados = contarDuplicados(arr);

// Imprimir los números duplicados y su cantidad
for (let [num, count] of duplicados) {
    console.log(`Número: ${num}, Cantidad: ${count}`);
}

// Salida esperada:
// Número: 5, Cantidad: 2
// Número: 10, Cantidad: 2
// Número: 25, Cantidad: 2
// Número: 30, Cantidad: 2
// Número: 35, Cantidad: 2
// Número: 40, Cantidad: 2


// Imprimir los números duplicados y su cantidad
function contarDuplicados(arr) {
    // Crear un Map vacío
    let mapa = new Map();

    // Recorrer el array
    for (let i = 0; i < arr.length; i++) {
        // Si el número ya está en el Map, incrementar su contador
        if (mapa.has(arr[i])) {
            mapa.set(arr[i], mapa.get(arr[i]) + 1);
        } else {
            // Si el número no está en el Map, agregarlo con un contador de 1
            mapa.set(arr[i], 1);
        }
    }

    // Crear un nuevo Map para guardar sólo los números duplicados
    let duplicados = new Map();

    // Recorrer el Map original
    for (let [num, count] of mapa) {
        // Si el contador es mayor a 1, el número está duplicado
        if (count > 1) {
            duplicados.set(num, count);
        }
    }

    return duplicados;
}


/**Crear un Map vacío:

Se inicializa un Map llamado mapa para almacenar los números del array y su cantidad de apariciones.
Recorrer el array:

Se itera sobre cada elemento del array arr.
Si el número ya está en el Map, se incrementa su contador.
Si el número no está en el Map, se agrega con un contador de 1.
Crear un nuevo Map para guardar sólo los números duplicados:

Se inicializa un segundo Map llamado duplicados para almacenar únicamente los números que aparecen más de una vez.
Recorrer el Map original:

Se itera sobre el Map original mapa.
Para cada número con un contador mayor a 1, se agrega al Map de duplicados.
Retornar el Map de duplicados:

Finalmente, se retorna el Map que contiene los números duplicados y su cantidad de apariciones. */