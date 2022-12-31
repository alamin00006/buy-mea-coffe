import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='lg:mx-28 lg:mt-48 sm:mt-8'>
            <div>
                <h1 className=' lg:ml-48 sm:ml-16 text-center lg:w-2/3  lg:text-7xl  font-medium sm:text-2xl sm:w-2/3'>A supporter is worth a thousand followers.</h1>
                <p className='lg:ml-64 sm:ml-16  text-center  lg:text-xl lg:w-2/4 sm:w-3/4 mt-2'>Accept donations. Start a membership. Sell anything you like. It’s easier than you think.</p>
                
            </div>
            <div className='lg:ml-48 sm:ml-16  text-center lg:w-2/3 mea-coffe sm:w-2/3 mt-2 lg:rounded-full lg:border flex justify-center items-center lg:flex-row sm: flex-col'>
             
              <div className='sm:rounded-full'>
                   <input className='lg:w-96 sm:w-5/5 lg:h-20 lg:pl-5 sm:p-5 sm:pl-3 sm:h-16 text-xl lg:rounded-full sm:rounded-full outline-none sm:border lg:border-none' type='text' placeholder='buymeacoffe.com/yourname'/>
              </div>
                     
             <div>
              <button className='lg:mt-0 sm:mt-2 bg-yellow-400 px-5  lg:ml-44 py-4  rounded-full font-bold text-xl'>
                    Start my page
            </button>
             </div>
              
         
            </div>
        </div>
    );
};

export default Banner;