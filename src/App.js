import React from 'react'
import Battle from 'containers/battle'
import futureCity from 'assets/backgrounds/futureCity.png'
import './App.css'

function App() {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="App">
      <Battle enemies={['ghost', 'vampire', 'ghost']} background={futureCity} />
    </div>
  )
}

export default App
