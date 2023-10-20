import {useState} from 'react'
import './App.css'
import {CountOne} from "./components/count-one.jsx";
import {CountTwo} from "./components/count-two.jsx";

function App() {
    return (
        <>
            <CountOne/>
            <CountTwo/>
        </>
    )
}

export default App
