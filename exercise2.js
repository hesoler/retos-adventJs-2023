/*
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function exercise2() {

    // const gifts = ['tren', 'oso', 'pelota']
    // const materials = 'tronesa'
    // const gifts = ['juego', 'puzzle']
    // const materials = 'jlepuz'
    const gifts = ['libro', 'ps5']
    const materials = 'psli'

    const manufacture = (gifts, materials) => {
        let result = []

        gifts.forEach(element => {
            let existInMaterials = false

            for (const iterator of element) {
                existInMaterials = materials.indexOf(iterator) != -1
                if (!existInMaterials) break
            }
            if (existInMaterials)
                result.push(element)
        })

        return result
    }
    console.log(manufacture(gifts, materials))
}

exercise2()
