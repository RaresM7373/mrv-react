import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

/**
 * AXIOS SET-UP
*/

if(process.env.NODE_ENV === 'development'){ 
  axios.defaults.baseURL = 'http://localhost:8081/api';
}
// else axios.defaults.baseURL = '';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
