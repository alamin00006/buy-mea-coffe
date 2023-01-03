import React from 'react';
import './DashBoardMassage_edit';

const DashBoardMassage = () => {
    return (
        <div>
            <div class=" bg-[#F9F9F9]">
                <div class="w-full mt-[2px] px-[16px]">
                    <div class="">
                        <p class="text-lg  mb-[24px] font-bold">Messages</p>
                    </div>
                    <div class=" bg-[#FFFFFF]">
                        <div class=" h-20 border-b-2 border-solid border-[rgba(34,34,34,.05)]">
                            <div class=" pt-3 content-center   ">

                                <div id="input-search" class=" w-6/12 mx-auto flex hidden ">
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
                                    <div onclick="hidesearch()" class="relative mt-3 mr-4 ">
                                        <svg class="search-close cursor-pointer " width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.2471 5.92852C15.5716 5.60405 15.5716 5.07798 15.2471 4.75352C14.9227 4.42905 14.3966 4.42905 14.0721 4.75352L10.0013 8.82435L5.93047 4.75352C5.606 4.42905 5.07994 4.42905 4.75547 4.75352C4.431 5.07798 4.431 5.60405 4.75547 5.92852L8.8263 9.99935L4.75547 14.0702C4.431 14.3947 4.431 14.9207 4.75547 15.2452C5.07994 15.5697 5.606 15.5697 5.93047 15.2452L10.0013 11.1743L14.0721 15.2452C14.3966 15.5697 14.9227 15.5697 15.2471 15.2452C15.5716 14.9207 15.5716 14.3947 15.2471 14.0702L11.1763 9.99935L15.2471 5.92852Z"
                                                fill="#717171"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex justify-between mx-[32px]" id="btn-search">
                                    <div class="flex pt-3 ">
                                        <a href=""
                                            class="text-black mr-[12px]  text-[16px] font-semibold after:content-[''] after:w-full after:block after:h-[2px] after:bg-black after:mt-[30px] active   ">All</a>
                                        <a href="./unread.html"
                                            class=" text-gray-400 text-[16px] font-semibold hover:text-black  ">Unread</a>
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

                                            <div onclick="ShowSearch()"
                                                class="   btn  bg-transparent hover:bg-gray-100 border-none rounded-full ">
                                                <svg class="search-post-icon cursor-pointer " width="16" height="16"
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
                                            </div>

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
                                    <svg class="mx-auto" width="90" height="60" viewBox="0 0 90 60" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 43.5001C10.5 63.0001 48.5 66.5001 58.5 43.5001C73.6893 8.56469 30.8514 4.18013 23 22.5001C9.5 54.0001 60 73.0001 78 15.0001"
                                            stroke="#222222" stroke-opacity="0.25" stroke-dasharray="2 2"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M37.1383 23H54.7646C57.3061 23.0285 59.725 24.1029 61.4581 25.973C63.1911 27.8431 64.087 30.3456 63.9371 32.8978V45.1022C64.087 47.6544 63.1911 50.1569 61.4581 52.027C59.725 53.8971 57.3061 54.9715 54.7646 55H37.1383C31.6793 55 28 50.5589 28 45.1022V32.8978C28 27.4411 31.6793 23 37.1383 23Z"
                                            fill="#FFDD00" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M56.5441 33.397L48.5695 39.8176C47.0604 41.0008 44.9448 41.0008 43.4356 39.8176L35.3926 33.397"
                                            stroke="#222222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        </path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M81.2036 6.20809L79.2989 11.6432L73.7509 11.0489C73.0238 10.971 72.7307 10.0631 73.2762 9.57738L81.9972 1.80134C82.4936 1.36004 83.2835 1.646 83.387 2.30678L85.207 13.8556C85.3207 14.5784 84.529 15.0905 83.9183 14.688L79.2989 11.6432"
                                            fill="white"></path>
                                        <path
                                            d="M81.2036 6.20809L79.2989 11.6432L73.7509 11.0489C73.0238 10.971 72.7307 10.0631 73.2762 9.57738L81.9972 1.80134C82.4936 1.36004 83.2835 1.646 83.387 2.30678L85.207 13.8556C85.3207 14.5784 84.529 15.0905 83.9183 14.688L79.2989 11.6432"
                                            stroke="#222222" stroke-opacity="0.25" stroke-width="1.07493" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                    <h4 class="mt-[16px] mb-[8px] text-[#222] text-[16px] font-semibold ">No messages so far
                                    </h4>
                                    <p
                                        class="mx-[52px] mb-2 text-[14px] text-[#717171]  leading-[22px] sm:mx-auto sm:w-[55%] lg:w-[35%] lg:mx-auto ">
                                        Send a private message or broadcast one to all your supporters or members.</p>

                                    <label for="newmsg"
                                        class=" px-[32px] bg-[rgba(34,34,34,.05)] p-2 text-[#222] text-[16px] rounded-full h-12 font-bold  "><span>+
                                            New messages</span></label>

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
                                <input type="search" class="ml-[-24px] pl-[24px] bg-transparent w-full " placeholder="Search by name or email"/>
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
                            <div class=" dropdown dropdown-bottom dropdown-end flex w-full h-12 border border-gray-100 p-2 rounded cursor-pointer " >

                                <div tabindex="0" class=" flex justify-between w-full " onclick="show()" >
                                    <label id="value">
                                        Yes, my supporters can message me
                                    </label>



                                    <div class="" >
                                        <svg class=" relative mt-3 delay-75  " width="10" height="6" viewBox="0 0 10 6" fill="none" id="arrow"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.292893 0.292893C-0.0732234 0.65901 -0.0961055 1.23839 0.224246 1.63116L0.292893 1.70711L4.29289 5.70711C4.65901 6.07322 5.23839 6.09611 5.63116 5.77575L5.70711 5.70711L9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292893C9.34099 -0.0732234 8.76162 -0.0961055 8.36884 0.224246L8.29289 0.292893L5 3.586L1.70711 0.292893C1.34099 -0.0732234 0.761615 -0.0961055 0.368842 0.224246L0.292893 0.292893Z"
                                                fill="#717171"></path>
                                        </svg>
                                    </div>

                                </div>
                                <ul tabindex="0" class="mt-2 dropdown-content menu  border border-gray-100 bg-base-100 rounded w-full py-1 hidden " id="dropdown" aria-expanded="false">
                                    <li onclick="no()"><a>No, only if I message first</a></li>
                                    <li onclick="yes()"><a>Yes, my supporters can message me</a></li>
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


export default DashBoardMassage;