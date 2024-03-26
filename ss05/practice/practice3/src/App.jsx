import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home.jsx";
import {About} from "./Components/About.jsx";
import {Contract} from "./Components/Contract.jsx";
import {Category} from "./Components/Category.jsx";
import {Product} from "./Components/Product.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category/>}/>
        <Route path="/product/:categoryId" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  </div>

  )
}

export default App
