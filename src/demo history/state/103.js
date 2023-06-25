import React, {useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () => {
    const [name, setName] = useState("")
    const [arrName, setArrName] = useState(["sok", "som"])
    const handleAdd = (event) => {
        var tmp = arrName
        tmp.push(name)
        console.log(tmp)
        setArrName([...tmp])
    }
    const handleChageName = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <h1> Demo State </h1>
            <div> {name} </div>
            <input
                placeholder="name"
                onChange={handleChageName}
            />
            
            <button onClick={handleAdd}> Add </button>
            <br/>
            <div>
                {arrName.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h2> {index+1}: {item} </h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default HomeScreen

// start 16 min 10