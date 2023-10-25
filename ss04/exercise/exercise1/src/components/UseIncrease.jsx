import {useState} from "react";

export function useIncrease(step) {
    const [count,setCount] = useState(0);
    const increase = () =>{
        setCount(prevState => prevState + step)
    }
    return [count,increase];
}