import React, {useState} from "react";
import styles from "./HomeScreen.module.css"
const HomeScreen = () => {
    const MyCommponent = () => {
        return (
            <div className = {styles.component1} >
                <h1> React Component </h1>
            </div>
        )
    }
    const PersonInfo = (props) => {
        const {firstname, lastname, email} = props

        return (
            <div className={styles.item_person}>
                <div className={styles.images} />

                <div>
                    {/* <div>
                        {props.firstname}-{props.lastname}
                     </div>
                     <div>
                        {props.email}
                     </div> */}
                     <div>
                        {firstname}-{lastname}
                     </div>
                     <div>
                        {email}
                     </div>
                </div>
                
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
                        <PersonInfo key={index}
                            firstname = {item.firstname}
                            lastname = {item.lastname}
                            email = {item.email}
                        />
                    )
                })
            }
           
        </div>
    )
}


export default HomeScreen

// finish 16