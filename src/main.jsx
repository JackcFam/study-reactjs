import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>
    },
    {
        path: "/login",
        element: <div>Login Page</div>
    },
    {
        path: "/products",
        element: <div>Login Page</div>
    },
    {
        path: "/register",
        element: <div>Login Page</div>
    },
    {
        path: "/users",
        element: <div>Login Page</div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
