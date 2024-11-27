import { useState } from 'react'
import './App.css'
import Pagination from "./components/Pagination"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pagination />
    </>
  )
}

export default App
