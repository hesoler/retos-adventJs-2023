/*
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
Casos:
gifts = {
    ['tren', 'oso', 'pelota'],
    ['juego', 'puzzle']
}
materials = {
    ['tronesa'],
     ['jlepuz']
}
*/

function exercise2() {
    const gifts = ['libro', 'ps5']
    const materials = 'psl5i'

    function manufacture(gifts, materials) {
        let result = []

        gifts.forEach(gift => {
            let existInMaterials = false

            for (const charIterator of gift) {
                existInMaterials = materials.indexOf(charIterator) != -1
                if (!existInMaterials) break
            }
            if (existInMaterials)
                result.push(gift)
        })

        return result
    }

    console.log(manufacture(gifts, materials))
}

exercise2()
