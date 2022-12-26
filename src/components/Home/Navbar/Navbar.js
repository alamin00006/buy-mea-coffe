import React from 'react';
import './Navbar.css'
import logo1 from '../../../images/logo1.PNG'

const Navbar = () => {
    return (
        <div className='lg:mx-28 lg:border navbar-part mt-6 lg:shadow-md rounded-full'>
            <div className="navbar bg-base-100 ">
                    <div className="flex-1">
                        <img className='ml-4' src={logo1} alt=''/>
                        <a href='..' className=" lg:ml-8 hover:bg-slate-200 rounded-full px-4 py-2 normal-case ">FAQ</a>
                    </div>
                    <div className="lg:mr-5">
                       <h1 className='lg:mr-5 sm:mr-2'>Log in</h1>
                       <button className='bg-yellow-300 px-5 rounded-full py-2'><h1 className='font-bold'>Sing Up</h1></button>
                    </div>
                </div>
        </div>
    );
};

export default Navbar;