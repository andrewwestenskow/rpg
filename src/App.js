import React from 'react'
import Battle from 'containers/battle'
import futureCity from 'assets/backgrounds/futureCity.png'
import Ghost from 'components/enemies/Ghost'
import './App.css'

function App() {
  return (
    <div className="App">
      <Battle enemies={[Ghost, Ghost, Ghost]} background={futureCity} />
    </div>
  )
}

export default App
