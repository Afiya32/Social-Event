import { useLoaderData } from "react-router-dom";
import Card from "../Coponents/Card";
import Slider from "../Coponents/Slider";




const Home = () => {
   const data=useLoaderData()
   console.log(data)

    
    return (
        <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="mt-3">
          <div data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500" className=""><Slider ></Slider></div>
        <h2 className="text-center font-bold text-4xl">Our Features:{data.length}</h2>
    <div data-aos="fade-up"
       data-aos-easing="ease-in-back"
       data-aos-delay="300"
       data-aos-offset="0" className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 rounded-md mt-2">
    {
        data.map(data=><Card  key={data.id} data={data}></Card>)
      }
    </div>

        </div>
    );
};

export default Home;