/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
const {user,loading}=useContext(AuthContext)
const location=useLocation()
if(loading){
  return <span className="loading flex justify-center items-center h-[100vh] loading-bars loading-lg"></span>
}
  if(user){
  return  children;
  }
  return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default Private;