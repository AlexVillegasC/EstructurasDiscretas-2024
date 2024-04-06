function sortGrades(Notas) {
    let swapped;
    do 
    {
        swapped = false;

        for (let i = 0; i < Notas.length - 1; i++)
        {
            if (Notas[i] < Notas[i+1])
            {
               [ Notas[i], Notas[i + 1]]  =   [Notas[i+1], Notas[i]];

               swapped = true;
            }
        }
    }while(swapped)

    return Notas;
}
  const calificaciones = [5,2,3,4,1];
  console.log("Desordenado = " + calificaciones);
  const ordenado = sortGrades(calificaciones);
  console.log("Ordenado = ", ordenado);
