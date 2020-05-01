import { useState, useEffect } from 'react'

export default (enemies, round) => {
  const [battleOrder, setBattleOrder] = useState([])
  const [init, setInit] = useState([])

  const sorted = enemies.sort((a, b) => a.speed - b.speed)

  let initialOrder = [...sorted]

  while (initialOrder.length < 15) {
    initialOrder = [...initialOrder, ...sorted]
  }

  if (!init.length) setInit(initialOrder)
  useEffect(() => {
    if (!battleOrder.length) {
      setBattleOrder(init)
    } else {
      if (round !== 1) {
        setBattleOrder((currentOrder) => {
          return [currentOrder[1], ...currentOrder.slice(2), currentOrder[0]]
        })
      }
    }
  }, [round, init, battleOrder.length])

  return battleOrder
}
