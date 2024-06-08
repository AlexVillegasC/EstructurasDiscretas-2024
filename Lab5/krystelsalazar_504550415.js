//1:
console.log('------------------1. Ejemplo: O(1) - Complejidad Constante: ----------------------');
// Función para calcular el número de huevos puestos por una gallina por día, no importa el tamaño de la entrada(numero de gallinas, siempre será constante)
function calcularHuevosGallina() {

    return 1; // Se supone que una gallina pone 1 huevo por día
  }
  const numGallinas = 10; // Número de gallinas en la granja
  for (let i = 0; i < numGallinas; i++) {
    const huevosHoy = calcularHuevosGallina();
    console.log(`La gallina ${i+1} puso ${huevosHoy} huevo hoy.`);
  }

//2:
  console.log('----------------2. Ejemplo: O(Log N) - Complejidad Logarítmica:--------------------');

const animales = ['Caballo', 'Cabra', 'Cerdo', 'Gallina', 'Oveja'];// Lista de animales en la granja

function buscarAnimal(animal) {
  let izq = 0; 
  let der = animales.length - 1; 

  while (izq <= der) { 
    const medio = Math.floor((izq + der) / 2); // Encontrar la posición del elemento en el medio

    if (animales[medio] === animal) { // Si el animal se encuentra en el elemento medio
      return `Se encontró al animal ${animal} en la granja!`; // Devolver mensaje de éxito
    } else if (animales[medio] < animal) { // Si el animal está en la mitad derecha
      izq = medio + 1; // Actualizar el izquierdo para buscar en la mitad derecha
    } else { // Si el animal está en la mitad izquierda
      der = medio - 1; // Actualizar el derecho para buscar en la mitad izquierda
    }
  }
  return `No se encontró al animal ${animal} en la granja.`; // Devolver mensaje de no encontrado
}
// Ejemplo de uso
console.log(buscarAnimal('Perro')); 

//3:
   console.log('---------------------3. Ejemplo: O(N) - Complejidad Lineal-------------------------');

   function contarAnimales(granja) {
    let totalAnimales = 0;
    for (const especie in granja.animales) {
      totalAnimales += granja.animales[especie];
    }
    return `El total de animales de la granja es de ${totalAnimales} `;
  }
  const granja = {
    animales: {
      vacas: 10,
      gallinas: 10,
      cerdos: 10,
      caballos: 5,
    },
  };
  console.log(contarAnimales(granja)); // Se mostrará en pantalla 35(total de animales que hay en la granja)

  //4:
    console.log('-----------------4. Ejemplo: O(N Log N) - Complejidad Log-Lineal:------------------');
    // Función para simular el crecimiento de cultivos
function simularCrecimientoCultivos(cantidadCultivos) {
    // Proceso lineal: Plantar los cultivos
    for (let i = 0; i < cantidadCultivos; i++) {
        console.log(`Plantando cultivo ${i + 1}`);
    }
    // Proceso logarítmico: Regar los cultivos
    let tiempoRegado = 1;
    while (tiempoRegado < cantidadCultivos) {
        console.log(`Regando cultivos por ${tiempoRegado} horas`);
        tiempoRegado *= 2; // Duplicar el tiempo de riego 
    }
}
simularCrecimientoCultivos(3);

//5:
console.log('-----------------5. Ejemplo: O(N^2) - Complejidad Cuadrática:------------------');
// Función para calcular la comida total necesaria
function calcularComidaTotal(criaturas) {
    let total = 0;
    for (let i = 0; i < criaturas.length; i++) {
        for (let j = 0; j < criaturas.length; j++) {
            total += criaturas[i].comidaDiaria;
        }
    }
    return total;
}
//Datos 
const criaturas = [
    { nombre: 'Vaca', comidaDiaria: 10 },
    { nombre: 'Cerdo', comidaDiaria: 10 },
    { nombre: 'Gallina', comidaDiaria: 5 }
];
//Calcular y mostrar la comida total
const comidaTotal = calcularComidaTotal(criaturas);
console.log(`La cantidad total de comida necesaria es: ${comidaTotal} unidades.`);

//6:
console.log('-----------------6. Ejemplo: O(2^N) - Complejidad Exponencial:------------------');
//Función que calcula el número de combinaciones de animales
function calcularCombinacionesAnimales(numTiposAnimales) {
    if (numTiposAnimales === 0) {
      return 1; //Si no hay tipos de animales, hay 1 combinación posible
    } else {
      return 2 * calcularCombinacionesAnimales(numTiposAnimales - 1);
    }
  }
  //Ejemplo de uso
  const numTiposAnimales = 5; //Hay 5 tipos de animales en la granja
  const totalCombinaciones = calcularCombinacionesAnimales(numTiposAnimales);
  console.log(`En la granja hay ${numTiposAnimales} tipos de animales.`);
  console.log(`El número total de combinaciones posibles es: ${totalCombinaciones}`);

  //7:
  console.log('-------------------7. Ejemplo: O(N!) - Complejidad Factorial:-------------------');
  console.log('Estas son las posibles combinaciones de plantas: ');
  function generateGardenCombinations(plants, gardenSize) {
    //Si el tamaño del huerto es 0, se devuelve un arreglo vacío
    if (gardenSize === 0) {
      return [[]];
    }
    //Arreglo para almacenar las combinaciones
    const combinations = [];
  
    for (let i = 0; i < plants.length; i++) {
      //Se obtiene la planta actual
      const currentPlant = plants[i];
  
      //Se obtienen las plantas restantes
      const remainingPlants = plants.slice(0, i).concat(plants.slice(i + 1));
  
      //Se generan las combinaciones para las plantas restantes
      const subCombinations = generateGardenCombinations(remainingPlants, gardenSize - 1);
  
      for (let j = 0; j < subCombinations.length; j++) {
        //Se crea una nueva combinación agregando la planta actual a la subcombinación
        combinations.push([currentPlant, ...subCombinations[j]]);
      }
    }
    //Se devuelven las combinaciones generadas
    return combinations;
  }
  // Ejemplo de uso
  const plants = ['tomate', 'zanahoria', 'lechuga'];
  const gardenSize = 3;
  const combinations = generateGardenCombinations(plants, gardenSize);

  combinations.forEach(combination => {
    console.log(combination.join(', '));
  });