import React from 'react';
import photo1 from '../../../images/1st.png'
import photo2 from '../../../images/2nd.png'
import photo3 from '../../../images/3rd.png'
import photo4 from '../../../images/4th.png'
import photo5 from '../../../images/5th.png'
import photo6 from '../../../images/6th.png'
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
                    <input className='lg:w-96 sm:w-5/5 lg:h-20 lg:pl-5 sm:p-5 sm:pl-3 sm:h-16 text-xl lg:rounded-full sm:rounded-full outline-none sm:border lg:border-none' type='text' placeholder='buymeacoffe.com/yourname' />
                </div>

                <div>
                    <button className='lg:mt-0 sm:mt-2 bg-yellow-400 px-5  lg:ml-44 py-4  rounded-full font-bold text-xl'>
                        Start my page
                    </button>
                </div>


            </div>
            <div class="bg-yellow-50 pb-10">
                <div class="xl:w-6/12 lg:w-6/12 md:w-7/12 sm:w-10/12 mx-auto text-center ">
                    <div class=" ">
                        <div class="text-xs font-bold tracking-widest  uppercase extras">Extras</div>
                        <div class="mt-5 font-bold text-3xl w-5/5 leading-tight px-16 mx-auto  ">
                            Introducing Extras, the creative way to sell.
                        </div>
                        <p class=" mt-5  text-base  leading-35  xs:text-18 xs:leading-30">The
                            things you’d like to sell probably do not belong in a Shopify store. Extras is designed from
                            the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art commissions, or an
                            ebook, Extras is for you.
                        </p>
                    </div>

                    <div class="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 mt-10 ">

                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo1} alt="Live Tarot Reading Via zoom" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10">Live Tarot Reading Via zoom</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-pink-500 hover:bg-pink-900 text-white ">Get this $5</button>
                            </div>

                        </div>
                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo2} alt="A Ticket to Hiei's Digi Comedy #3 8/6/20" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10  ">A Ticket to Hiei's Digi Comedy #3 8/6/20</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-amber-500 hover:bg-amber-900 text-white ">Get this $3</button>
                            </div>

                        </div>


                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo3} alt="Ultimate Seamless Transition 17" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10">Ultimate Seamless Transition 17</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-blue-500 hover:bg-blue-900 text-white ">Get this $60</button>
                            </div>

                        </div>


                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo4} alt="Deiscord Access" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10">Deiscord Access</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-cyan-500 hover:bg-cyan-900 text-white ">Get this $10</button>
                            </div>

                        </div>


                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo5} alt="Flower Power- Painting the Garden" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10">Flower Power- Painting the Garden</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-sky-600 hover:bg-sky-900 text-white ">Get this $15</button>
                            </div>

                        </div>


                        <div class=" p-4 w-auto bg-base-100 rounded-lg border border-gray-200 ">
                            <div class="mb-3">
                                <img src={photo6} alt="50 Free Templates For Streamers" class="" />
                            </div>

                            <div class="text-sm font-bold mb-3 text-left h-10">50 Free Templates For Streamers</div>
                            <div class="text-center">
                                <button class=" btn-xs text-xs font-bold rounded-full w-full bg-pink-500 hover:bg-pink-900 text-white ">Get this $60</button>
                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default Banner;