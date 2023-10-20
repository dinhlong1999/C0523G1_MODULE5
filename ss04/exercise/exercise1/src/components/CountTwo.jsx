import {useState} from "react";
import UseIncrement from "../App.jsx";

export function CountTwo() {
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(count+2);
    }

    return(
        <div>
            Count: {count}
            <div>
                <button onClick={increase}>Add 2</button>
            </div>
        </div>
    )

}