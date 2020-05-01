import React from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import renderEnemies from 'utils/renderEnemies'
import useBattleOrder from 'hooks/useBattleOrder'
import './style.css'

const Battle = ({ enemies }) => {
  const applyStats = (enemies, level) =>
    enemies.map((enemy) => {
      return calculateStats(level, enemy)
    })

  const stats = applyStats(enemies, 1)

  const { battleOrder, round, takeTurn } = useBattleOrder(stats)

  console.log(round)

  const enemyComponents = stats.map((enemy) => renderEnemies(enemy, takeTurn))
  return (
    <div className="battle">
      <div className="half"></div>
      <div className="half">{enemyComponents}</div>
      <div className="turn-order">
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
