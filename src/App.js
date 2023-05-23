import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Nav from './Nav';
import Cont from './Cont';

import './css/reset.css';
import './css/base.css';
import './css/layout.css';
import './css/common.css';


function App(props) {
  return (
    <>
      <BrowserRouter>
          <header className='hidden'>&nbsp;</header>
          <main className='container flex'>
              <Nav />
              <Cont />
          </main>
          <footer className='hidden'>&nbsp;</footer>
      </BrowserRouter>
    </>
  );
}

export default App;