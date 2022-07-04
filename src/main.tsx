import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import './index.scss'
import Loader from './core/components/Loader';
import Toast from './core/components/Toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Loader />
    <Toast />
    <App />
  </BrowserRouter>
)