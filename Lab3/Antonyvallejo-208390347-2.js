function sortGrades(Nota) {
    let swapped;
    do 
    {
        swapped = false;

        for (let i = 0; i < Nota.length - 1; i++)
        {
            if (Nota[i] < Nota[i+1])
            {
               [ Nota[i], Nota[i + 1]]  =   [Nota[i+1], Nota[i]];

               swapped = true;
            }
        }
    }while(swapped)

    return Nota;
}
  const calificaciones = [5,2,3,4,1];
  console.log("Desordenado = " + calificaciones);
  const ordenado = sortGrades(calificaciones);
  console.log("Ordenado = ", ordenado);