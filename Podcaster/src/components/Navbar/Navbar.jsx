import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    
    
    const  Navlinks=[
        {
          name:"Home",
          path:"/",
        },
        {
          name:"Categories",
          path:"/categories",
        },
        {
          name:"All Podcasts",
          path:"/all podcasts",
        },
        {
            name:"Profile",
            path:"/profile",
          },
          
    ]
  return (
   <nav className='px-4 md:px-8 lg:px-12 py-2 relative'>
     <div className='flex items-center justify-between'>
           
        <div className="logo brand-name w-2/6 flex items-center gap-4">
            <img
            src='mike.png'
            alt="podcaster"
            className='h-14' 
            />
            <Link to="/" className="text-2xl font-semibold">
            Podcaster
            </Link>
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-center'>
             {" "}
             {Navlinks.map((items,i)=> (<Link key={i} to={items.path} className='ms-4 hover:font-semibold transition-all duration-300'>{items.name} </Link>))}
        </div>
        <div className='hidden w-2/6 lg:flex items-center justify-end' >
        <Link to="/login"className='px-6 py-3 border border-black rounded-full'>Login</Link>
        <Link to="/signup" className='ms-4 px-6 py-3 bg-black text-white rounded-full'>Signup</Link>
        </div>
        
     </div>
 
   {/*<div className='h-full flex flex-col items-center justify-center'>
   {Navlinks.map((items,i)=> (
    <Link key={i} 
    to={items.path} 
    className='mb-6 text-2xl hover:font-semibold transition-all duration-300'
    >
        {items.name} 
        </Link>))}
   
        
        <Link 
          
          to="/login" 
        className='mb-6 text-2xl hover:font-semibold transition-all duration-300'
          >
        Login 
        </Link>
        <Link 
          
          to="/signup" 
        className='mb-6 text-2xl hover:font-semibold transition-all duration-300'
          >
        Signup
        </Link>
   </div>
*/}
   
   </nav>
  )
}

export default Navbar;