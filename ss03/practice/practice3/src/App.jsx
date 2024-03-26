import {Component, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from "./Hello.jsx";

class App extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         color : "black"
    //     };
    // }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({color:"pink"});
    //         },5000);
    // }
    // render() {
    //     return(
    //         <div>
    //             <div style={{
    //                 backgroundColor : this.state.color,
    //                 padding :20,
    //                 width:400,
    //                 height:80,
    //                 margin:"auto"
    //             }}
    //             />
    //         </div>
    //     )
    // }
    constructor(props) {
        super(props);
        this.state = {
            display :true
        };
    }
    delete = () => {
        this.setState({display:false});
    };
    open = () =>{
        this.setState({display:true})
    }
    render() {
        let comp;
        if (this.state.display){
            comp = <Hello/>;
        }
        return (
            <div style={{textAlign:"center"}}>
                {comp}
                <button onClick={this.delete}>Delete the component</button>
                <button onClick={this.open}>open</button>
            </div>
        )
    }

}
export default App
