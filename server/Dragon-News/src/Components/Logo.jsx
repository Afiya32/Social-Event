import logo from '../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Logo = () => {
    return (
        <div className='mx-auto '>
        <img className='mx-auto' src={logo} alt="" />
        <h4 className='text-center text-red-500'>Journalism Without Fear and Favour</h4>
        <p className='text-xl text-center'>{moment().format('dddd,MMMM Do YYYY, h:mm:ss a')}</p>
        <div className='border p-5 bg-gray-200 m-5 h-5 w-3/4 mx-auto flex items-center justify-center'>
            <button className='btn btn-warning btn-sm'>Latest</button>
            <Marquee pauseOnHover={true} speed={70} className='mr-16 text-green-400 font-bold'>
             <p className='mr-10'>Lorem ipsum dolor sit amet consectetur.</p>
             <p className='mr-10'>Lorem ipsum dolor sit amet consectetur.</p>
             <p className='mr-10'>Lorem ipsum dolor sit amet consectetur.</p>

            </Marquee>
        </div>
        
        
        </div>
    );
};

export default Logo;