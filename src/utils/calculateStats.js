import React from 'react'
import Enemy from 'components/enemies/Enemy'
import { ghost, vampire } from 'constants/stats'
import ghostImage from 'assets/enemies/ghost/idle1.png'
import vampireImage from 'assets/enemies/vampire/idle1.png'

import { v4 as uuid } from 'uuid'

export default (level, enemy, takeTurn) => {
  const id = uuid()
  switch (enemy) {
    case 'ghost':
      return (
        <Enemy
          takeTurn={takeTurn}
          name={'Ghost'}
          image={ghostImage}
          type="ghost"
          id={id}
          {...ghost[level]}
          key={id}
        />
      )
    case 'vampire':
      return (
        <Enemy
          takeTurn={takeTurn}
          name="Vampire"
          image={vampireImage}
          type="vampire"
          id={id}
          {...vampire[level]}
          key={id}
        />
      )
    default:
      return <div>No enemy</div>
  }
}
