/*
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

Casos de prueba:
             giftIds         resultado esperado
        [2, 1, 3, 5, 3, 2]          3
        [1, 2, 3, 4]               -1
        [5, 1, 5, 1]                5
*/

function findFirstRepeated(numbers) {
    let firstRepeatedValue = -1
    let reverseIndexFirstRepeated = numbers.length
    let reverseNumbers = [...numbers].reverse()
    let reversePosition = 0

    numbers.forEach(number => {
        if (reverseNumbers.length > 1) {
            reverseNumbers.pop()

            reverseIndexFirstRepeated = reverseNumbers.lastIndexOf(number)

            if (reverseIndexFirstRepeated >= reversePosition) {
                reversePosition = reverseIndexFirstRepeated
                firstRepeatedValue = number
            }
        }
    })

    return firstRepeatedValue
}
