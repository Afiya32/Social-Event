import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";


const NavBar = () => {

  const{user,logout}=useContext(AuthContext)
  const {displayName,email,photoURL
  }=user||{}
  const handlelogout=()=>{
    logout()
    .then((result)=>{console.log(result)})
  }
  const navlinks =<>
  <li> <NavLink to='/'  className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-500 underline"
                        : isPending
                        ? ""
                        : ""
                    }>Home</NavLink> </li>
  <li> <NavLink to='/about' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-500 underline"
                        : isPending
                        ? ""
                        : ""
                    }>About</NavLink> </li>
  <li> <NavLink to='/contact' className={({ isActive, isPending }) =>
                      isActive
                        ? "text-red-500 underline"
                        : isPending
                        ? ""
                        : ""
                    }>Contact Us</NavLink> </li>
  </>
  
      return (
  <div data-aos="fade-up"
  data-aos-easing="linear"
  data-aos-duration="1500">
          <div  className="navbar bg-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <img src="" alt="" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navlinks}
            </ul>
          </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 flex rounded-full">
          <img src={photoURL}/>
         
          <h1>{displayName}</h1>
        <p>{email}</p>
          
        </div>
        
      </label>
      {
        user&& <button onClick={handlelogout} className="btn btn-secondary">Log out</button>
}
    {
      !user&&<Link to='/login' className="btn btn-warning">Login</Link>
    }
          
        </div>
      </div>
  </div>
    );
};

export default NavBar;