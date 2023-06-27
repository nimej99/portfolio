import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Intro from './components/Intro';
import About from './components/About';
import Exp from './components/Exp';
import Contact from './components/Contact';

import Redirect from './Redirect';

function Cont() {
  return (
    <>
      <section className='cont'>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<About />} />
          <Route path='/exp' element={<Exp />} />
          <Route path='/contact' element={<Contact />} />

          <Route path="/*" element={<Redirect to="/"></Redirect>}></Route>

        </Routes>
      </section>
    </>
  );
}

export default Cont;