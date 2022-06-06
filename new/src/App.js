import {  Link, Navigate, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Register from './pages/register';
import Live from './pages/livestream';
import Login from './pages/login';


function App() {
  
  //  const nav=useNavigate();
  //  console.log(nav);
  return (
    <>
   
   {/* <h1>Hello</h1> */}
   <div className="row">
    <h1><center>Welcome to City Buses Kota</center></h1>
    </div>
   
<Routes>
   
<Route exact path="/" element={<Login />}></Route>
<Route path="/new/src/pages/register.js" element={<Register />}></Route>
<Route path="/new/src/pages/login.js" element={<Login />}></Route>
<Route path="/new/src/pages/livestream.js" element={<Live />}></Route>
</Routes> 


   </>
  );
}

export default App;
