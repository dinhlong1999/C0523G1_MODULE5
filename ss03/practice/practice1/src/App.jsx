import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddComponents from "./components/AddComponents.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddComponents firstNumber ={2} secondNumber={2}/>
    </>
  )
}

export default App
