import { useState } from "react"
import React from "react"

const HomeScreen = () =>{
    const bg_active = {
        backgroundColor: "green"
    }
    const bg_inactive = {
        backgroundColor: "gray"
    }
    const [count, setCount] = useState(0)
    const [style, setStyle] = useState(bg_active)
    const handleDecreae = () =>{
        setCount(count -1)
    }
    const handleIncrease = () =>{
        setCount(count + 1);
    }
    const handleColor = () =>{
        setStyle(bg_inactive)
    }
    return (
        <div style={style}>
            <button onClick={handleIncrease}>+</button>
            <span> {count} </span>
            <button onClick={handleDecreae}>-</button>
            <br />
            <button onClick={handleColor}>Click me to change color</button>
        </div>
    )
}

export default HomeScreen