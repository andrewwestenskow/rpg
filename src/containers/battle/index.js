import React from 'react'
import PT from 'prop-types'
import setBackground from 'hocs/setBackground'

const Battle = (props) => {
  return <div></div>
}

Battle.propTypes = {
  background: PT.string.isRequired,
}

export default setBackground(Battle)
