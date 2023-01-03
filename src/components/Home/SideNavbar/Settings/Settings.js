import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
import "./Settings.css"

const Settings = () => {
    return (
        <div className='bg-white w-full h-[100vh] mx-auto'>
       
      <div class="card-body m-10 bg-white">

      <div class="tabs ">
        <Link class="tab tab-bordered " to="/sideNavbar/donations">Supporters</Link> 
        <Link class="tab tab-bordered tab-active" to="/sideNavbar/settings">Settings</Link>
        </div>
           <h3 className='text-xl card-title'>Price per coffee</h3>
            <p>Change the default price of a coffee to an amount of your choice.


            <div>
            <input placeholder="$1" type="radio" name="radio-6" class="text-red-400 p-8 m-2 radio radio-warning" checked />
            <input placeholder="$2" type="radio" name="radio-6" class="p-8 m-2 radio radio-warning" checked />
            <input placeholder="$3" type="radio" name="radio-6" class="p-8 m-2 radio radio-warning" checked />
            <input placeholder="$4" type="radio" name="radio-6" class="p-8 m-2 radio radio-warning"checked />
            <input placeholder="$5" type="radio" name="radio-6" class="p-8 m-2 radio radio-warning" checked />
            </div>
           
            <hr/>


            


            <div className='flex flex-nowrap'>
                <h3 className='text-xl card-title '>Thank you message</h3>
                
                <label for="my-modal-6" class="btn gap-2 text-white  bg-gray-500 hover:bg-gray-400 px-5 py-2 rounded-full cursor-pointer  absolute mx-40 my-2 right-0"><AiFillEye/>
                        <div>Preview</div></label>

                  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                <div class="modal modal-bottom sm:modal-middle ">
                  <div class="modal-box ">
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                      <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                  </div>
                </div>  
              
            </div>
</p> 

<div className='m-10'>
    <p>This will be visible after the payment and in the receipt email. Write a personable thank you message, and include any rewards if you like.</p>

    <div class="form-control m-10">
  <label class="label">
    
  </label> 
  <textarea class="text-1xl textarea textarea-bordered h-24" placeholder="Thank you for the support! 🎉"></textarea>
  <label class="label">
    
  </label> 
</div>
</div>
        <div className='flex '>
        <h3 className='card-title text-xl mx-3'>Indicate my donation</h3>
        <input type="checkbox" class="my-auto toggle toggle-warning"  />
        </div>


<button class="btn hover:bg-amber-300 bg-amber-400 text-black">Button</button>
 </div>
 </div>
        
    );
};

export default Settings;