class Program
{
   constructor ()
   {
    this.item = [];
   }
   
   quitarNumero()
   {
    if (this.item.length === 0)
    {
        console.log("La cola está vacía...");
    }

    else 
    {
        return this.item.shift();
    }

   }

   imprimirCola()
   {
    console.log("Elementos en nuestra cola: ");
    console.log(this.item);
   }

   

}