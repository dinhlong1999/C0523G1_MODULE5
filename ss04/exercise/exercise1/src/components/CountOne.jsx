import {useState} from "react";
import UseIncrement from "../App.jsx";
import {useIncrease} from "./UseIncrease.jsx";

export function CountOne() {
    const [count, setCount] = useIncrease(1)

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={setCount}>Add 1</button>
            </div>
        </div>
    )

}