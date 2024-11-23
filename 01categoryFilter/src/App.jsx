import { useState } from 'react'
import './App.css'
import Category from "./components/Category"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Category />
    </>
  )
}

export default App
