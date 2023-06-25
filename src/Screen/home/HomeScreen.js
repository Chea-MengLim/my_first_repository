import React, {useState} from "react";
import styles from "./HomeScreen.module.css"
import ListPerson from "../../components/list/ListPerson";
const HomeScreen = () => {
    const MyCommponent = () => {
        return (
            <div className = {styles.component1} >
                <h1> React Component </h1>
            </div>
        )
    }

    const arr_person = [
        {
            id : 101,
            firstname : "sok",
            lastname : "sombath",
            email : "sok@gmail.com"
        },
        {
            id : 102,
            firstname : "Chea",
            lastname : "MengLim",
            email : "menglimchea@gmail.com"
        },
        {
            id : 103,
            firstname : "Peter",
            lastname : "fa",
            email : "peter@gmail.com"
        }
    ]

    return (
        <div>
            
            <MyCommponent />
            {
                arr_person.map((item, index)=>{
                    return (
                        <ListPerson key={index}
                            firstname = {item.firstname}
                            lastname = {item.lastname}
                            text_email = {item.email}
                        />
                    )
                })
            }
           
        </div>
    )
}


export default HomeScreen

// finish 16