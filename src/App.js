
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import DashBoardHome from "./components/Home/SideNavbar/DashBoardHome";


function App() {
  return (
    <div>
        <Home></Home>
        <Routes>
           <Route path="/dashboardHome" element={<DashBoardHome></DashBoardHome>}></Route>
        </Routes>
    </div>
  );
}

export default App;
