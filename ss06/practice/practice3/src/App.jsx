import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Users from "./pages/Users.jsx";
import UserDetails from "./pages/UserDetails.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Users/>}/>
             <Route path={"/user/add"} element={<UserDetails/>}/>
             <Route path={"/user/:userId"} element={<UserDetails/>}/>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
