function encontrarContactosRepetidos(agenda) {
    // Crear un Map vacío para almacenar los números de teléfono y sus ocurrencias
    let mapaNumeros = new Map();

    // Crear un Map vacío para almacenar los nombres de personas y sus ID
    let mapaPersonas = new Map();

    // Recorrer cada entrada en la agenda
    for (let entrada of agenda) {
        let numero = entrada.numero;
        let persona = entrada.persona;
        let id = entrada.id;

        // Si el número ya está en el Map, incrementar su contador
        if (mapaNumeros.has(numero)) {
            mapaPersonas.get(numero).push({ nombre: persona, id: id });
            mapaNumeros.set(numero, mapaNumeros.get(numero) + 1);
        }
        // Si el número no está en el Map, agregarlo con un contador de 1
        else {
            mapaPersonas.set(numero, [{ nombre: persona, id: id }]);
            mapaNumeros.set(numero, 1);
        }
    }
    
    // Crear un nuevo Map para guardar sólo los números de teléfono duplicados
    let numerosRepetidos = new Map();

    // Recorrer el Map original de números de teléfono
    for (let [numero, cantidad] of mapaNumeros) {
        // Si la cantidad es mayor a 1, el número de teléfono está repetido
        if (cantidad > 1) {
            // Mostrar en la consola el nombre, el id y la cantidad de contactos repetidos en columnas
            console.log(`Número:\t\tID:\tNombre:`);
            console.log("---------------------------------------------");
            for (let contacto of mapaPersonas.get(numero)) {
                console.log(`${numero}\t${contacto.id}\t${contacto.nombre}`);
            }
            console.log(`Cantidad de Contactos Repetidos: ${cantidad}`);
            console.log("---------------------------------------------");
            numerosRepetidos.set(numero, mapaPersonas.get(numero));
        }
    }

    return numerosRepetidos;
}

let agenda = [
    { numero: "123456789", persona: "Juan", id: 1 },
    { numero: "987654321", persona: "María", id: 2 },
    { numero: "123456789", persona: "Carlos", id: 3 },
    { numero: "111111111", persona: "Ana", id: 4 },
    { numero: "987654321", persona: "Pedro", id: 5 },
    { numero: "222222222", persona: "Luisa", id: 6 },
    { numero: "123456789", persona: "Sara", id: 7 }
];

encontrarContactosRepetidos(agenda);


 