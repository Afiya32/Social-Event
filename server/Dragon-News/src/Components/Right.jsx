import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa6";
import q1 from "../assets/qZone1.png" 
import q2 from "../assets/qZone2.png" 
import q3 from "../assets/qZone3.png" 
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Right = () => {


  const {googleLogin}=useContext(AuthContext)




  const sociallog=(media)=>{
    console.log('gooogleeeee')
   return media()
  }
    return (
        <div>
         <div className="mb-5 w-full bg-gray-200 p-5">
            <h2 className="font-bold text-center m-5  text-lg">Log in with </h2>
            <button onClick={()=>sociallog(googleLogin)} className="btn btn-outline m-2 text-blue-500 w-full p-5 ">
<FaGoogle className="text-blue-400"></FaGoogle>
  Login with Google
</button>
<p className="text-center pt divide-x-2">or</p>
            <button className="btn btn-outline m-2 text-black w-full p-5 ">
<FaGithub className="text-black"></FaGithub>
  Login with Github
</button>
         </div >
         <div className="mb-5 w-full bg-gray-200 p-5">
            <h4 className="font-bold text-center m-5  text-lg">Find Us On</h4>
             <div>
             <button className="btn btn-outline  text-sky-950 w-full p-5 ">
<FaFacebook className="text-sky-950"></FaFacebook>
  Facebook
</button>
             <button className="btn btn-outline  text-sky-400 w-full p-5 ">
<FaTwitter className="text-sky-400"></FaTwitter>
  Twitter
</button>
             <button className="btn btn-outline  text-pink-500 w-full p-5 ">
<FaInstagram className="text-pink-500"></FaInstagram>
  Instagram
</button>
             </div>
         </div>
         <div className="mb-5 w-full bg-gray-200 p-5">
            <h2 className="text-center font-bold text-lg">Q-Zone</h2>
            <div>
                <img src={q1} alt="" />
            </div>
            <div>
                <img src={q2} alt="" />
            </div>
            <div>
                <img src={q3} alt="" />
            </div>
      
        
         </div>
        </div>
    );
};

export default Right;