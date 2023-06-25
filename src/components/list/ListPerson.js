import styles from "./ListPerson.module.css"
import Button from "../button/Button";
import React, { useState } from "react";

const ListPerson = (props) => {
  const [email, setEmail] = useState("")
    const {firstname, lastname, text_email} = props
    const handleViewMore = (para) => {
      alert(para)
    }
    const handleChangeEmail = (event) =>{
      setEmail(event.target.value)
    }
    const handleSub = () =>{
      alert(email)
    }
  return (
    <div>
      <h2> {email} </h2>
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
          <div>{text_email}</div>
          <input 
            placeholder="input email to subcribe"
            onChange={handleChangeEmail}
          />
           <Button
            title ="Subcribe"
            bgColor = "green"
            textColor = "white"
            onClick = {handleSub} // over write parameter
          />
          <Button
            title ={"add"}
            bgColor = "red"
            textColor = "white"
            onClick = {()=>handleViewMore()} // over write parameter
          />
        </div>
      </div>
    </div>
  );
};

export default ListPerson;

// finished 17
