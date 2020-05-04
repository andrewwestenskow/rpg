import React from 'react'
import Enemy from 'components/enemies/Enemy'

export default (stats, round, setRound, setDeadUnits) => {
  switch (stats.type) {
    case 'ghost':
      return (
        <Enemy
          {...stats}
          key={stats.id}
          round={round}
          setRound={setRound}
          setDeadUnits={setDeadUnits}
        />
      )
    case 'vampire':
      return (
        <Enemy
          {...stats}
          key={stats.id}
          round={round}
          setRound={setRound}
          setDeadUnits={setDeadUnits}
        />
      )
    default:
      return <div>No enemy</div>
  }
}
