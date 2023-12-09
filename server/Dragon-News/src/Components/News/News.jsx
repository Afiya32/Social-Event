import { BsBookmark,BsFillShareFill } from "react-icons/bs";
import moment from 'moment';
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
const News = ({news}) => {
    const {title,rating,total_view,author,image_url,details,_id} = news||{}
    return (
        <div className="">
           <div className="relative bg-gray-300 mx-auto p-5 flex w-full  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
  <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
    <img
      src={author.img}
      alt="tania andrew"
      className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
    />
    <div className="flex w-full flex-col gap-0.5">
      <div className="flex items-center justify-between">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {author.name}
        </h5>
        <div className="5 flex items-center gap-2 font-medium text-xl">
        <BsBookmark></BsBookmark>
          <BsFillShareFill></BsFillShareFill>
  
          
        </div>
      </div>
      <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
        Frontend Lead @ Google
      </p> 
      <p>pubilsh date:{author.published_date}</p>
      <p>{moment().format('ddd,MMM D YYYY,')}</p>
    </div>
  </div>
</div> 
<h1 className="font-bold text-2xl text-center">{title}</h1>
<div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={image_url}
      alt="ui/ux review check"
    />
    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    
  </div>
  <div className="p-6">
    <div className="mb-3 flex items-center justify-between">
      <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
        {title}
      </h5>
     
    </div>
    {
      details.length>200?
      <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
        {details.slice(0,200)}
      </p>:<p>{details}</p>
    }
  </div>
  <div className="p-6 pt-3">
  <Link to={`/news/${_id}`}>
   <button
      className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read more
    </button>
    </Link>

    <div className="flex justify-between mt-8">
        <div className="flex justify-center items-center gap-1">
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<h1>{rating.number}</h1>
<p>{rating.badge}</p>
        </div>
        <div className="flex justify-center items-center gap-1">
             <GrView className="text-pink-500"></GrView>
             <h1>{total_view} M</h1>
        </div>

    </div>
  </div>
</div>
    
    
    
    
    
    
    
    
    
    
    
    
        </div>
    );
};

export default News;