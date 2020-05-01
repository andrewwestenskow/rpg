import React from 'react'
import Enemy from 'components/enemies/Enemy'
import ghostImage from 'assets/enemies/ghost/idle1.png'
import vampireImage from 'assets/enemies/vampire/idle1.png'

export default (stats, takeTurn) => {
  switch (stats.type) {
    case 'ghost':
      return (
        <Enemy
          {...stats}
          key={stats.id}
          takeTurn={takeTurn}
          image={ghostImage}
        />
      )
    case 'vampire':
      return (
        <Enemy
          {...stats}
          key={stats.id}
          takeTurn={takeTurn}
          image={vampireImage}
        />
      )
    default:
      return <div>No enemy</div>
  }
}
