import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../components/Root';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';
import AddProduct from '../components/AddProduct';
import Login from '../components/Login';
import Register from '../components/Register';

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"contact",
                element:<ContactUs></ContactUs>
            },
            {
                path:"about",
                element:<AboutUs></AboutUs>
            },
            {
                path:"addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
        ]
    }
])

export default Route;