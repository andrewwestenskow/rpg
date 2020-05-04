import React, { useState } from 'react'
import Battle from 'components/Battle'
import PT from 'prop-types'
import calculateStats from 'utils/calculateStats'
import createHeroes from 'utils/createHeroes'
import useBattleOrder from 'hooks/useBattleOrder'
import useEnemies from 'hooks/useEnemies'
import useHeroes from 'hooks/useHeroes'
import './style.css'

const BattleContainer = ({ enemies, background }) => {
  const [round, setRound] = useState(1)
  const [deadUnits, setDeadUnits] = useState([])

  const applyStats = (enemies, level) =>
    enemies.map((enemy) => {
      return calculateStats(level, enemy)
    })

  const { party, heroComponents } = useHeroes()

  const enemyStats = applyStats(enemies, 1)

  const allUnits = [...enemyStats, ...party]

  const battleOrder = useBattleOrder(allUnits, round, deadUnits)
  const enemyComponents = useEnemies(enemyStats, round, setRound, setDeadUnits)

  console.log(party)

  return (
    <Battle
      round={round}
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
