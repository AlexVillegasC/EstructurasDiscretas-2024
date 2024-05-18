function romanoAEntero(romano) {
    const mapaRomano = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);

    let total = 0;
    for (let i = 0; i < romano.length; i++) {
        const valorActual = mapaRomano.get(romano[i]);
        const valorSiguiente = mapaRomano.get(romano[i + 1]);

        if (valorSiguiente && valorActual < valorSiguiente) {
            total += valorSiguiente - valorActual;
            i++;
        } else {
            total += valorActual;
        }
    }
    return total;
}
//EJemplo
let numeroRomano = "MMIV";
let entero = romanoAEntero(numeroRomano);
console.log(`El valor entero de ${numeroRomano} es ${entero}`);
