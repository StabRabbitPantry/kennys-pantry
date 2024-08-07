// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Router>
);
