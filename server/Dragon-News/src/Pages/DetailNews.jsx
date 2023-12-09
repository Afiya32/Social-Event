import { Link, useLoaderData, useParams } from "react-router-dom";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";
import Right from "../Components/Right";
import { useEffect, useState } from "react";


const DetailNews = () => {
    const [News,setNews] =useState()
    const {id}=useParams()
    const news=useLoaderData()
    useEffect(()=>{
        const findNews = news?.find(bnews=>bnews._id==id)
        setNews(findNews)
    },[id,news])
    const {title,image_url,details}=News||{}



    return (
        <div>
            <Logo></Logo>
            <NavBar></NavBar>
            <div className=" mx-auto p-20 gap-5 grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-center text-4xl font-bold">News Details:</h2>
                       <h1 className="text-center">{id}</h1>
                     <h2 className="text-center text-2xl font-semibold">{title}</h2>
                     <img className="w-full" src={image_url} alt="" />
                     <div>
                        <p className="text-center text-lg">{details}</p>
                     </div>
                     <Link to='/'><button className="btn btn-secondary outline mx-auto mt-9 flex items-center justify-center">Go Back</button></Link>
                </div>
                <Right></Right>
            </div>
        </div>
    );
};

export default DetailNews;