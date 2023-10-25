import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Medical} from "./components/Medical.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Medical/>
    </>
  )
}

export default App
