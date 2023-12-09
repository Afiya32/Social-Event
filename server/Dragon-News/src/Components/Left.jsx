import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";
import moment from 'moment';
import p1 from '../assets/1.png'
import p2 from '../assets/2.png'
import p3 from '../assets/3.png'

const Left = () => {
const [categories,setCategories]=useState([]);
useEffect(() =>{
  fetch('categories.json')
  .then(res=>res.json())
  .then(data=>setCategories(data))
  console.log(categories);


},[])


    return (
        <div>
          <div className="bg-gray-300">
          <h2 className="text-center text-2xl font-bold p-5">All Categories:{categories.length}</h2>
       {categories.map(category => <Link className="block ml-4 font-semibold text-center p-2 text-blue-600 text-[16px]" key={category.id} to={`/category/${category.id}`}  >{category.name}</Link>)}
        </div>
      <div className="mt-3 bg-gray-300 ">
      <div className="mt-3 ">
          <div className="mt-3 p-3 mx-auto ">
            <img src={p1} alt="" />
            <h5 className="p-1 text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perferendis.</h5>
              <div className="flex items-center justify-center">
                <h6 className="mr-14 font-semibold">Education</h6>
                <BsFillCalendarDateFill />
                <h6 className="mr-6">{moment().format('MMM D YYYY')}</h6>
              </div>
         
          </div>
        </div>
        <div className="mt-3 ">
          <div className="mt-3 p-3 mx-auto ">
            <img src={p2} alt="" />
            <h5 className="p-1 text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perferendis.</h5>
              <div className="flex justify-center items-center">
                <h6 className="mr-14 font-semibold">Social Media</h6>
                <BsFillCalendarDateFill />
                <h6 className="mr-6">{moment().format('MMM D YYYY')}</h6>
              </div>
         
          </div>
        </div>
        <div className="mt-3 ">
          <div className="mt-3 p-3 mx-auto ">
            <img src={p3} alt="" />
            <h5 className="p-1 text-center font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perferendis.</h5>
              <div className="flex items-center justify-center">
                <h6 className="mr-14 font-semibold">Sport</h6>
                <BsFillCalendarDateFill />
                <h6 className="mr-6">{moment().format('MMM D YYYY')}</h6>
              </div>
         
          </div>
        </div>
      </div>
        </div>
    );
};

export default Left;