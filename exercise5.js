/**
La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
 * Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
const result = cyberReindeer(road, time)

 -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.

Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
 */

async function cyberReindeer(road, time) {

  function startRoad() {
    return new Promise(resolve => {
      let pos = 0
      const timeUnit = time * 1000
      let barriersTimeLimit = 5
      let openBarriers = false
      let roadArray = road.split('')
      let result = []
      let stringRoadArray

      const intervalId = setInterval(() => {
        stringRoadArray = roadArray.join('')
        time++

        if (time >= barriersTimeLimit && !openBarriers) {
          openBarriers = true
          stringRoadArray = stringRoadArray.replaceAll('|', '*')
          roadArray = stringRoadArray.split('')
        }

        const currentElement = roadArray[pos]
        const nextElement = roadArray[pos + 1]

        if (!nextElement) {
          clearInterval(intervalId)
          resolve(result)
        }
        if (nextElement === '|' && !openBarriers) return

        roadArray[pos + 1] = currentElement
        roadArray[pos] = nextElement
        pos++

        result.push(stringRoadArray)
      }, timeUnit)

    })
  }


  const result = await startRoad()
  console.log(result);
  return result
}
