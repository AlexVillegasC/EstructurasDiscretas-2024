//Este tipo de uso de Map en el lenguaje de JavaScript se llama Busqueda rapida sin tener un array
let Student = new Map();

// Agregar estudiantes al Map
Student.set(101, ["Jose","juan"]);
Student.set(102, "Billy");
Student.set(103, "Fabricio");
Student.set(104, "Fulvio");

// Cree una variable para mandar por quemado el id del estudiante
let studentID = 104;

// Realizar la búsqueda
let studentName = Student.get(studentID);

// Verificar si se encontró el estudiante en los agregados
if (studentName !== undefined) {
    console.log(`El nombre del estudiante con ID ${studentID} es ${studentName}.`);
} else {
    console.log(`No se encontró ningún estudiante con ID ${studentID}.`);
}
