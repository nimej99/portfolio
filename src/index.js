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
    <header className='hidden'>&nbsp;</header>
    <main className='container flex'>
      <Nav />
      <Cont />
    </main>
    <footer className='hidden'>&nbsp;</footer>
  </React.StrictMode>
);

