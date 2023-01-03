import React from 'react';
import { Link } from 'react-router-dom';
import { SiGithubsponsors } from "react-icons/si";
import {BiDollarCircle} from "react-icons/bi";
import {AiOutlineDollarCircle} from "react-icons/ai";
import "./Donations.css"

const Donations = () => {
    return (
           
        <div className='bg-white w-full h-[100vh] mx-auto'>
       
      <div class="card-body m-10 bg-white ">

      <div class="tabs ">
        <Link class="tab tab-bordered tab-active" to="/sideNavbar/donations">Supporters</Link> 
        <Link class="tab tab-bordered " to="/sideNavbar/settings">Settings</Link>
        </div>
           
          
        <div className='mx-auto my-5'>
                    <div class="stats shadow bg-slate-100 mx-2 px-3">
                    <div class="stat ">
                        
                        <div class="stat-value">0</div>
                        <div class="group flex items-center mt-5">
                        <SiGithubsponsors/>
                        <div class="ltr:ml-3 rtl:mr-3">
                            <p class=" text-sm font-medium mx-3">Supporter</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="stats shadow bg-slate-100 mx-2 px-3">
                    <div class="stat">
                        
                        <div class="stat-value">$0</div>
                        <div class="group flex items-center mt-5">
                        <AiOutlineDollarCircle/>
                        <div class="ltr:ml-3 rtl:mr-3">
                            <p class="text-sm font-medium mx-3">Last 30 day</p>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="stats shadow bg-slate-100 mx-2 px-3">
                    <div class="stat">
                    
                        <div class="stat-value">$0</div>
                       <div class="group flex items-center mt-5">
                        <BiDollarCircle/>
                        <div class="ltr:ml-3 rtl:mr-3">
                            <p class="text-sm font-medium mx-3">All-Time</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                    <hr/>


                    <div class="card w-full card-body border-solid m-10 bg-base-100 shadow-xl mx-auto">
  
                <div class="card-body items-center text-center">
                    <div class="card-actions text-xl bg-slate-300 p-3 rounded-full">
                    <SiGithubsponsors className='m-auto'><span className='mt-'>0</span></SiGithubsponsors>

                    
                    </div>
                    <h2 class="card-title">You don't have any supporters yet</h2>
                    <p>Share your page with your audience to get started.</p>
                </div>
                </div>

 </div>
 </div>

    );
};

export default Donations;