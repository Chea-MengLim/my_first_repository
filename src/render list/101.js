import React from "react"
import "./App.css"

const arr_student = [
    {
        name : "MengLim",
        age  : 19 ,
        sex  : "Male"
    },
    {
        name : "LyPeng",
        age : 20,
        sex : "Male"
    },
    {
        name : "Mai",
        age : 20,
        sex : "Male"
    }
]

function handleEdit (item){
    console.log(item)
}

function handleDelete(item){
    console.log(item)
}

function App(){
    return (
        <div>
            <div className="header">
                <button className="btn_addNew">Add new</button>
                <input />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <td>age</td>
                        <th>sex</th>
                        <th style={{width : "20%"}}>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        arr_student.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td> {item.name} </td>
                                    <td> {item.age} </td>
                                    <td> {item.sex} </td>
                                    <td>
                                        <button className="btn_edit" onClick={ ()=> handleEdit(item)}>Edit</button>
                                        <button className="btn_delete" onClick={()=>handleDelete(item)}> Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default App;
// finished 8