import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  useLoaderData,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Root } from './components/Root/Root';
import { Home } from './components/Home/Home';
import { AppliedJobs } from './components/AppliedJobs/AppliedJobs';
import { Error404 } from './components/Error404/Error404';
import { JobDetails } from './components/JobDetails/JobDetails';
import { Toaster } from 'react-hot-toast';
import { Jobs } from './components/Jobs/Jobs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error404/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs',
        element:<Jobs/>
      },
      {
        path:'/applied',
        element:<AppliedJobs/>,
        loader: ()=> fetch('/featuredJobs.json')
      },
      {
        path:'/job/:id',
        element:<JobDetails/>,
        loader: ()=> fetch(`../featuredJobs.json`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
