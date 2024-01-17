import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//@ts-ignore
import App from './App';
import Home from './Views/Home';
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


