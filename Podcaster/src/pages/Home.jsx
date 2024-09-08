 import React from 'react'

 const Home = () => {
   return (
     <div className='bg-green-100 px-12 py-12 h-[89vh] flex flex-col items-center justify-center '>

     <div className='w-full flex items-center justify-between gap-4'>
        <div className='w-full lg:w-5/6'>
         <h1 className='text-4xl md:text-6xllg:text-8xl font-bold '>
            Create & listen the <br />{" "} 
            <h2 className='flex items-end'>
            p
            <span>
             <img
               src="podcast with mic.jpg"
               alt='headphone'
               className='h-10 md:h-12 lg:h-20 mx-2'
             />

            </span>
            dcast
             </h2>
            </h1>
        </div>
        <div className='w-1/6 '>
         <div className='py-4 border border-black text-xl font-semibold rounded-full text-center -rotate-90'>
               Scroll Down 
          </div> 
        </div>
      {/* This div is for Listen to statemnt*/}
      </div>
      <div className='mt-12  w-full flex flex:col lg:flex-row items-end justify-between '>
        <div className='mt-8 lg:mt-0'>
            <p className='text-2xl font-semibold text-center lg:text-start'>
              Listen to the most popular podcasts on one and only platform-{" "}
              <b>PODCASTER </b> 
            </p>  
            <button className='mt-8  px-6 py-4 bg-green-900 text-white font-semibold rounded-full '>Login to listen</button>
            </div>
        <div>
            <p className='text-zinc-600 font-bold text-center lg:text-end'>Our app contains more than 2000 podcasts for you</p>
        </div>
      </div>
     </div>
   )
 }
 export default Home;  
 