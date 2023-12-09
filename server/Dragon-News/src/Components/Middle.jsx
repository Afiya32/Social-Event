import { useEffect, useState } from "react";
import News from "./News/News";


const Middle = () => {
const [news,setNews]=useState([])
useEffect(()=>{
    fetch('news.json')
  .then(res=>res.json())
  .then(data=>setNews(data))
  console.log(news)
},[])
const [isShow, setIsShow]=useState(false)

const handleClick=()=>{
    setIsShow(!isShow)
}

    return (
        <div className="col-span-2">
            <h1 className="text-center font-bold text-3xl mb-5"> Todays News:{news.length}</h1>
            {
                isShow? news.map(news => <News key={news.id} news={news} />):
                news.slice(0,2).map(news => <News key={news.id} news={news} />)
            }
           {
            isShow? <button onClick={handleClick} className="mt-2 px-5 btn outline bg-green-300 p-4 block mx-auto">See less</button>:
            <button onClick={handleClick} className="mt-2 px-5 btn outline bg-green-300 p-4 block mx-auto">See more</button>
           }
        </div>
    );
};

export default Middle;