import React from 'react'

export default (enemyType) => {
  return (WrappedComponent) => {
    return (props) => <WrappedComponent {...props} type={enemyType} />
  }
}
