import { useState } from "react";
import styles from "./contactUs.module.css";
import { getImageUrl } from "../../../utils";
const Contact = () => {

    const [userdata, setuserdata]=useState({
        name :'',
        Email : '',
        subject : '',
        massage : ' ',
    })

    let name , value 
    const data = (e)=>{
        name=e.target.name
        value=e.target.value 
        setuserdata({...userdata , [name]:value})
    }

    const send = async(e) =>{
        const {name,Email,subject,massage} =userdata 
        e.preventDefault() ;

        const option = {
            method :"POST",
            headers :{
                'Content-type':'aplication/json'
            },
            body : JSON.stringify({name,Email,subject,massage})
        }
        const res = await fetch('https://contactus-3ee4c-default-rtdb.firebaseio.com/massages.json',option)
        if (res.ok) {
          alert('Query sent successfully!');
        } else {
          alert('Failed to send the query. Please try again.');
        }
    }
  return (
    <>
      <div className={styles.container}>
    
      <img src={getImageUrl("hero/ccccc.png")} className={styles.contact_img} />
       
      
        <div className={styles.Conatct_box}>
        <h2 className={styles.title}>GET IN TOUCH</h2>
          <form method="POST" className={styles.contact_box_form}>
            <input
              type="text"
              name="name"
              value={userdata.name}
              placeholder="enter your full name " onChange={data}
            ></input>
            <input
              type="text"
              name="Email"
              value={userdata.Email}
              placeholder="enter your email " onChange={data}
            ></input>
            <input
              type="text"
              name="subject"
              value={userdata.subject}
              placeholder="enter your subjects of message  " onChange={data}
            ></input>
            <textarea
  value={userdata.message}
  name="message"
  placeholder="Enter your message here"
  onChange={data}
/>{" "}
            <button onClick={send}>submit</button>
          </form>
        </div>
        
      </div>
    </>
  );
};
  export default Contact ;