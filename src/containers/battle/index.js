import React, { useState } from 'react'
import Battle from 'components/Battle'
import PT from 'prop-types'
import calculateStats from 'utils/calculateStats'
import useBattleOrder from 'hooks/useBattleOrder'
import useEnemies from 'hooks/useEnemies'
import useHeroes from 'hooks/useHeroes'
import './style.css'

const BattleContainer = ({ enemies, party, background }) => {
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
    <Battle
      background={background}
      battleOrder={battleOrder}
      enemies={enemyComponents}
      party={heroComponents}
    />
  )
}

BattleContainer.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default BattleContainer
