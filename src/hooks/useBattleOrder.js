import { useState, useEffect, useMemo } from 'react'

export default (enemies, turn) => {
  const [battleOrder, setBattleOrder] = useState([])

  const sorted = enemies.sort((a, b) => a.speed - b.speed)

  let turnOrder = [...sorted]

  while (turnOrder.length < 10) {
    turnOrder = [...turnOrder, { name: 'break' }, ...turnOrder]
  }

  useEffect(() => {
    setBattleOrder(turnOrder)
  }, [turn])

  return battleOrder
}
