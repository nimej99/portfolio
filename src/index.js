import React from 'react';
import ReactDOM from 'react-dom/client';

import Nav from './Nav';
import Cont from './Cont';

import './css/reset.css';
import './css/base.css';
import './css/layout.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Cont />
  </React.StrictMode>
);

