import React from 'react';

import '../css/intro.css';
import Button from './Button';
import Ast from './Ast';
import Kurby from './Kurby';



function Intro() {
  return (
    <>
      <article className='intro flex flex_center'>
        <Ast />
        <ul className='intro_txt flex flex_center'>
          <li>
          "Making the web a better place,
          </li>
          <li>
          one pixel at a time."
          </li>
        </ul>
        <Button title='Start' />
        <Kurby />
      </article>
    </>
  );
}

export default Intro;