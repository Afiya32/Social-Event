import { Outlet } from "react-router-dom";


const MainLayOut = () => {
    return (
        <div className="">
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayOut;