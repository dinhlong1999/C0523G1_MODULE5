import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {ContactForm} from "./components/ContactForm.jsx";
import React from "react";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {

    return (
        <>
            <ContactForm/>
        </>
    )
}

export default App
