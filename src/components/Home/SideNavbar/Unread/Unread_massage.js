import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Message = () => {

    const [isActive, setIsActive] = useState(false);
    function ShowSearch() {

        setIsActive(isActive => !isActive);
    };
    const [click, setclick] = useState(false);
    function Messaging() {

        setclick(click => !click);
    };
    const[option, setoption]= useState('false')
    
    return (
        <div class="w-full bg-[#F9F9F9] h-full ">
            <div class="  w-full">
                <div class="w-full px-[16px]">
                    <div class="">
                        <p class="text-lg  mb-[24px] font-bold">Messages</p>
                    </div>
                    <div class=" bg-[#FFFFFF]">
                        <div class=" h-20 border-b-2 border-solid border-[rgba(34,34,34,.05)]">
                            <div class=" pt-3 content-center   ">

                                <div className={isActive ? 'w-6/12 mx-auto flex' : 'hidden'} id="input-search" >
                                    <div class="mt-5">
                                        <svg class="search-post-icon " width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                                fill="#717171"></path>
                                            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16"
                                                height="16">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                                    fill="white"></path>
                                            </mask>
                                            <g mask="url(#mask0)"></g>
                                        </svg>
                                    </div>

                                    <input type="text " placeholder="Type here" class="input w-full focus:outline-none  " />
                                    <div onClick={ShowSearch} class="relative mt-3 mr-4 ">
                                        <svg class="search-close cursor-pointer " width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.2471 5.92852C15.5716 5.60405 15.5716 5.07798 15.2471 4.75352C14.9227 4.42905 14.3966 4.42905 14.0721 4.75352L10.0013 8.82435L5.93047 4.75352C5.606 4.42905 5.07994 4.42905 4.75547 4.75352C4.431 5.07798 4.431 5.60405 4.75547 5.92852L8.8263 9.99935L4.75547 14.0702C4.431 14.3947 4.431 14.9207 4.75547 15.2452C5.07994 15.5697 5.606 15.5697 5.93047 15.2452L10.0013 11.1743L14.0721 15.2452C14.3966 15.5697 14.9227 15.5697 15.2471 15.2452C15.5716 14.9207 15.5716 14.3947 15.2471 14.0702L11.1763 9.99935L15.2471 5.92852Z"
                                                fill="#717171"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className={isActive ? 'hidden' : 'flex justify-between mx-[32px]'} id="btn-search">
                                    <div class="flex pt-3 ">
                                        <Link to="/SideNavbar/Message"
                                            class="text-gray-400 text-[16px] mr-[12px] font-semibold hover:text-black active   ">All</Link>
                                        <Link to="/SideNavbar/Unread"
                                            class=" text-black   text-[16px] font-semibold after:content-[''] after:w-full after:block after:h-[2px] after:bg-black after:mt-[30px]   ">Unread</Link>
                                    </div>

                                    <div class="flex ">
                                        <span class="w-[40px] h-[50px] tooltip " data-tip="New message">

                                            <label for="newmsg"
                                                class=" btn bg-transparent hover:bg-gray-100 border-none rounded-full ">
                                                <svg class="" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.00262 2V14" stroke="#717171" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M14.0114 7.99992H2" stroke="#717171" stroke-width="1.5"
                                                        stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </label>

                                        </span>

                                        <span class="w-[40px] h-[50px] tooltip " data-tip="Search">

                                            <button onClick={ShowSearch} className='btn bg-transparent hover:bg-gray-100 border-none rounded-full'>                                              <svg class="search-post-icon cursor-pointer " width="16" height="16"
                                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                                    fill="#717171"></path>
                                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                                                    width="16" height="16">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                                        fill="white"></path>
                                                </mask>
                                                <g mask="url(#mask0)"></g>
                                            </svg>
                                            </button>

                                        </span>

                                        <span class="w-[40px] h-[50px] tooltip " data-tip="Setting">
                                            <label for="my-modal-4"
                                                class=" btn bg-transparent hover:bg-gray-100 border-none rounded-full ">
                                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M13.7663 4.89333L13.313 4.10667C12.9294 3.44103 12.0795 3.2114 11.413 3.59333V3.59333C11.0957 3.78024 10.7171 3.83327 10.3606 3.74073C10.0042 3.64818 9.69924 3.41766 9.51296 3.1C9.39313 2.89809 9.32873 2.66812 9.32629 2.43333V2.43333C9.33711 2.05692 9.19509 1.69215 8.93261 1.42214C8.67013 1.15212 8.30953 0.999845 7.93296 1H7.01963C6.6507 0.999996 6.29699 1.14701 6.03674 1.4085C5.7765 1.66999 5.63119 2.02441 5.63296 2.39333V2.39333C5.62203 3.15503 5.0014 3.76675 4.23963 3.76667C4.00485 3.76423 3.77487 3.69984 3.57296 3.58V3.58C2.90641 3.19806 2.05648 3.42769 1.67296 4.09333L1.18629 4.89333C0.803238 5.55814 1.02974 6.40753 1.69296 6.79333V6.79333C2.12406 7.04223 2.38964 7.50221 2.38964 8C2.38964 8.49779 2.12406 8.95777 1.69296 9.20667V9.20667C1.03058 9.58986 0.803833 10.4372 1.18629 11.1V11.1L1.64629 11.8933C1.82599 12.2176 2.12749 12.4568 2.48407 12.5582C2.84066 12.6595 3.22293 12.6146 3.54629 12.4333V12.4333C3.86418 12.2478 4.24299 12.197 4.59853 12.2922C4.95407 12.3873 5.25687 12.6205 5.43963 12.94C5.55946 13.1419 5.62386 13.3719 5.62629 13.6067V13.6067C5.62629 14.3762 6.25011 15 7.01963 15H7.93296C8.69988 15 9.32263 14.3802 9.32629 13.6133V13.6133C9.32451 13.2433 9.47074 12.8878 9.73242 12.6261C9.99411 12.3644 10.3495 12.2182 10.7196 12.22C10.9538 12.2263 11.1829 12.2904 11.3863 12.4067V12.4067C12.0511 12.7897 12.9005 12.5632 13.2863 11.9V11.9L13.7663 11.1C13.9521 10.7811 14.0031 10.4013 13.908 10.0447C13.8129 9.68804 13.5795 9.38405 13.2596 9.2V9.2C12.9397 9.01595 12.7064 8.71196 12.6113 8.35534C12.5162 7.99872 12.5672 7.61891 12.753 7.3C12.8738 7.08906 13.0487 6.91416 13.2596 6.79333V6.79333C13.9189 6.40774 14.1448 5.56331 13.7663 4.9V4.9V4.89333Z"
                                                        stroke="#717171" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                    </path>
                                                    <circle cx="7.47859" cy="8.00008" r="1.92" stroke="#717171"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    </circle>
                                                </svg>
                                            </label>
                                        </span>



                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                        <div class="mt-[48px] mb-[16px] ">
                                <div class="p-[64px] mx-auto text-center">
                                    <span class="w-[40px] h-[50px] mt-[5px] ">
                                        <svg class="mx-auto" width="48" height="41" viewBox="0 0 48 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.92055 13.1156C7.79859 11.886 7.93969 10.6445 8.33447 9.47363C8.72925 8.30276 9.36867 7.2293 10.2103 6.32458C11.0518 5.41986 12.0763 4.70459 13.2156 4.22628C14.3549 3.74798 15.583 3.5176 16.8182 3.55045C18.3745 3.58747 19.8921 4.0425 21.2121 4.86783C22.2052 3.07011 23.8012 1.68071 25.7185 0.944551C27.6359 0.208391 29.7516 0.172732 31.6926 0.843861C33.6337 1.51499 35.2756 2.84982 36.3288 4.61305C37.3819 6.37627 37.7789 8.4547 37.4496 10.482H37.5298C39.2219 10.5235 40.878 10.9793 42.3531 11.8095C43.8281 12.6396 45.0772 13.8187 45.9908 15.2435C46.9045 16.6683 47.4549 18.2954 47.5939 19.9823C47.7328 21.6692 47.456 23.3644 46.7878 24.9196C46.1196 26.4747 45.0803 27.8423 43.7609 28.9025C42.4416 29.9628 40.8824 30.6834 39.2199 31.0013C37.5574 31.3192 35.8423 31.2247 34.2249 30.726C32.6074 30.2272 31.1369 29.3396 29.9421 28.1407C29.1415 29.3737 28.0422 30.3844 26.7464 31.0788C25.4506 31.7732 24.0003 32.1288 22.5303 32.1125C21.0603 32.0962 19.6182 31.7086 18.3381 30.9857C17.058 30.2628 15.9814 29.228 15.2083 27.9776C14.2232 28.9455 13.0223 29.6657 11.7044 30.0788C10.3865 30.4919 8.98938 30.586 7.628 30.3536C6.26661 30.1211 4.9799 29.5686 3.87379 28.7416C2.76769 27.9146 1.87381 26.8367 1.26575 25.5967C0.657682 24.3566 0.35282 22.9899 0.376256 21.609C0.399692 20.2281 0.750756 18.8725 1.40055 17.6538C2.05034 16.4352 2.98028 15.3882 4.11381 14.5992C5.24735 13.8102 6.55206 13.3017 7.92055 13.1156Z" fill="#F0F5F9"></path>
                                            <path d="M8.88078 30.4776C10.0499 30.508 11.2132 30.3024 12.3011 29.8732C13.389 29.444 14.3793 28.7999 15.2127 27.9793C15.9855 29.2297 17.0619 30.2643 18.3418 30.9871C19.6217 31.71 21.0635 32.0976 22.5333 32.1138C24.0032 32.1301 25.4532 31.7746 26.7488 31.0802C28.0444 30.3859 29.1434 29.3754 29.9438 28.1425C31.4866 29.6865 33.4779 30.7036 35.6332 31.0486C37.7885 31.3936 39.9977 31.0488 41.9455 30.0635C43.8932 29.0782 45.4798 27.5027 46.4788 25.562C47.4779 23.6213 47.8382 21.4145 47.5084 19.2568C47.2209 21.1512 46.4133 22.9286 45.1753 24.391C43.9374 25.8535 42.3178 26.9436 40.4969 27.54C38.676 28.1363 36.7253 28.2155 34.8621 27.7687C32.9988 27.3219 31.2962 26.3666 29.9438 25.0093C29.1433 26.2421 28.0442 27.2526 26.7487 27.9468C25.4531 28.641 24.003 28.9965 22.5332 28.9802C21.0635 28.9639 19.6217 28.5763 18.3418 27.8535C17.0619 27.1307 15.9856 26.0961 15.2127 24.8458C14.0827 25.9562 12.6717 26.7379 11.1311 27.1069C9.59043 27.4759 7.97839 27.4182 6.46803 26.9402C4.95768 26.4622 3.60605 25.5818 2.55828 24.3935C1.51051 23.2053 0.806179 21.7541 0.520908 20.1958C0.437954 20.6388 0.391423 21.0878 0.381783 21.5383C0.352359 22.6835 0.548906 23.8232 0.960189 24.8923C1.37147 25.9615 1.98943 26.9391 2.77873 27.7693C3.56804 28.5995 4.51321 29.266 5.56024 29.7307C6.60727 30.1954 7.73561 30.4492 8.88078 30.4776Z" fill="#D9E2E9"></path>
                                            <path d="M33.7386 12.822C33.6623 12.8221 33.5878 12.7988 33.525 12.7555C33.4623 12.7121 33.4143 12.6506 33.3874 12.5792C33.3605 12.5078 33.356 12.4299 33.3745 12.3559C33.3931 12.2819 33.4337 12.2153 33.4911 12.165C34.6269 11.169 35.9883 10.4647 37.4575 10.113C37.5542 10.0961 37.6537 10.1179 37.7346 10.1736C37.8155 10.2293 37.8713 10.3146 37.89 10.411C37.9087 10.5074 37.8888 10.6073 37.8347 10.6892C37.7805 10.7711 37.6964 10.8286 37.6003 10.8491C36.2637 11.1808 35.0248 11.8251 33.9857 12.729C33.9175 12.7891 33.8296 12.8222 33.7386 12.822Z" fill="#2F3A5A"></path>
                                            <path d="M12.59 4.66895C12.59 4.66895 7.07303 8.40169 11.4568 13.6509C11.4091 13.6915 11.3645 13.7354 11.3233 13.7826C10.0547 12.9553 9.95191 13.3198 8.12678 13.1143C8.12678 13.1143 6.88066 7.00894 12.59 4.66895Z" fill="#D9E2E9"></path>
                                            <path d="M22.6323 32.4879C22.5543 32.4879 22.4762 32.4869 22.3979 32.4849C20.9634 32.4507 19.5574 32.0767 18.2955 31.3937C17.0336 30.7106 15.9517 29.738 15.1387 28.5556C14.0875 29.4898 12.834 30.1674 11.4767 30.5354C10.1194 30.9034 8.69534 30.9517 7.31625 30.6765C5.93716 30.4013 4.64067 29.8101 3.5286 28.9493C2.41653 28.0886 1.51917 26.9817 0.907026 25.7156C0.294878 24.4496 -0.015392 23.0588 0.000587346 21.6527C0.0165667 20.2465 0.35836 18.8631 0.99912 17.6113C1.63988 16.3595 2.56215 15.2733 3.6935 14.438C4.82484 13.6028 6.13444 13.0412 7.51942 12.7974C7.50405 12.5386 7.49917 12.2889 7.50555 12.0414C7.54486 10.4709 7.99017 8.93736 8.79814 7.59009C9.60611 6.24281 10.7492 5.12772 12.1161 4.3534C13.4829 3.57907 15.0271 3.17189 16.598 3.17152C18.169 3.17114 19.7133 3.57758 21.0805 4.35125C22.1252 2.64288 23.7043 1.32691 25.573 0.607447C27.4417 -0.11202 29.4956 -0.194784 31.4162 0.37199C33.3367 0.938764 35.0166 2.1234 36.1953 3.74219C37.374 5.36098 37.9856 7.32345 37.9353 9.32525C37.9289 9.58438 37.9098 9.85025 37.879 10.1203C39.5965 10.2175 41.2654 10.7264 42.745 11.604C44.2245 12.4815 45.4714 13.702 46.3803 15.1624C47.2893 16.6229 47.8337 18.2805 47.9677 19.9955C48.1017 21.7105 47.8213 23.4326 47.1502 25.0165C46.479 26.6004 45.4368 27.9997 44.1115 29.0964C42.7862 30.193 41.2166 30.9549 39.535 31.3177C37.8535 31.6806 36.1094 31.6337 34.4498 31.1811C32.7902 30.7285 31.2637 29.8835 29.9992 28.7173C29.1604 29.8872 28.0543 30.8398 26.7728 31.4956C25.4914 32.1515 24.0718 32.4917 22.6323 32.4879ZM15.28 27.3808L15.5268 27.7794C16.2665 28.9762 17.2968 29.9666 18.5218 30.6585C19.7469 31.3504 21.127 31.7214 22.5339 31.7369C23.9407 31.7525 25.3287 31.4121 26.5688 30.7475C27.8089 30.0829 28.8608 29.1155 29.6268 27.9354L29.8795 27.5473L30.2065 27.8754C31.3581 29.0301 32.7752 29.8849 34.3337 30.3649C35.8922 30.845 37.5446 30.9357 39.1463 30.6292C40.748 30.3226 42.2501 29.6281 43.5212 28.6064C44.7923 27.5847 45.7935 26.2671 46.4373 24.7687C47.0811 23.2704 47.3478 21.6371 47.214 20.0118C47.0802 18.3866 46.5501 16.8189 45.67 15.4459C44.79 14.073 43.5868 12.9368 42.1658 12.1367C40.7448 11.3366 39.1493 10.897 37.519 10.8564H37.4407L37.0117 10.8478L37.0792 10.421C37.2696 9.24545 37.206 8.04275 36.8926 6.89384C36.5793 5.74493 36.0234 4.67649 35.2625 3.76043C34.5015 2.84437 33.5532 2.10195 32.4813 1.58314C31.4093 1.06434 30.2387 0.781189 29.0482 0.752753C28.9777 0.752753 28.9068 0.750128 28.8363 0.750128C27.3468 0.748766 25.8842 1.14689 24.6009 1.90301C23.3176 2.65912 22.2606 3.74557 21.5399 5.04913L21.3487 5.39413L21.0138 5.18525C19.692 4.35973 18.1653 3.921 16.6069 3.91879C15.0484 3.91658 13.5205 4.35097 12.1963 5.17274C10.8722 5.99451 9.80467 7.17079 9.11485 8.56825C8.42503 9.96571 8.14047 11.5285 8.29342 13.0794L8.32792 13.4383L7.97055 13.4866C6.66041 13.6643 5.41123 14.1507 4.32588 14.9057C3.24053 15.6607 2.35006 16.6628 1.72781 17.8293C1.10556 18.9959 0.769327 20.2935 0.746807 21.6155C0.724286 22.9374 1.01612 24.2458 1.59828 25.4329C2.18043 26.6199 3.03625 27.6517 4.09525 28.4433C5.15426 29.2348 6.38615 29.7634 7.68947 29.9857C8.99279 30.2079 10.3303 30.1173 11.5917 29.7214C12.8532 29.3255 14.0026 28.6356 14.9452 27.7085L15.28 27.3808Z" fill="#2F3A5A"></path>
                                            <path d="M14.9227 11.1436C14.8828 11.1309 14.8453 11.1117 14.8116 11.0868C13.9545 10.46 13.0019 9.97563 11.9905 9.65233C11.943 9.63899 11.8987 9.61643 11.86 9.58595C11.8213 9.55547 11.7889 9.51767 11.7648 9.47469C11.7407 9.43172 11.7253 9.38442 11.7195 9.33549C11.7137 9.28656 11.7176 9.23697 11.7309 9.18954C11.7443 9.14211 11.7668 9.09777 11.7973 9.05906C11.8278 9.02035 11.8656 8.98802 11.9086 8.96391C11.9515 8.93981 11.9988 8.92441 12.0478 8.91859C12.0967 8.91277 12.1463 8.91664 12.1937 8.92998C13.2949 9.27474 14.3311 9.8001 15.26 10.4846C15.3315 10.5374 15.3818 10.6139 15.4021 10.7005C15.4224 10.787 15.4113 10.8779 15.3708 10.957C15.3303 11.0361 15.263 11.0982 15.181 11.1324C15.0989 11.1665 15.0074 11.1703 14.9228 11.1433L14.9227 11.1436Z" fill="#2F3A5A"></path>
                                            <path d="M12.8281 17.0039L37.4892 24.8153L32.6524 40.0853L7.99134 32.2739L12.8281 17.0039Z" fill="#FFDD00"></path>
                                            <path d="M37.4881 24.815L32.6506 40.0871L7.99066 32.2761L8.52514 30.5887L31.6121 37.9015L35.9151 24.3167L37.4881 24.815Z" fill="#EFD007"></path>
                                            <path d="M32.5369 40.4431L7.87615 32.6318C7.78134 32.6018 7.70234 32.5353 7.65653 32.447C7.61072 32.3588 7.60186 32.2559 7.63189 32.1611L12.4688 16.8907C12.4988 16.7959 12.5653 16.7169 12.6536 16.6711C12.7419 16.6253 12.8447 16.6164 12.9395 16.6464L37.6002 24.4577C37.695 24.4878 37.774 24.5542 37.8198 24.6425C37.8657 24.7308 37.8745 24.8336 37.8445 24.9285L33.0077 40.1985C32.9929 40.2455 32.9689 40.2891 32.9372 40.3268C32.9055 40.3645 32.8667 40.3957 32.823 40.4184C32.7792 40.4411 32.7315 40.455 32.6824 40.4592C32.6333 40.4635 32.5838 40.458 32.5369 40.4431ZM8.46012 32.0301L32.4058 39.6149L37.0163 25.0595L13.0705 17.4747L8.46012 32.0301Z" fill="#2F3A5A"></path>
                                            <path d="M21.9565 31.0202C21.8761 30.9947 21.8066 30.9429 21.7592 30.8731L12.5184 17.2148C12.489 17.1741 12.4681 17.1279 12.4569 17.0789C12.4456 17.03 12.4444 16.9793 12.4531 16.9298C12.4619 16.8804 12.4805 16.8332 12.5078 16.7911C12.5351 16.7489 12.5706 16.7127 12.6122 16.6846C12.6538 16.6564 12.7006 16.6369 12.7499 16.6272C12.7992 16.6175 12.8499 16.6178 12.899 16.6281C12.9482 16.6383 12.9948 16.6584 13.036 16.687C13.0773 16.7156 13.1124 16.7522 13.1393 16.7946L22.2141 30.2069L37.356 24.4653C37.4022 24.4468 37.4517 24.4376 37.5015 24.4385C37.5513 24.4393 37.6004 24.45 37.646 24.47C37.6917 24.4901 37.7328 24.519 37.7671 24.5551C37.8015 24.5912 37.8282 24.6338 37.8459 24.6803C37.8636 24.7269 37.8718 24.7765 37.8701 24.8263C37.8684 24.8761 37.8568 24.925 37.8359 24.9703C37.8151 25.0155 37.7854 25.0562 37.7487 25.0898C37.712 25.1235 37.6689 25.1495 37.6221 25.1663L22.2025 31.0135C22.1236 31.0433 22.0369 31.0457 21.9565 31.0202Z" fill="#2F3A5A"></path>
                                            <path d="M7.8794 32.6346C7.80475 32.611 7.73936 32.5646 7.6924 32.5019C7.64544 32.4393 7.61927 32.3635 7.61756 32.2852C7.61585 32.2069 7.63868 32.1301 7.68286 32.0654C7.72704 32.0008 7.79034 31.9516 7.86389 31.9248L20.0256 27.481C20.0719 27.4638 20.1212 27.4559 20.1706 27.4579C20.2199 27.4598 20.2684 27.4715 20.3133 27.4922C20.3581 27.5129 20.3984 27.5423 20.4319 27.5786C20.4653 27.615 20.4913 27.6576 20.5082 27.704C20.5252 27.7504 20.5328 27.7997 20.5306 27.8491C20.5284 27.8984 20.5165 27.9469 20.4956 27.9916C20.4746 28.0364 20.445 28.0765 20.4085 28.1098C20.372 28.1431 20.3292 28.1688 20.2827 28.1855L8.12067 32.6292C8.04308 32.6577 7.95819 32.6596 7.8794 32.6346Z" fill="#2F3A5A"></path>
                                            <path d="M32.535 40.4455C32.4563 40.4204 32.388 40.37 32.3409 40.3021L24.9548 29.6666C24.8986 29.5849 24.8771 29.4843 24.8949 29.3868C24.9127 29.2893 24.9684 29.2028 25.0498 29.1462C25.1312 29.0896 25.2317 29.0676 25.3293 29.0849C25.4269 29.1022 25.5137 29.1575 25.5706 29.2386L32.9564 39.874C33.0011 39.9383 33.0245 40.015 33.0234 40.0934C33.0223 40.1717 32.9967 40.2477 32.9502 40.3107C32.9036 40.3737 32.8386 40.4206 32.764 40.4448C32.6895 40.4689 32.6093 40.4691 32.5347 40.4453L32.535 40.4455Z" fill="#2F3A5A"></path>
                                            <circle cx="37.432" cy="9.43335" r="6.17841" transform="rotate(2.41582 37.432 9.43335)" fill="#2F3A5A"></circle>
                                            <path d="M33.9991 9.29006L35.97 11.4345L40.2589 7.49285" stroke="#F0F5F9" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </span>
                                    <h4 class="mt-[16px] mb-[8px] text-[#222] text-[20px] font-bold "> You're all caught up</h4>
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <input type="checkbox" id="newmsg" class="modal-toggle w-100" />
                <label for="newmsg" class="modal cursor-pointer ">
                    <label class="modal-box relative  bg-white" for="">
                        <div
                            class="flex px-[36px] justify-between pt-[36px] py-[16px] border-b-[1.5px] border-[rgba(34, 34, 34, 0.05)] ">
                            <div class=" ">
                                <h2 class="text-[20px] leading-[27px] font-bold text-[#222222]  ">New message</h2>
                            </div>
                            <div class="relative">
                                <div class="flex display:inline-block ">
                                    <a href=""
                                        class=" p-2 px-[16px] justify-center  rounded-full text-[14px] text-[#222]  bg-gray-300 items-center flex">
                                        <span class="mr-1">Go to messages </span>
                                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.00189 0C7.6337 0 7.33522 0.298479 7.33522 0.666672C7.33522 1.03486 7.6337 1.33334 8.00189 1.33334H9.72522L3.64355 7.41499C3.38305 7.67548 3.38305 8.09783 3.64355 8.35833C3.90404 8.61883 4.32639 8.61883 4.58689 8.35833L10.6685 2.27666V3.99998C10.6685 4.36818 10.967 4.66666 11.3352 4.66666C11.7034 4.66666 12.0019 4.36818 12.0019 3.99999V0H8.00189Z"
                                                fill="#222222"></path>
                                            <path
                                                d="M10.6667 10.6667H1.33334V1.33334H5.33333C5.70152 1.33334 6 1.03486 6 0.666672C6 0.298479 5.70152 0 5.33333 0H1.33334C0.596656 0 0 0.596656 0 1.33334V10.6667C0 11.4033 0.596656 12 1.33334 12H10.6667C11.4033 12 12 11.4033 12 10.6667V6.66667C12 6.29848 11.7015 6 11.3333 6C10.9651 6 10.6667 6.29848 10.6667 6.66667V10.6667Z"
                                                fill="#222222"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div class="px-[36px] mt-[24px] pb-[10px] ">
                            <div
                                class="w-full flex inline-block  pl-[18px] border-[1.5px] border-[border-box] rounded-full h-[40px] bg-[rgba(34,34,34,.05)] leading-[40px] ">
                                <svg class="search-icon mt-[10px] mr-[14px] " width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                        fill="#717171"></path>
                                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16"
                                        height="16">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M7.2 14.4C3.22355 14.4 0 11.1764 0 7.2C0 3.22355 3.22355 0 7.2 0C11.1764 0 14.4 3.22355 14.4 7.2C14.4 8.90002 13.8108 10.4624 12.8255 11.6942L15.7657 14.6344C16.0781 14.9468 16.0781 15.4533 15.7657 15.7657C15.4533 16.0781 14.9467 16.0781 14.6343 15.7657L11.6941 12.8255C10.4624 13.8108 8.9 14.4 7.2 14.4ZM7.20156 12.7996C10.2944 12.7996 12.8016 10.2924 12.8016 7.19961C12.8016 4.10681 10.2944 1.59961 7.20156 1.59961C4.10877 1.59961 1.60156 4.10681 1.60156 7.19961C1.60156 10.2924 4.10877 12.7996 7.20156 12.7996Z"
                                            fill="white"></path>
                                    </mask>
                                    <g mask="url(#mask0)"></g>
                                </svg>
                                <input type="search" class="ml-[-24px] pl-[24px] bg-transparent w-full " placeholder="Search by name or email" />
                            </div>
                        </div>

                        <div class="px-[36px] pb-[20px] ">

                            <div>
                                <div
                                    class="border-[1.5px] border-[rgba(34,34,34,.05)] pl-[10px] pb-[16px]  flex justify-between ">
                                    <div class="mt-[16px] flex relative justify-between flex-col ">
                                        <h4 class="pl-[8px] text-[16px] text-[#333] text-left ">Followers</h4>
                                        <p class=" ml-[20px] flex-cols ">0</p>
                                    </div>
                                    <div class="flex relative">
                                        <p
                                            class="bg-[#f4f4f4] text-end align-baseline mt-[35px] mr-[10px] rounded-[50px] px-[20px] py-[5px] ">
                                            Message</p>
                                    </div>
                                </div>

                                <div
                                    class="border-[1.5px] border-[rgba(34,34,34,.05)] pl-[10px] pb-[16px]  flex justify-between ">
                                    <div class="mt-[16px] flex relative justify-between flex-col ">
                                        <h4 class="pl-[8px] text-[16px] text-[#333] text-left ">Supporters</h4>
                                        <p class=" ml-[20px] flex-cols ">0</p>
                                    </div>
                                    <div class="flex relative">
                                        <p
                                            class="bg-[#f4f4f4] text-end align-baseline mt-[35px] mr-[10px] rounded-[50px] px-[20px] py-[5px] ">
                                            Message</p>
                                    </div>
                                </div>

                                <div
                                    class="border-[1.5px] border-[rgba(34,34,34,.05)] pl-[10px] pb-[16px]  flex justify-between ">
                                    <div class="mt-[16px] flex relative justify-between flex-col ">
                                        <h4 class="pl-[8px] text-[16px] text-[#333] text-left ">Members</h4>
                                        <p class=" ml-[20px] flex-cols ">0</p>
                                    </div>
                                    <div class="flex relative">
                                        <p
                                            class="bg-[#f4f4f4] text-end align-baseline mt-[35px] mr-[10px] rounded-[50px] px-[20px] py-[5px] ">
                                            Message</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </label>
                </label>

            </div>




            <div >
                <input type="checkbox" id="my-modal-4" class="modal-toggle w-100" />
                <label for="my-modal-4" class="modal cursor-pointer ">
                    <label class="modal-box relative  bg-white" for="">
                        <div class="flex mx-[36px] justify-between pt-[36px]   ">
                            <div class=" ">
                                <h2 class="text-[20px] leading-[27px] font-bold text-[#222222]  ">Enable Direct Messaging</h2>
                            </div>
                        </div>
                        <div class="mx-[36px] justify-between  py-[16px] ">
                            <p>
                                Messages can be a great benefit for your paying fans. Would you like to allow your supporters to
                                message you?
                            </p>
                        </div>

                        <div class="mx-[36px] mt-2  justify-between cursor-pointer " id="window" >
                            <div onClick={Messaging} class=" dropdown dropdown-bottom dropdown-end flex w-full h-12 border border-gray-100 p-2 rounded cursor-pointer " >

                                <div tabindex="0" class=" flex justify-between w-full " >
                                    <label id="value">
                                        {option?'Yes, my supporters can message me':'No, only if I message first'}
                                    </label>



                                    <div class="" >
                                        <svg className={click?' relative mt-3 delay-75 rotate-180 transition':'relative mt-3 delay-75  transition'}   width="10" height="6" viewBox="0 0 10 6" fill="none" id="arrow"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.292893 0.292893C-0.0732234 0.65901 -0.0961055 1.23839 0.224246 1.63116L0.292893 1.70711L4.29289 5.70711C4.65901 6.07322 5.23839 6.09611 5.63116 5.77575L5.70711 5.70711L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.34099 -0.0732234 8.76162 -0.0961055 8.36884 0.224246L8.29289 0.292893L5 3.586L1.70711 0.292893C1.34099 -0.0732234 0.761615 -0.0961055 0.368842 0.224246L0.292893 0.292893Z"
                                                fill="#717171"></path>
                                        </svg>
                                    </div>

                                </div>
                                <ul tabindex="0" className={click?'mt-2 dropdown-content menu  border border-gray-100 bg-base-100 rounded w-full py-1':'hidden' }  id="dropdown" aria-expanded="false">
                                    <li onClick={()=>setoption(false)}><a>No, only if I message first</a></li>
                                    <li onClick={()=>setoption(true)}><a>Yes, my supporters can message me</a></li>
                                </ul>



                            </div>

                        </div>
                        <div class=" mt-5 px-[36px] justify-between  py-[16px] ">
                            <button
                                class="bg-yellow-300 hover:bg-yellow-400 w-full text-black font-bold py-2 px-4 rounded-full">
                                Save
                            </button>
                        </div>

                    </label>
                </label>
            </div>


        </div >
    );

};

export default Message;