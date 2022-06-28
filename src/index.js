import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { APIProvider } from './context/APIContext';
import './i18n/i18n';

ReactDOM.render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
