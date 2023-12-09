import { Outlet } from "react-router-dom";
import NavBar from "../Coponents/Navbar";
import Header from "../Coponents/Header";
import Footer from "./Footer";


const MainLayOut = () => {
    return (
        <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"className="p-4 m-4">
            <Header data-aos="flip-left"></Header>
            <NavBar data-aos="flip-left"></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default MainLayOut;