import React from 'react'
import { Link } from 'react-router-dom'

const  Categories = () =>{
   
  
  const category = [
    { 
      name:"Comedy",
      color:"bg-red-500",
      //to: "/categories/comedy",
      to:"/categories/Comedy",
      //img:"/images/comedyy.jpg",
    },
    { 
      name:"Business",
      color:"bg-green-300",
      to:"/categories/Business", 
      //img:""
    },
    { 
      name:"Sports",
      color:"bg-yellow-400",
      to:"/categories/Sports",
      //img:""
    },
    { 
      name:"Education",
      color:"bg-blue-500",
      to:"/categories/Education",
      //img:""
    },
    {
       name:"Finance",
       color:"bg-violet-500",
       to:"/categories/Finance",
    },
    

   ];
  
  return (
    <div className='h-screen lg:h-[78vh]'>
       <div className='px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
            {category.map((items,i) => (
              <Link 
              to={items.to} 
              key={i} 
              className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105  shadow-xl transition-all`}
              >

                <div>{items.name}</div>
                
                
              </Link>
            ))}
       </div>
    </div>
  );
};

export default Categories;