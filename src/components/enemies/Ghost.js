import React from 'react'
import PT from 'prop-types'
import applyStats from 'hocs/applyStats'
import applyEnemyType from 'hocs/applyEnemyType'
import idle1 from 'assets/enemies/ghost/idle1.png'

const Ghost = (props) => {
  console.log(props)
  return <img style={{ transform: 'scaleX(-1)' }} alt="Ghost" src={idle1} />
}

Ghost.propTypes = {
  stats: PT.shape({
    hp: PT.number.isRequired,
    speed: PT.number.isRequired,
  }),
}

export default applyStats(applyEnemyType('ghost')(Ghost))
