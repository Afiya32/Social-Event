import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex mx-auto h-[100vh] justify-center items-center text-center" >
          <div>
           <h1 className="font-extrabold text-7xl text-red-700 text-center">Opps!!!</h1>
              <h2 className="font-bold text-center text-4xl">404 Page isnot Found</h2>
               <h3 className="text-center font-medium text-2xl">the page you may looking for is might be removed</h3>
                <Link to='/'> <button className="btn btn-neutral">go to home</button> </Link>       
       
                </div>
        </div>
    );
};

export default Error;