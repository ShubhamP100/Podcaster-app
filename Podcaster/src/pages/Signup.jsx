import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {

  const [Values,setValues]=useState({
    username: "",
    email:" ",
    password:" ",
  })
  const change =(e)=>{
    const{ name,value}= e.target;
          setValues({...Values,[name]:value});
  };
  const handleSubmit =async()=>{
               
    try{
      const res = await axios.post(
        "http://localhost:3001/api/v1/sign-up",
        Values
      );
      console.log(res);
      }catch(error){
      console.log(error.response);
      
      }
  };
  return (
    <div className='h-screen bg-green-200 flex items-center justify-center'>
     <ToastContainer/>
     <div className='w-2/6 flex flex-col items-center justify-center'>
      <Link to="/" className="text-2xl font-bold">
         PODCASTER
      </Link>
      <div className='mt-6 w-full '>
        <div className='w-full flex flex-col'>
       
       <label htmlFor="">Username</label>
       
       <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black'
       
           required placeholder='username'
           name="username"
           value={Values.username}
           onChange={change}
       />
       
       <label htmlFor="">Email</label>
       <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black' 
        
         required placeholder='Email'
         name="email"
         value={Values.email}
         onChange={change}
       
       /> 
       <label htmlFor="">Password</label>
       <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black' 
        
         required placeholder='Password'
         name="password"
         value={Values.password}
         onChange={change}
       
       /> 
        </div>
        <div className='w-full flex flex-col mt-2'>
          <button className='bg-green-800 font-bold text-xl py-2 text-white rounded ' onClick={handleSubmit}>
            Signup
            </button>

        </div>
        <div className='w-full flex flex-col mt-2'>
          <p className='text-center'>Already have an account?
          <Link to="/login" className='font-semibold hover:text-blue-400 '>
          Login
          </Link>
          </p>
 
        </div>
      </div>
     </div>
    </div>
  )
}

export default Signup; 