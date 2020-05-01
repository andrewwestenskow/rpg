import React, { useState, useEffect } from 'react'
import Enemy from 'components/enemies/Enemy'
import renderEnemies from 'utils/renderEnemies'

export default (initialStats, round, setRound) => {
  const [enemies, setEnemies] = useState([])
  const [init] = useState(initialStats)

  useEffect(() => {
    if (!enemies.length) {
      setEnemies(init.map((e) => renderEnemies(e, round, setRound)))
    } else {
      setEnemies((oldEnemies) =>
        oldEnemies.map((e) => (
          <Enemy key={e.props.id} {...e.props} round={round} />
        ))
      )
    }
  }, [round, init, enemies.length, setRound])

  return enemies
}
