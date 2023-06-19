import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './Header';
import Nav from './Nav';
import Cont from './Cont';

import './css/reset.css';
import './css/base.css';
import './css/layout.css';
import './css/common.css';


function App(props) {
  return (
    <>
      <BrowserRouter basename='/'>
        <Header />
        <main>
            <Nav />
            <Cont />
        </main>
        <footer className='hidden'>&nbsp;</footer>
      </BrowserRouter>
    </>
  );
}

export default App;