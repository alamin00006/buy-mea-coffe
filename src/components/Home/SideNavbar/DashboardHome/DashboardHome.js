import React from 'react';
import profile from '../../../../images/profile.jpg'
import './DashboardHome.css'
import { HeartIcon } from '@heroicons/react/24/outline'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
const DashboardHome = () => {
    return (
        <div className='ml-5 mt-32'>
            <div className='flex justify-between mb-5'>
                 <div className='flex align-items-center'>
                     <div>
                     <img className='profile-photo' src={profile} alt=""/>
                     </div>
                     <div className='ml-5'>
                        <h3>Hi, MOHAMMAD ALAMIN</h3>
                        <p>buymeacoffee.com/alaminbamnN</p>
                     </div>
                 </div>
                 <div className='ml-52'>
                    <button className='bg-black text-white py-2 px-2 rounded-full'>Share Page</button>
                 </div>
            </div>
            <hr/>
            <div className='flex mt-5'>
                <h3 className='font-bold text-xl'>
                     Earnings
                </h3>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="border px-5 py-1 rounded-full m-1">Last 30 days</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li><a href='..'>Last 30 days</a></li>
                        <li><a href='..'>Last 30 days</a></li>
                        <li><a href='..'>All time</a></li>
                    </ul>
               </div>
            </div>
            <div className='mt-4'>
                <h1 className='font-bold text-5xl'>$0</h1>
                 <div className='flex'>
                     <div>
                        <p> $0 Donations</p>
                     </div>
                     <div className='ml-5'>
                        <p> $0 Membership</p>
                     </div>
                     <div className='ml-5'>
                     <p>$0 Extras</p>
                     </div>
                 </div>
            </div>
            <div>
                <div className='bg-base-500 mt-4'>
                    <div className='border flex justify-center items-center p-16'>
                        <div className='text-center '>
                            <p className='ml-48'><HeartIcon className='w-6 h-6 bg-slate-200'/></p>
                            <p>You don't have any supporters yet</p>
                            <p>Share your page with your audience to get started.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mb-24'>
                <div>
                <h2 className='font-bold'>More ways to earn</h2>
                <div className="card bg-base-100 shadow-xl">
                    <div className="p-6 my-card">
                        <LockClosedIcon className='h-6 w-6'/>
                        <h2 className="card-title mt-2">Enable Memberships</h2>
                        <p>Monthly membership for your biggest fans.</p>
                        <div className="card-actions justify-start mt-2 ">
                        <button className="">Set Up</button>
                        <ChevronRightIcon className='h-5 w-5 mt-1 arrow-icon'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                
                <div className="card bg-base-100 shadow-xl mt-3">
                    <div className="p-6 my-card">
                        <LockClosedIcon className='h-6 w-6'/>
                        <h2 className="card-title mt-2">Enable Memberships</h2>
                        <p>Monthly membership for your biggest fans.</p>
                        <div className="card-actions justify-start mt-2 ">
                        <button className="">Set Up</button>
                        <ChevronRightIcon className='h-5 w-5 mt-1 arrow-icon'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
               
                <div className="card bg-base-100 shadow-xl mt-3">
                    <div className="p-6 my-card">
                        <LockClosedIcon className='h-6 w-6'/>
                        <h2 className="card-title mt-2">Enable Memberships</h2>
                        <p>Monthly membership for your biggest fans.</p>
                        <div className="card-actions justify-start mt-2 ">
                        <button className="">Set Up</button>
                        <ChevronRightIcon className='h-5 w-5 mt-1 arrow-icon'/>
                        </div>
                    </div>
                    </div>
                </div>
              
          
            </div>
         
        </div>
    );
};

export default DashboardHome;