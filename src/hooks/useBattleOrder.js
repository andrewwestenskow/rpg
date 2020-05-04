import { useState, useEffect } from 'react'

export default (units, round, deadUnits) => {
  const [battleOrder, setBattleOrder] = useState([])
  const [init, setInit] = useState([])

  const sorted = [...units].sort((a, b) => a.speed - b.speed)

  let initialOrder = [...sorted]

  while (initialOrder.length < 15) {
    initialOrder = [...initialOrder, ...sorted]
  }

  if (!init.length) setInit(initialOrder)
  useEffect(() => {
    if (!battleOrder.length && init.length) {
      setBattleOrder(init)
    } else if (battleOrder.length) {
      if (round !== 1) {
        setBattleOrder((currentOrder) => {
          return [
            currentOrder[1],
            ...currentOrder.slice(2),
            currentOrder[0],
          ].filter((e) => !deadUnits.includes(e.id))
        })
      }
    }
  }, [round, init, battleOrder.length, deadUnits])

  return battleOrder
}
