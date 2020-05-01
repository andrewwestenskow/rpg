import React from 'react'
import Enemy from 'components/enemies/Enemy'

export default (stats, takeTurn) => {
  switch (stats.type) {
    case 'ghost':
      return <Enemy {...stats} key={stats.id} takeTurn={takeTurn} />
    case 'vampire':
      return <Enemy {...stats} key={stats.id} takeTurn={takeTurn} />
    default:
      return <div>No enemy</div>
  }
}
