function romanToArabic(NumeroRomano)
{
    NumeroRomano = NumeroRomano.toUpperCase().replace(/[^IVXLCDM]/g, '');
    let Numero = 0;
    for (const element of NumeroRomano)
    {
        switch (element) 
        {
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
    }
    return Numero;
}