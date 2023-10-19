import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import "bootstrap/dist/css/bootstrap.css"
import Test from "./test.jsx";


const root =ReactDOM.createRoot(document.getElementById('root'))
// const demo ={
//     header :"Dinh",
//     footer : "Long"
// }
root.render(
    // <React.StrictMode>
    //     <App/>
    // </React.StrictMode>
    <Test />
);
