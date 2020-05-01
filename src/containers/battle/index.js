import React, { useState } from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import useBattleOrder from 'hooks/useBattleOrder'
import useEnemies from 'hooks/useEnemies'
import './style.css'

const Battle = ({ enemies, style }) => {
  const [round, setRound] = useState(1)
  const applyStats = (enemies, level) =>
    enemies.map((enemy) => {
      return calculateStats(level, enemy)
    })

  const stats = applyStats(enemies, 1)

  const battleOrder = useBattleOrder(stats, round)
  const enemyComponents = useEnemies(stats, round, setRound)
  return (
    <div style={style} className="battle">
      <div className="half"></div>
      <div className="half">{enemyComponents}</div>
      <div className="turn-order">
        <p>Round: {round}</p>
        {battleOrder.map((enemy, index) => (
          <p key={index}>{enemy.name}</p>
        ))}
      </div>
    </div>
  )
}

Battle.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default setBackground(Battle)
