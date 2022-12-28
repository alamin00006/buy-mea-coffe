import React from 'react';
import logo1 from '../../../images/logo1.PNG'
import { Bars3Icon } from '@heroicons/react/24/outline'
const DashboardNavbar = () => {
    return (
        <div className='lg:mx-16'>
            <div className="navbar bg-base-100">
                <div className="flex-1">
               
                    <img src={logo1} alt=""/>
                </div>
                <div className="flex-none gap-2">
                         <div>
                            <Bars3Icon className=' cursor-pointer w-6 h-6'/> 
                        </div> 
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                      
                        <div className="w-10 rounded-full">
                             <img src="https://placeimg.com/80/80/people" alt='' />
                         
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <a href='..' className="justify-between text-xl">
                            View my page
                        </a>
                        </li>
                        <li><a className='text-xl' href='..'>Dashboard</a></li>
                        <li><a className='text-xl' href='..'>Creators I follow</a></li>
                        <li><a className='text-xl' href='..'>My Account</a></li>
                        <li><a className='text-xl' href='..'>Logout</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;