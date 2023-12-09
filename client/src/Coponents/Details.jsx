import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const [datanew,setDatanew] =useState()
    const {id}=useParams()
    const Data=useLoaderData()
    useEffect(()=>{
        const findData = Data?.find(bData=>bData.id==id)
        setDatanew(findData)
    },[id,Data])
    const {title,category,img,details}=datanew||{}
    console.log(title,category,img,details)
    return (
       <div data-aos="fade-up"
       data-aos-easing="linear"
       data-aos-duration="1500">
         <div className="relative flex w-full mx-auto items-center p-5 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
     {details}
    </p>
   
  
  </div>
</div>
       </div>
    );
};

export default Details;