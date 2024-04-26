// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.
/*
casos = {
    ['abcd', 'abcde'],
    ['stepfor', 'stepor'],
    ['abcde', 'abcde'],
    ['abcde', 'abcde'],
    ['xxxx', 'xxoxx']
    ['iiiiii', 'iiiii'],
}
*/
exercise3()

function exercise3() {
    const original = 'xxxx'
    const modified = 'xxoxx'

    function findNaughtyStep(original, modified) {
        let arrayFromOriginal = Array.from(original)
        let arrayFromModified = Array.from(modified)

        if (arrayFromOriginal.length === arrayFromModified.length) {
            return arrayFromOriginal
                .map(char => arrayFromModified.find(elm => char !== elm))
                .join('')
        }

        let longestArray = arrayFromModified
        let shortestArray = arrayFromOriginal
        let result = ''

        if (arrayFromOriginal.length > arrayFromModified.length) {
            longestArray = arrayFromOriginal
            shortestArray = arrayFromModified
        }

        for (let i = 0; i < longestArray.length; i++) {
            if (shortestArray[i]) {
                if (longestArray[i] !== shortestArray[i]) {
                    result += longestArray[i]
                    longestArray = longestArray.splice(i, 1)
                }
            }
            else
                return result + longestArray.slice(i).join('')
        }

        return result
    }
    console.log(findNaughtyStep(original, modified))
}

