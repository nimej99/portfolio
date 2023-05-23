import React from 'react';
import {Link} from 'react-router-dom';

import '../css/intro.css';
import Button from './Button';
import Ast from './Ast';
import Back from './Back';
import Kurby from './Kurby';
import Packman from './Packman';
import IntroTxt from './IntroTxt';



function Intro() {
  return (
    <>
      <article className='intro flex flex_center'>
        <Back />
        <Ast />
        <IntroTxt />
        <Link to='/about'>
          <Button title='Start' />
        </Link>
        <Packman />
        <Kurby />
        <img src={process.env.PUBLIC_URL + '/images/retro/star.png'} alt="star" width='150' height='150' className='star' />
      </article>
    </>
  );
}

export default Intro;