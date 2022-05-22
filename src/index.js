import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
// import AppFunction from './Components/App/AppFunction';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
	{/* <AppFunction /> */}
  </React.StrictMode>
);