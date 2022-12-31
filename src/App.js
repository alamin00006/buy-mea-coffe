
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DashboardHome from "./components/Home/SideNavbar/DashboardHome/DashboardHome";
import Donations from "./components/Home/SideNavbar/Donations/Donations";
import MemberShips from "./components/Home/SideNavbar/MemberShips/MemberShips";
import Extras from "./components/Home/SideNavbar/Extras/Extras";
import Wishlist from "./components/Home/SideNavbar/Wishlist/Wishlist";

import SideNavbar from "./components/Home/SideNavbar/SideNavbar";
import ViewPage from "./components/Home/SideNavbar/ViewPage/ViewPage";
import Post from "./components/Home/SideNavbar/Post/Post";
import Gallery from "./components/Home/SideNavbar/Gallery/Gallery";
import Message from "./components/Home/SideNavbar/Message/Message";
import ButtonGraphics from "./components/Home/SideNavbar/ButtonGraphics/ButtonGraphics";
import Integrations from "./components/Home/SideNavbar/Integrations/Integrations";
import Payout from "./components/Home/SideNavbar/Payout/Payout";
import Settings from "./components/Home/SideNavbar/Settings/Settings";

function App() {
  return (
    <div>
        <Home></Home>
        <Routes>
        <Route path="/sideNavbar" element={<SideNavbar></SideNavbar>}>

        <Route path="dashboardHome" element={<DashboardHome></DashboardHome>}></Route>
        <Route path="viewPage" element={<ViewPage></ViewPage>}></Route>
        <Route path="donations" element={<Donations></Donations>}></Route>
        <Route path="memberships" element={<MemberShips></MemberShips>}></Route>
        <Route path="extras" element={<Extras></Extras>}></Route>
        <Route path="wishlist" element={<Wishlist></Wishlist>}></Route>
        <Route path="post" element={<Post></Post>}></Route>
        <Route path="gallery" element={<Gallery></Gallery>}></Route>
        <Route path="message" element={<Message></Message>}></Route>
        <Route path="buttonGraphics" element={<ButtonGraphics></ButtonGraphics>}></Route>
        <Route path="integrations" element={<Integrations></Integrations>}></Route>
        <Route path="payouts" element={<Payout></Payout>}></Route>
        <Route path="settings" element={<Settings></Settings>}></Route>
        
        </Route>
        
           
        </Routes>
    </div>
  );
}

export default App;
