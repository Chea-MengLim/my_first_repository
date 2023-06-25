import React, {useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () => {
    const arr_person = [
        {
            id: 1,
            name : "sok",
            gender : 'male',
            is_check : false
        },
        {
            id: 2,
            name : "lim",
            gender : 'male',
            is_check : false
        },
        {
            id: 3,
            name : "Rozafja",
            gender : 'male',
            is_check : false
        },
        {
            id: 4,
            name : "Roza",
            gender : 'female',
            is_check : false
        }
    ]
   
    const [ListPerson, setListPerson] = useState(arr_person)
    const handleDelete = (data) =>{
       var tmpList = ListPerson.filter((item) => item.id !== data.id )
       setListPerson(tmpList)
    }
    const handleDeleteSelect = () =>{
        var tmpList = ListPerson.filter((item, index)=> item.is_check === false)
        setListPerson(tmpList)
    }
    const handleCheck = (data, index) =>{
        var tmpList = ListPerson
        tmpList[index].is_check  =! data.is_check
        setListPerson([...tmpList])
    }
    return (
        <div className={styles.home_container}>
           
           <h1>   List Person {ListPerson.length} </h1>
            <button onClick={handleDeleteSelect} className="btn btn-primary"> Delete </button>
           <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {ListPerson.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td> <input checked={item.is_check} onChange={ ()=> handleCheck(item, index)} type="checkbox"/> </td>
                                <td> {item.id} </td>
                                <td> {item.name} </td>
                                <td> {item.gender} </td>
                                <td>
                                    <button className="btn btn-dark" onClick={ () => handleDelete (item)}> Delect </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
           </table>
            
        </div>
    )
}


export default HomeScreen