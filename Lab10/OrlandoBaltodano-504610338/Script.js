function Romano_A_NumeroNormal(NumeroRomano) {
    NumeroRomano = NumeroRomano.toUpperCase().replace(/[^IVXLCDM]/g, '');
    let Numero = 0;
    let i = 0;

    while (i < NumeroRomano.length)
    {
        if (i + 1 < NumeroRomano.length)
        {
            switch (NumeroRomano[i] + NumeroRomano[i + 1])
            {
                case 'IV':
                    Numero += 4;
                    i += 2;
                    break;
                case 'IX':
                    Numero += 9;
                    i += 2;
                    break;
                case 'XL':
                    Numero += 40;
                    i += 2;
                    break;
                case 'XC':
                    Numero += 90;
                    i += 2;
                    break;
                case 'CD':
                    Numero += 400;
                    i += 2;
                    break;
                case 'CM':
                    Numero += 900;
                    i += 2;
                    break;
                default:
                    switch (NumeroRomano[i]) {
                        case 'I':
                            Numero += 1;
                            break;
                        case 'V':
                            Numero += 5;
                            break;
                        case 'X':
                            Numero += 10;
                            break;
                        case 'L':
                            Numero += 50;
                            break;
                        case 'C':
                            Numero += 100;
                            break;
                        case 'D':
                            Numero += 500;
                            break;
                        case 'M':
                            Numero += 1000;
                            break;
                    }
                    i += 1;
                    break;
            }
        } 
        else
        {
            switch (NumeroRomano[i]) {
                case 'I':
                    Numero += 1;
                    break;
                case 'V':
                    Numero += 5;
                    break;
                case 'X':
                    Numero += 10;
                    break;
                case 'L':
                    Numero += 50;
                    break;
                case 'C':
                    Numero += 100;
                    break;
                case 'D':
                    Numero += 500;
                    break;
                case 'M':
                    Numero += 1000;
                    break;
            }
            i += 1;
        }
    }

    return Numero;
}

document.getElementById('convertir').addEventListener('click', function() 
{
    let NumeroRomano = document.getElementById('numRomano').value;
    let Resultado = Romano_A_NumeroNormal(NumeroRomano);
    document.getElementById('resultado').textContent = 'Resultado: ' + Resultado;
});