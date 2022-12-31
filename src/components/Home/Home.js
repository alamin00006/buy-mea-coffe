import React from 'react';
import Banner from './Banner/Banner';
import DashboardNavbar from './DashboardNavbar/DashboardNavbar';
import Navbar from './Navbar/Navbar';
import SideNavbar from './SideNavbar/SideNavbar';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <DashboardNavbar></DashboardNavbar>
           
        </div>
    );
};

export default Home;