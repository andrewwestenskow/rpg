import React from 'react'
import Battle from 'components/Battle'
import Hero from 'components/heroes/Hero'
import Enemy from 'components/enemies/Enemy'
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
    turnOrder,
    currentTurn,
    nextHero,
  } = useBattleLogic(enemyList, 1)

  const partyComponents = party.map((e) => <Hero key={e.id} {...e} />)

  const enemyComponents = enemies.map((e) => <Enemy key={e.id} {...e} />)

  return loading ? (
    <div>Loading</div>
  ) : (
    <Battle
      enemies={enemyComponents}
      party={partyComponents}
      turnOrder={turnOrder}
      currentTurn={currentTurn}
      nextHero={nextHero}
      background={background}
    />
  )
}

BattleContainer.propTypes = {
  background: PT.string.isRequired,
  enemies: PT.array.isRequired,
}

export default BattleContainer
