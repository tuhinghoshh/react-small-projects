import { useState } from 'react'
import './App.css'
import Slider from './components/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slider />
    </>
  )
}

export default App
