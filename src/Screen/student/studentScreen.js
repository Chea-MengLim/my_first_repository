import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Student.module.css";
import Button from "../../components/button/Button"
import {BsFillBrightnessHighFill} from "react-icons/bs"

const StudentScreen = () => {
  const [ListStudent, setListStudent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "GET",
      data: {},
    })
      .then((res) => {
        var data = res.data;
        setListStudent(data);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  //   const getID = (id) => {
  //     if (id === 2) return "this person is 2";
  //     else return id;
  //   };


  const handleDelete = (item) => {
    setLoading(true)
    axios ({
      url : "https://jsonplaceholder.typicode.com/users/" + item.id,
      method : "DELETE",
    }).then(res =>{
      console.log(res)
      setLoading(false)
      setListStudent(ListStudent)
    }).catch(err=>{
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <div>
      <div>
        <BsFillBrightnessHighFill/>
      </div>
      <label style={{ textAlign: "center", display: "block" }}>
        {loading ? "Loading" : ""}
      </label>
      <h1> list of student is {ListStudent.length} </h1>
      {/* {
            ListStudent.map((item, index)=> {
                return (
                    <div key={index} className={styles.list_item} > 
                        <div> {getID(item.id)} </div>
                        
                        <div> {item.name} </div>
                        <div> {item.email} </div>
                        
                    </div>
                )
            })
           } */}
       
      <div>
        <table className={styles.table}>
          <thead>
            <th className={styles.th}> ID </th>
            <th className={styles.th}> Name </th>
            <th className={styles.th}> UserName </th>
            <th className={styles.th}> Email </th>

            <th  className={styles.th} width="15%"> Action </th>
          </thead>

          <tbody>
            {ListStudent.map((item, index) => {
              return (
                <tr key={index}>
                  <td className={styles.td}> {item.id} </td>
                  <td className={styles.td}> {item.name} </td>
                  <td className={styles.td}> {item.username} </td>
                  <td className={styles.td}> {item.email} </td>
                  <td className={styles.td}>
                    <div className={styles.action}>
                        <Button 
                            title = "Delete"
                            onClick = {()=>handleDelete(item)}
                        />
                        <Button 
                            title = "Edit"
                        />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentScreen;


