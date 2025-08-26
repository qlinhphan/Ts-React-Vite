import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.scss';
import './styles/tableUser.scss';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import UserPage from './screen/user.page.tsx';
import Menus from './Component/menu/menu.home.tsx';

const Layout = () => {
  return (
    <div>
      <div>
        <Menus></Menus>
      </div>
      <Outlet />
      <div>footer</div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/users",
        element: <UserPage></UserPage>,
      },
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
