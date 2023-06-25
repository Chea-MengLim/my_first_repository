import ListPerson from "../../components/list/ListPerson";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./Student.module.css";

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
  return (
    <div>
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
         
            
              <th className={styles.th}> ID </th>
              <th className={styles.th}> Name </th>
              <th className={styles.th}> Email </th>
              <th className={styles.th}> Phone </th>
              <th className={styles.th}> Website </th>
           
         
          <tbody>
            {ListStudent.map((item, index) => {
              return (
                <tr key={index}>
                  <td className={styles.td}> {item.id} </td>
                  <td className={styles.td}> {item.name} </td>
                  <td className={styles.td}> {item.email} </td>
                  <td className={styles.td}> {item.phone} </td>
                  <td className={styles.td}> {item.website} </td>
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

// finish 18
