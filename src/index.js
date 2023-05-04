import React from 'react';
import ReactDOM from 'react-dom/client';

import Nav from './Nav';
import Cont from './Cont';

import './css/reset.css';
import './css/base.css';
import './css/layout.css';
import './css/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container flex'>
      <Nav />
      <Cont />
    </div>
  </React.StrictMode>
);

