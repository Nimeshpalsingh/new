import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./login";
export default function Register(){
  const axios=require('axios');
const [name, setname]=useState(null);
const[mob, setmob]=useState(null)
const [password,setPassword] = useState(null);
const [confirmPassword, setConfirmPassword] = useState(null);
const [passerr, setpasserr] = useState("Match Password Correctly");

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            setname(value);
        }
  
        if(id === "phone"){
            // debugger;
            setmob(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmpassword"){
          if(value===password){
            setpasserr(null)

            setConfirmPassword(value);
            }
        }
    }
  const handleSubmit = e =>{
        const userdetails = {
            "name" : name,
    "mob" : mob,
    "pass": password,
    "cnfpass": confirmPassword,
  }
  // console.log(JSON.stringify(userdetails));

    axios.post('http://localhost:4000/user', userdetails)
  }



    
return(
    <>
    
<div className="row">
  <div className="col-lg-5 mt-5 text-center">
     
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
  <div className="form-outline px-4 mx-5">
    <label className="form-label" htmlFor="name"></label><br/>
    <input type="text" title="Please enter Your Name" id="name" value={name} className='form-control'  
    placeholder='Enter Your Name' onChange = {(e) => handleInputChange(e)}/>  
    <label className="form-label" htmlFor="phone"></label><br/>
    <input type="tel" pattern="[0-9]{10}" title="Please enter 10 digit Mobile Number" onChange = {(e) => handleInputChange(e)}
     id="phone" value={mob} className='form-control'  placeholder='Phone No.'/>  
    <label className="form-label" htmlFor="password" ></label><br/>
    <input type="password" value={password} onChange = {(e) => handleInputChange(e)}
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" id="password" className='form-control' placeholder='Make a Strong Password'/>  
    <label className="form-label" htmlFor="password"></label><br/>
    <input type="password"  value={confirmPassword}  onChange = {(e) => handleInputChange(e)}
  title= {passerr} pattern={passerr} id="confirmpassword" className='form-control' placeholder='Confirm Password'/>  
    <label className="form-label" htmlFor="submit"></label><br/>
    <button className='btn btn-primary w-100 mb-3' type='Submit' >Submit</button>
    
    <p>Already Registered &nbsp; <Link to="/new/src/pages/login.js" element={<Login />} >Login Here</Link></p>
  </div> 
    </form>
    </div>
</div>
</>
)
}