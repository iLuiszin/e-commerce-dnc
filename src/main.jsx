import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Views
import Products from './views/Products/Products.jsx';
import Pay from './views/Pay/Pay.jsx';
import React from 'react'
import Home from './views/Home/Home.jsx';
import Login from './views/Login/Login.jsx';

// Mock
import { PRODUCTS_MOCK } from './mock/products.mock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data={PRODUCTS_MOCK} />,
  },
  {
    path: "/home",
    element: <Login />,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/pay/:payId",
    element: <Pay data={PRODUCTS_MOCK} />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
