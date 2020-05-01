import React from 'react'
import Enemy from 'components/enemies/Enemy'

export default (stats, round, setRound) => {
  switch (stats.type) {
    case 'ghost':
      return (
        <Enemy {...stats} key={stats.id} round={round} setRound={setRound} />
      )
    case 'vampire':
      return (
        <Enemy {...stats} key={stats.id} round={round} setRound={setRound} />
      )
    default:
      return <div>No enemy</div>
  }
}
