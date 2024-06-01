
# Conversor de Números Romanos

## Descripción

Se requiere una página web que tome una cadena representando un número romano y devuelva su equivalente en número natural. Los números romanos se componen de los siguientes símbolos y valores:

- I = 1
- V = 5
- X = 10
- L = 50
- C = 100
- D = 500
- M = 1000

Los números se forman combinando símbolos y sumando sus valores. Por ejemplo, II es 2 y XIII es 13. Sin embargo, los romanos también usaban un sistema de sustracción para evitar la repetición de cuatro caracteres idénticos. Por ejemplo, IV es 4 (no IIII), y IX es 9. Asimismo, XL representa 40, XC representa 90, y así sucesivamente para CD (400) y CM (900).

## Objetivo

Escribe una función que reciba un número romano como entrada y retorne el número natural correspondiente. Asegúrate de que tu función maneje correctamente las reglas de sustracción.

## Ejemplos de entrada y salida

- Entrada: "III"
- Salida: 3

- Entrada: "IV"
- Salida: 4

- Entrada: "IX"
- Salida: 9

- Entrada: "LVIII"
- Salida: 58

- Entrada: "MCMXCIV"
- Salida: 1994

## Restricciones

- La entrada siempre será un número romano válido, y no necesitas manejar casos de entrada no válidos.
- Considera que el rango de entrada válido va desde "I" hasta "MMMCMXCIX" (1 a 3999).

## Consejos

- Considera empezar por evaluar los símbolos de mayor a menor valor, prestando especial atención a los patrones de sustracción.
- Utiliza un bucle para recorrer la cadena de entrada y suma o resta valores según corresponda.
