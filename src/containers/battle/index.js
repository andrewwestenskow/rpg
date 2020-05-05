import React from 'react'
import Battle from 'components/Battle'
import PT from 'prop-types'
import useBattleLogic from 'hooks/useBattleLogic'
import './style.css'

const BattleContainer = ({ enemies: enemyList, background }) => {
  // TODO 1. Party + stats
  // 2. Enemies + stats
  // 3. Battle order (based on speed)
  // 4. Whose turn?
  // 5. Dead units

  const {
    participants: { party, enemies },
    damageEnemy,
    damageHero,
    loading,
  } = useBattleLogic(enemyList, 1)

  // const applyStats = (enemies, level) =>
  //   enemies.map((enemy) => {
  //     return calculateStats(level, enemy)
  //   })

  // const { party, heroComponents } = useHeroes()

  // const enemyStats = applyStats(enemies, 1)

  // const allUnits = [...enemyStats, ...party]

  // const battleOrder = useBattleOrder(allUnits, round, deadUnits)
  // const enemyComponents = useEnemies(enemyStats, round, setRound, setDeadUnits)
  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <h1>Baddies</h1>
      {enemies.map((e) => (
        <p onClick={() => damageEnemy(e.id, 5)}>
          {e.id} - {e.hp}/{e.maxHp}
        </p>
      ))}

      <h1>HEROES</h1>

      {party.map((e) => {
        return (
          <p onClick={() => damageHero(e.id, 5)}>
            {e.name} - {e.id} - {e.hp}/{e.maxHp} - {e.isDead && 'DEAD'}
          </p>
        )
      })}
    </div>
  )
}

BattleContainer.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default BattleContainer
