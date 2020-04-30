import React from 'react'
import Ghost from 'components/enemies/Ghost'
import { ghost } from 'constants/stats'

export default (level, enemy, key) => {
  switch (enemy) {
    case 'ghost':
      return <Ghost {...ghost[level]} key={key} />
  }
}
