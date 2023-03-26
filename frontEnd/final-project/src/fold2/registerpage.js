import axios from "axios";
import { useState } from "react";
import "../components/registration.css";

function Register()
{
   const [id, setId] = useState("");
   const [firstname, setFname] = useState("");
   const [lastname, setLname] = useState("");
   const [city, setCity] = useState("");
   const [phone, setPhone] = useState("");
   const [username, setUsername] = useState("");

   async function handleSubmit(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8087/save", 
        {
        id: id,
        fname: firstname,
        lname : lastname,
        city : city,
        phone : phone,
        username :username 
        });
          alert("User Registered Successfully");
          setId("");
          setFname("");
          setLname("");
          setCity("");
          setPhone("");
          setUsername("");
        
        }
    catch(err)
        {
          alert("User Registration Failed");
        }
   }
    return (
        <div className="register-container">
     
            <form className="register-form" onSubmit={handleSubmit}> 
            <br></br>      
            <h1>Registration Form</h1>
            <p>Sign up by filling below information</p>

            <input type="text" 
             name="id"
             placeholder="ID"
                     
             onChange={(event) =>
              {
                  setId(event.target.value);       
              }}
            />

            <input type="text" 
            name="firstname" 
            placeholder="First name" 
            onChange={(event) =>
                {
                    setFname(event.target.value);       
                }}
            />

            <input type="text" 
            name="lastname"
            placeholder="Last name"
            onChange={(event) =>
                {
                    setLname(event.target.value);       
                }}           
            />

             
            <input type="text" 
            name="city" 
            placeholder="City"
            onChange={(event) =>
                {
                    setCity(event.target.value);       
                }}           
            />
        <input type="text" 
            name="phone" 
            placeholder="Phone"
            onChange={(event) =>
                {
                    setPhone(event.target.value);       
                }}           
            />

    <input type="text" 
            name="username" 
            placeholder="Username"
            onChange={(event) =>
                {
                    setUsername(event.target.value);       
                }}           
            />

            <button type="submit">Register</button>

    
            </form>     

     
        </div>
    )
}

export default Register;