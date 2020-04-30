import React, { useState } from 'react'
import PT from 'prop-types'
import RenderEnemies from './RenderEnemies'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import useBattleOrder from 'hooks/useBattleOrder'
import './style.css'

const Battle = ({ enemies }) => {
  const [round, setRound] = useState(1)
  const takeTurn = () => setRound(round + 1)

  const enemyInfo = (enemies, level) =>
    enemies.map((enemy) => {
      return calculateStats(level, enemy, takeTurn)
    })

  console.log(enemyInfo(enemies, 1))

  // const rawStats = enemyComponents.map((enemy) => enemy.props)

  // const battleOrder = useBattleOrder(rawStats, round)

  return (
    <div className="battle">
      <div className="half"></div>
      <div className="half">{/* <RenderEnemies enemies={enemies} /> */}</div>
      {/* <div className="turn-order">
        {battleOrder.map((enemy, index) => (
          <p key={index}>{enemy.name}</p>
        ))}
      </div> */}
    </div>
  )
}

Battle.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default setBackground(Battle)
