/*
Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

Casos de prueba:
        original, modified        resultado esperado
        'abcd', 'abcde''                'e'
        'stepfor', 'stepor''            'f'
        'abcde', 'abcde'                ''
        'xxxx', 'xxoxx'                 'o'
        'iiiiii', 'iiiii'               'i'
*/

function findNaughtyStep(original, modified) {
    if (original.length === modified.length) return ''

    let longestArray = original.length > modified.length ? original : modified

    for (let i = 0; i < longestArray.length; i++) {
      if (original[i] !== modified[i])
        return longestArray[i]
    }
  }
