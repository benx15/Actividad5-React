import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entrenamiento1 from './Entrenamiento1'
import foto from './assets/foto.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Entrenamiento1
        
          nombre="José"
          apellidos=" Martinez Rubio"
          edad={32}
          imagen={foto}

        />
    </div>
  )
}
 
export default App
