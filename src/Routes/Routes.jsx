import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/Mainlayout";
import Dontaion from "../Pages/Dontaion";
import Statistics from "../Pages/Statistics";
import Home from "../Pages/Home";
import DontaionDetails from "../Pages/DontaionDetails";
import Error from "../Pages/Error";



const myRoutes=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("/data.json")
            },
            {
                path:'/donation',
                element:<Dontaion></Dontaion>,
                loader:()=>fetch("/data.json")
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
            {
                path:'/donation-details/:id',
                element:<DontaionDetails></DontaionDetails>,
                loader:()=> fetch('/data.json')
            }
        ]
    }
])
export {myRoutes};