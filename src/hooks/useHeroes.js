import React, { useState, useEffect } from 'react'
import Hero from 'components/heroes/Hero'

export default (initialParty, round, setRound, setDeadUnits) => {
  const [party, setParty] = useState([])
  const [init] = useState(initialParty)

  useEffect(() => {
    if (!party.length) {
      setParty(
        init.map((e) => (
          <Hero
            isHero
            key={e.id}
            {...e}
            setDeadUnits={setDeadUnits}
            round={round}
            setRound={setRound}
          />
        ))
      )
    } else {
      setParty((oldParty) =>
        oldParty.map((e) => (
          <Hero key={e.props.id} {...e.props} round={round} />
        ))
      )
    }
  }, [round, init, party.length, setRound, setDeadUnits])

  return party
}
