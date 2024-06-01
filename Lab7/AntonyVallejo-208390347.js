let studentsMap = new Map();

studentsMap.set("123", "Juan Pérez");

console.log(studentsMap.get("123")); // imprime: "Juan Pérez"

studentsMap.set("678", "Ana Gómez");
studentsMap.set("112", "Carlos Sánchez");

studentsMap.forEach((name, id) => {
  console.log(`ID: ${id}, Nombre: ${name}`);
});

let studentIds = ["123", 
                 "123",
                 "178", 
                 "778",
                 "578",
                 "778",
                 "112",
                 "112",
                 "678",
                 "778"];

let duplicatedStudents = countDuplicates(studentIds);

// Imprimir los IDs duplicados y su cantidad
for (let [id, count] of duplicatedStudents) {
    console.log(`ID: ${id}, Cantidad: ${count}`);
}

// Explicación paso a paso
function countDuplicates(arr) {
    // Crear un Map vacío
    let map = new Map();

    // Recorrer el array
    for (let i = 0; i < arr.length; i++) {
        // Si el ID ya está en el Map, incrementar su contador
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
        // Si el ID no está en el Map, agregarlo con un contador de 1
        else {
            map.set(arr[i], 1);
        }
    }

    // Crear un nuevo Map para guardar sólo los IDs duplicados
    let duplicates = new Map();

    // Recorrer el Map original
    for (let [id, count] of map) {
        // Si el contador es mayor a 1, el ID está duplicado
        if (count > 1) {
            duplicates.set(id, count);
        }
    }

    return duplicates;
}
