import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

import store from './redux/store';

import Login from './Pages/login/login.component';
import Register from './Pages/register/register.component';
import Template from './comopnents/template/template.component';
import ProductsPage from './Pages/products/products.component';
import ProductsGroup from './Pages/productsGroup/productGroup.component';
import Trademarks from './Pages/trademark/trademark.component';
import TestToken from './Pages/testToken/testToken.component';
import WareHouse from './Pages/warehouse/warehouse.component';
import Staffs from './Pages/staffs/staffs.component';
import Invoice from './Pages/invoice/invoice.component';
import Dashboard from './Pages/dashboard/dashboard.component';

import './index.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <TestToken />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/template',
    element: <Template />,
    children: [
      {
        path: 'products',
        element: <ProductsPage />
      },
      {
        path: 'productsGroup',
        element: <ProductsGroup />
      },
      {
        path: 'trademark',
        element: <Trademarks />
      },
      {
        path: '/template/warehouse',
        element: <WareHouse />
      },
      {
        path: '/template/staffs',
        element: <Staffs />
      },
      {
        path: '/template/invoice',
        element: <Invoice />
      },
      {
        path: '/template/dashboard',
        element: <Dashboard />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);