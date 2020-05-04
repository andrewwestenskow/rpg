import React, { useState, useEffect } from 'react'
import Hero from 'components/heroes/Hero'

export default (party) => {
  return party.map((e) => <Hero isHero key={e.id} {...e} />)
}
