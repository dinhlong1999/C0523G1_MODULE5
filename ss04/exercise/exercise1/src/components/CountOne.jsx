import {useState} from "react";
import UseIncrement from "../App.jsx";

export function CountOne() {
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(count+1);
    }

    return(
        <div>
            Count: {count}
            <div>
                <button onClick={increase}>Add 1</button>
            </div>
        </div>
    )

}