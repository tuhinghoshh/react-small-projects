import { useState } from 'react'
import './App.css'
import Rating from "./components/Rating"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rating />
    </>
  )
}

export default App
