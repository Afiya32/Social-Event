
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../Pages/MainLayOut';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Career from '../Pages/Career';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import DetailNews from '../Pages/DetailNews';


const MyRouter =createBrowserRouter([{
    path:'/',
    element:<MainLayOut></MainLayOut>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },{
            path:'/news/:id',
            element:<DetailNews></DetailNews>,
            loader:()=>fetch('/news.json')
        },
        {
            path:'/about',
            element:<About></About>
        },{
            path:'/career',
            element:<Career></Career>
        },{
            path:'/signup',
            element:<Signup></Signup>
        },{
            path:'/login',
            element:<Login></Login>
        }
    ]
}])

export default MyRouter;