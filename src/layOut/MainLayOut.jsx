import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";
import Banner from "../Components/Header/Banner/Banner";


const MainLayOut = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Navbar></Navbar>
             <Banner></Banner>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;