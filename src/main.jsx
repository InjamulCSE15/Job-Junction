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
        path:'/applied',
        element:<AppliedJobs/>
      },
      {
        path:'/job/:id',
        loader: ()=> fetch(`../featuredJobs.json`),
        element:<JobDetails/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
