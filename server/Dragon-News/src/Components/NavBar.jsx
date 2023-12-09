import {  Link, NavLink } from "react-router-dom";
import user from "../assets/user.png"

const NavBar = () => {
  const navlinks =<>
  <li> <NavLink to='/'>Home</NavLink> </li>
  <li> <NavLink to='/about'>About</NavLink> </li>
  <li> <NavLink to='.career'>Carrer</NavLink> </li>
  </>
  
      return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <img src="../assets/user.png" alt="" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {navlinks}
            </ul>
          </div>
          
        </div>
        <div data-aos="flip-left" className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user}/>
        </div>
      </label>
          <Link to='/login' className="btn">Login</Link>
        </div>
      </div>
    );
};

export default NavBar;