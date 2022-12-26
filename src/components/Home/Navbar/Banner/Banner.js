import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='lg:mx-28 lg:mt-48 sm:mt-8'>
            <div>
                <h1 className=' lg:ml-48 sm:ml-16 text-center lg:w-2/3  lg:text-7xl  font-medium sm:text-2xl sm:w-2/3'>A supporter is worth a thousand followers.</h1>
                <p className='lg:ml-64 sm:ml-16  text-center  lg:text-xl lg:w-2/4 sm:w-3/4 mt-2'>Accept donations. Start a membership. Sell anything you like. It’s easier than you think.</p>
                
            </div>
            <div className='lg:ml-48 sm:ml-16 text-center lg:w-2/3 mea-coffe mt-2 rounded-full border'>
            <input className='w-96 h-20 pl-5 text-xl rounded-full outline-none' type='text' placeholder='buymeacoffe.com/yourname'/>
             <button className='bg-yellow-400 px-5 ml-36 py-4  rounded-full font-bold text-xl'>
                Start my page
             </button>
         
            </div>
        </div>
    );
};

export default Banner;