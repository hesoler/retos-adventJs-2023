/*
Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

Casos de prueba:
        decode(cadena_de_texto)       resultado esperado
        decode('hola (odnum)')          'hola mundo'
        decode('(olleh) (dlrow)!')      'hello world!'
        decode('sa(u(cla)atn)s')'       'santaclaus'

Paso a paso:
1. Invertimos el anidado -> sa(ualcatn)s
2. Invertimos el que queda -> santaclaus

Notas:

Las cadenas de entrada siempre estarán bien formadas con paréntesis que coinciden correctamente, no necesitas validarlos.
En el mensaje final no deben quedar paréntesis.
El nivel máximo de anidamiento es 2.
*/

function decode(message) {
    if (message.lastIndexOf('(') !== -1) {
        const lastOpeningParenthesis = message.lastIndexOf('(') + 1
        const firstClosingParenthesis = message.indexOf(')', lastOpeningParenthesis)

        const textFragment = message.slice(lastOpeningParenthesis, firstClosingParenthesis)
        const reversedText = Array.from(textFragment).reverse().join('')

        const result = message.replace(`(${textFragment})`, reversedText)
        return decode(result)
    }
    return message
}
