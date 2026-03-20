import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Success } from './components/Success';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
const path = window.location.pathname;

root.render(
  <React.StrictMode>
    {path === '/success' ? <Success /> : <App />}
  </React.StrictMode>
);