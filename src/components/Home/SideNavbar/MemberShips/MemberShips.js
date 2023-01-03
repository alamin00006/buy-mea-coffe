import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import img1 from '../../../../images/mem-onboard-1.png'
import img2 from '../../../../images/mem-onboard-2.png'

const Membership = () => {
    return (
        <div className='mx-auto'>
            <div class="card m-5 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-4xl">Enable membership</h2>
                    <p>HIGHLY RECOMMENDED</p>
                    <div class="card-actions">
                
                    <button  class="btn hover:bg-amber-200  bg-amber-300 text-black rounded-full">
                            <div>Enable membership</div>
                            <BsArrowRight className='mx-2'></BsArrowRight>
                    </button>
                    </div>
                </div>



                <div class="flex flex-nowrap  bg-base-100  mx-5">
                    <figure><img src={img1} alt="Album"/></figure>
                    <div class=" mr-5">
                        <h2 class="card-title text-2xl">Earn recurring income</h2>
                        <p className=''>Memberships are a great way to build recurring revenue, create engagement, and build deep and meaningful relationships with your fans. Start earning monthly/yearly upfront payments doing what you love!</p>
                        
                    </div>
                </div>

                <div class="flex flex-nowrap  bg-base-100  mx-5">
                    <div class="card-body">
                        <h2 class="card-title text-2xl">Share exclusives</h2>
                        <p className=''>Share exclusive posts, messages or other rewards with your members. Creators also turn on membership without rewards, only to accept monthly support.</p>
                        
                    </div>
                    <figure><img src={img2} alt="Album"/></figure>
                </div>

            </div>

        </div>
    );
};

export default Membership;