import {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
class App extends Component{
    constructor(props) {
        super(props);
        this.state ={
            number:0
        };
    }
    increase = () =>{
        this.setState({
            number:this.state.number +1
        });
    };
    decrease = () =>{
        this.setState({
            number:this.state.number -1
        });
    };
    render() {
        return(
            <div style={{textAlign: "center", padding:30}}>
                <button onClick={this.decrease}>Decrease</button>
                <span style={{padding:10}}>{this.state.number}</span>
                <button onClick={this.increase}>Increase</button>
            </div>
            )

    }

}
export default App
