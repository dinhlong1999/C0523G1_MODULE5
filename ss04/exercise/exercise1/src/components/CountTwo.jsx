import {useState} from "react";
import UseIncrement from "../App.jsx";
import {UseIncrease} from "./UseIncrease.jsx";

export function CountTwo() {
    const [count, setCount] = UseIncrease(2)

    return (
        <div>
            Count: {count}
            <div>
                <button onClick={setCount}>Add 2</button>
            </div>
        </div>
    )

}
