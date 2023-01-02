import React from 'react';
import "./Extra.css";
import { TfiGift } from 'react-icons/tfi';

const Extras = () => {
    return (

        <div>
            <div className="box_container">
                <h3 className="text-center font-bold mt-5">Add a new extra</h3>
                <p className="text-center font-thin divide-gray-400">Pick a template or start from scratch</p>
                <div className="boxes mt-5">
                    <div className="box1">
                        <p className="divide-gray-300">Start From Scratch</p>
                    </div>
                    <div className="box2">
                        <div className="content">
                            <div className="img">
                                <img src="https://cdn.buymeacoffee.com/assets/img/extras/consultation.png" alt="" /></div>
                            <p className="divide-gray-300">Book A Zoom</p>
                        </div>
                    </div>
                    <div className="box3">
                        <div className="content">
                            <div className="img">
                                <img src="https://cdn.buymeacoffee.com/assets/img/extras/ebooks.png" alt="" /></div>
                            <p className="divide-gray-300">Digital Download</p>
                        </div>
                    </div>
                    <div className="box4">
                        <div className="content">
                            <div className="img">
                                <img src="https://cdn.buymeacoffee.com/assets/img/extras/zoom_event_tickets.png" alt="" /></div>
                            <p className="divide-gray-300">Live Event Ticket</p>
                        </div>
                    </div>
                    <div className="box5">
                        <div className="content">
                            <div className="img">
                                <img src="https://cdn.buymeacoffee.com/assets/img/extras/art_commissions.png" alt="" /></div>
                            <p className="divide-gray-300">Art Commission</p>
                        </div>
                    </div>
                    <div className="box6">
                        <div className="content">
                            <div className="img">
                                <img src="https://cdn.buymeacoffee.com/assets/img/extras/private_instagram_or_telegram_access.png" alt="" /></div>
                            <p className="divide-gray-300">Jion Instragram Close Friends</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addSection">
                <div className="gContent">
                    <div className="iconBox">
                        <div className="icon">
                            <TfiGift />
                        </div>
                    </div>
                    <div className="text_content">
                    <h3 className="text-center">You havant't added anything yet</h3>
                    <p className="text-center">Extras is a simple and effective way to offer something to your audience. It could be anything. See some examples here, here, and here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Extras
