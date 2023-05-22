import React from 'react';

import '../css/intro.css';
import Button from './Button';
import Ast from './Ast';
import Back from './Back';
import Kurby from './Kurby';
import Packman from './Packman';



function Intro() {
  return (
    <>
      <article className='intro flex flex_center'>
        <Back />
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
        <Packman />
        <Kurby />
        <img src={process.env.PUBLIC_URL + '/images/retro/star.png'} alt="star" width='150' height='150' className='star' />
      </article>
    </>
  );
}

export default Intro;