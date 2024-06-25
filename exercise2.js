/*
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

Casos de prueba:
        gifts, materials                   resultado esperado
['tren', 'oso', 'pelota'], 'tronesa'         ['tren', 'oso']
['juego', 'puzzle'], 'jlepuz'                ['puzzle']
['libro', 'ps5'], 'psli'                     []
*/

function manufacture(gifts, materials) {
    let result = []

    gifts.forEach(gift => {
        let existInMaterials = false

        for (const charIterator of gift) {
            existInMaterials = materials.includes(charIterator)
            if (!existInMaterials) break
        }
        if (existInMaterials)
            result.push(gift)
    })

    return result
}
