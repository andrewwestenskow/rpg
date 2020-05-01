import { useState, useEffect } from 'react'

export default (enemies) => {
  const [battleOrder, setBattleOrder] = useState([])
  const [round, setRound] = useState(1)

  const takeTurn = () => setRound(round + 1)

  const sorted = enemies.sort((a, b) => a.speed - b.speed)

  let turnOrder = [...sorted]

  while (turnOrder.length < 15) {
    turnOrder = [...turnOrder, { name: 'break' }, ...turnOrder]
  }
  useEffect(() => {
    setBattleOrder(turnOrder)
  }, [])

  return { battleOrder, round, takeTurn }
}
