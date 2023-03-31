import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss'
import { router } from "./app/router/router";
import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
