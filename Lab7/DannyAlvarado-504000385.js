// Definir la estructura de datos para los sets de Lego
let setsDeLego = 
[
    { nombre: "Star Wars X-Wing", codigo: "SW001", cantidadDePiezas: 500, edadRecomendada: 8 },
    { nombre: "City Police Station", codigo: "CT002", cantidadDePiezas: 894, edadRecomendada: 7 },
    { nombre: "Ninjago Dragon", codigo: "NJ003", cantidadDePiezas: 1020, edadRecomendada: 9 },
    { nombre: "Star Wars X-Wing", codigo: "SW001", cantidadDePiezas: 500, edadRecomendada: 8 },
    { nombre: "City Police Station", codigo: "CT002", cantidadDePiezas: 894, edadRecomendada: 7 },
    { nombre: "Friends Cafe", codigo: "FR004", cantidadDePiezas: 410, edadRecomendada: 6 },
    { nombre: "Ninjago Dragon", codigo: "NJ003", cantidadDePiezas: 1020, edadRecomendada: 9 },
    { nombre: "Star Wars X-Wing", codigo: "SW001", cantidadDePiezas: 500, edadRecomendada: 8 },
    { nombre: "Friends Cafe", codigo: "FR004", cantidadDePiezas: 410, edadRecomendada: 6 },
    { nombre: "Friends Cafe", codigo: "FR004", cantidadDePiezas: 410, edadRecomendada: 6 }
];

// Función para contar la cantidad de cada set de Lego
function contarSetsDeLego(arr) 
{
    let mapa = new Map();

    // Recorrer el array de sets de Lego
    for (let i = 0; i < arr.length; i++) 
    {
        let set = arr[i];
        let clave = set.codigo;

        // Si el set ya está en el Map, incrementar su contador
        if (mapa.has(clave)) 
        {
            let setInfo = mapa.get(clave);
            setInfo.cantidad += 1;
            mapa.set(clave, setInfo);
        }
             // Si el set no está en el Map, agregarlo con un contador de 1
        else 
        {
            mapa.set(clave, 
                {
                nombre: set.nombre,
                codigo: set.codigo,
                cantidadDePiezas: set.cantidadDePiezas,
                edadRecomendada: set.edadRecomendada,
                cantidad: 1
                });
        }
    }

    return mapa;
}

// Contar los sets de Lego en el array
let setsContados = contarSetsDeLego(setsDeLego);

// Imprimir los sets de Lego y su cantidad
for (let [codigo, setInfo] of setsContados) 
    {
        console.log(`Nombre del Set: ${setInfo.nombre}`);
        console.log(`Código: ${setInfo.codigo}`);
        console.log(`Cantidad de Piezas: ${setInfo.cantidadDePiezas}`);
        console.log(`Edad Recomendada: ${setInfo.edadRecomendada}`);
        console.log(`Cantidad: ${setInfo.cantidad}`);
        console.log('---');
    }
