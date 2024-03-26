import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Default from './pages/Default';

export default function AppRouter() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Default />,
        },
      ])}
    />
  );
}
