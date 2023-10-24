import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from "./component/ToDoList.jsx";
import Test from "./component/SaveData.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import SaveData from "./component/SaveData.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ToDoList/>}></Route>
          <Route path="/todo/create" element={<SaveData/>}></Route>
        </Routes>
      </BrowserRouter>
        <ToastContainer></ToastContainer>
    </>
  )
}

export default App
