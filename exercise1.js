/*
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
*/

function exercise1() {

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

    const giftIds = [1, 3, 4, 5, 0, 1, 3, 0, 7]
    console.log(findFirstRepeated(giftIds))
}

exercise1()
