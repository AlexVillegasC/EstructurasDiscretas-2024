// 1. **O(1) - Complejidad Constante:**
//    - Implementa un algoritmo que siempre ejecute una cantidad fija de pasos, sin importar el tamaño de la entrada.  
function sumaDe1a100() {
    const n = 100; 
    const suma = (n * (n + 1)) / 2; 
    return suma;
}

console.log(sumaDe1a100()); 

// 2. **O(Log N) - Complejidad Logarítmica:**
//    - Implementa un algoritmo que divide repetidamente la cantidad de datos en cada paso.  
