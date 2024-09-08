import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='h-screen bg-green-200 flex items-center justify-center'>

     <div className='w-2/6 flex flex-col items-center justify-center'>
      <Link to="/" className="text-2xl font-bold">
         PODCASTER
      </Link>
      <div className='mt-6 w-full '>
        <div className='w-full flex flex-col'>
       
       
       <label htmlFor="">Email</label>
       <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black' 
        
         required placeholder='Email'
       
       /> 
       <label htmlFor="">Password</label>
       <input type="text" className='mt-2 px-2 py-2 rounded outline-none border border-black' 
        
         required placeholder='Password'
       
       /> 
        </div>
        <div className='w-full flex flex-col mt-2'>
          <button className='bg-green-800 font-bold text-xl py-2 text-white rounded'>
            Login
            </button>

        </div>
        <div className='w-full flex flex-col mt-2'>
          <p className='text-center'>Don't have an account?<Link to="/signup" className='font-semibold hover:text-blue-400 '>Signup</Link></p>

        </div>
      </div>
     </div>
    </div>
  )
}

export default Login