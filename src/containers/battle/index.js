import React, { useState } from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'
import calculateStats from 'utils/calculateStats'
import useBattleOrder from 'hooks/useBattleOrder'
import useEnemies from 'hooks/useEnemies'
import useHeroes from 'hooks/useHeroes'
import './style.css'

const Battle = ({ enemies, style, party }) => {
  const [round, setRound] = useState(1)
  const [deadUnits, setDeadUnits] = useState([])
  const applyStats = (enemies, level) =>
    enemies.map((enemy) => {
      return calculateStats(level, enemy)
    })

  const enemyStats = applyStats(enemies, 1)
  const allUnits = [...enemyStats, ...party]

  const battleOrder = useBattleOrder(allUnits, round, deadUnits)
  const enemyComponents = useEnemies(enemyStats, round, setRound, setDeadUnits)
  const heroComponents = useHeroes(party, round, setRound, setDeadUnits)
  return (
    <div style={style} className="battle">
      <div className="half">{heroComponents}</div>
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
