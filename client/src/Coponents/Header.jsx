import logo from './../7177.jpg';

const Header = () => {
    return (
       <div data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
         <div className='flex justify-center items-center'>
           <div className='flex items-center justify-center' >
            <div className='w-28 h-28'>
                <img src={logo} alt="" />
            </div>
            <h1 className='text-5xl font-bold text-red-500'>Social-Events</h1>
           </div>
        </div>
       </div>
    );
};

export default Header;