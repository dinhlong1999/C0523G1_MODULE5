import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Libraries} from "./components/Libraries.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {EditLibrary} from "./components/EditLibrary.jsx";
import {CreateLibrary} from "./components/CreateLibrary.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Home/>} index></Route>*/}
                <Route path="/library" element={<Libraries/>}></Route>
                <Route path={`/library/edit/:libraryID`} element={<EditLibrary/>}></Route>
                <Route path="/library/create" element={<CreateLibrary/>}></Route>
            </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
