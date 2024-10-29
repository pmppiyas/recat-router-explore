import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Users from './Components/Users';
import User_details from './Components/User_details';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Users></Users>,
      },
      {
        path: '/user/:userId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <User_details></User_details>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
