import { Link } from "react-router-dom";


const Card = ({data}) => {

const {img,title,details,id}=data||{}
    return (
       <div  >
         <div className="rounded bg-slate-400">
        <div className="p-6" data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
    <div className="mb-3  items-center justify-between">
      <div className="w-full">
      <img className="w-full m-5" src={img} alt="" />
      </div>
     <div>
     <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
        {title}
      </h5>
     </div>
     
    </div>
    {
      details.length>200?
      <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
        {details.slice(0,200)}
      </p>:<p>{details}</p>
    }
    <Link to={`/data/${id}`}>
   <button
      className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read more
    </button>
    </Link>
  </div> 
        </div>
       </div>
    );
};

export default Card;