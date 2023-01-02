import React from 'react';
import './Wishlist.css'
const Wishlist = () => {
    return (
        <>
        <div className="wish_container">
            <div className="wish_list_content">
                <h3>Your wishlist is empty</h3>
                <p>Add gifts or products you’d like to buy and let your fans fund them.</p>
                <button className=''>
                    Add wishlist item
                </button>
            </div>
            <div className="question_container">
                <h1>Frequently asked questions</h1>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        I’m new to the concept of Wishlist. What is it?
                    </div>
                    <div className="collapse-content">
                        <p>Your wishlist consists of products you’d like to buy or goals that require funding.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How is this different from an Amazon Wishlist?
                    </div>
                    <div className="collapse-content">
                        <p>For one, you can add items that are not on Amazon. Secondly, you receive the funds instead of getting products shipped to your address. Your supporters can also add a message which will be featured on your page.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are some things I can add to my Wishlist?
                    </div>
                    <div className="collapse-content">
                        <p>The most commonly added wishes are tools that helps with creative work (camera, mic) and personal items (clothing, books). However, there is no restriction as to what you should add.
                            Running low on ideas? Check out these wishlists: Lostinthewoods, belochka and YfanTheNial</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        I’ve added some items. How do I get it funded?
                    </div>
                    <div className="collapse-content">
                        <p>Announce your new wishlist to your followers everywhere. Don’t forget to add your link to your social bios (Twitter, Instagram, YouTube, etc.). Finally, when you start receiving contributions, give them a shout out on your socials. That usually invites more of your followers to fund your wishes.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Will my supporters be notified when I add an item to my wishlist?
                    </div>
                    <div className="collapse-content">
                        <p>Not by default. You can choose to notify all your followers when you add a new item.</p>
                    </div>
                </div>
            </div>
        </div>
</>
    );
};

export default Wishlist;