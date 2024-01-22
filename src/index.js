import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
//@ts-ignore
import App from './App';
import Home from './Views/Home';
import Finish from './Views/Finish';
import "./index.css"




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
{
    path: '/Game',
    element: <App className="m-0" />,
},
{
  path: '/Finish',
  element: <Finish  className="m-0" />,
},
{
    path: '*',
    element: <Navigate to="/" replace />,
},
  // make not found page
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
  // {
  //   path: '*',
  //   element: <Navigate to="/" replace />,
  // },
])
const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <RouterProvider  router={router} />
        </React.StrictMode>
    );
    
}


