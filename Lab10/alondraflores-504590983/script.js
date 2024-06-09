function NumRomano(valor)
 {
    let numero = 0;

    switch (valor) {
        case 'I':
            numero += 1;        
            break;
        case 'V':
            numero += 5;        
            break;
        case 'X':
            numero += 10;        
            break;
        case 'L':
            numero += 50;        
            break;
        case 'C':
            numero += 100;        
            break;
        case 'D':
            numero += 500;        
            break;
        case 'M':
            numero += 1000;        
            break;
    }

    return numero;
}

var romanNUM = function(romano)
 {
    let resultado = 0;
    for (let r = 0; r < romano.length; r++) 
    {
        let regex = /([VXCDM])/;
        if (romano[r - 1] == 'I' && romano[r] !== 'I')
         {
            resultado += NumRomano(romano[r]) - 2;
        } 
        else 
        {
            resultado += NumRomano(romano[r]);
        }
    }
    return resultado;
};

document.getElementById('roman-form').addEventListener('submit', function(event)
{
    event.preventDefault();
    const romanInput = document.getElementById('roman-input').value.toUpperCase();
    const result = romanNUM(romanInput);
    document.getElementById('result').textContent = `El número natural es: ${result}`;
});
