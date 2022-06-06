import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Register from "./register";
import axios from "axios";
import Live from "./livestream";

export default function Login(e){
let nav = useNavigate();
  const[mob, setmob]=useState(null)
const [password,setPassword] = useState(null);
const [err,seterr] = useState(null);
  const checkvalidity = e =>{
    const user = {
      
      "mob" : mob,
      "pass": password,
    }
    // console.log(JSON.stringify(userdetails));
    e.preventDefault();
    // debugger;
    axios.post('http://localhost:4000/login', user)
    .then( (response) => {
      console.log(response.data);
      if(response.data===true){
        nav("/new/src/pages/livestream.js");
  }
  else {
    seterr("Hello");

  }
})

    }
  
  return(
    <>
    
<div className="row">
  <div className="col-lg-5 mt-5 text-center">
     
    <h2>Login</h2>
    <form onSubmit={checkvalidity} >
  <div className="form-outline px-4 mx-5">
    <label className="form-label" htmlFor="phoneno"></label><br/>
    <input type="tel" pattern="[0-9]{10}" onChange={e => setmob(e.target.value)} title="Please enter 10 digit Mobile Number" id="phone" className='form-control'  placeholder='Phone No.'/>  
    <label className="form-label" htmlFor="password"></label><br/>
    <input type="password" title="Enter Password" onChange={e => setPassword(e.target.value)} id="password" className='form-control' placeholder='Password'/>  
    <label className="form-label" htmlFor="submit"></label><br/>
    <button className='btn btn-primary w-100 mb-3' type='Submit'>Submit</button>
    
    <p>Dont't Have Registered &nbsp; <Link to="/new/src/pages/register.js" element={<Register/>} >Register Here</Link></p>
    <p style={{display : err ? "block" : "none", color: "red"}} > Please enter correct Password Or Register First If Not </p>
  </div> 
    </form>
    </div>
</div>
</>
)
}