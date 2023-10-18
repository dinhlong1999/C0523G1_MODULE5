import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

 const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <h4>Browser's details : {navigator.userAgent}</h4>
    </div>
);
