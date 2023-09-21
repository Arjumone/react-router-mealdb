import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './components/MainLayOut/MainLayOut';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Selects from './components/Selects/Selects';
import Login from './components/Login/Login';
import Details from './components/Details/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        
      },
      {
        path:'/items',
        loader:()=>fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        element:<Items></Items>
      },
      {
        path:'/item/:strCategory',
        loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.strCategory}`),
        element:<Details></Details>
      },
      {
        path:'/select',
        element:<Selects></Selects>
      },
      {
        path:'/login',
        element:<Login></Login>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
