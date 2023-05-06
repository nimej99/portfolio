import React from 'react';

import '../css/intro.css';
import Button from './Button';

function Intro() {
  return (
    <>
      <article className='intro flex flex_center'>
        <ul className='intro_txt flex flex_center'>
          <li>
          "Making the web a better place,
          </li>
          <li>
          one pixel at a time."
          </li>
        </ul>
        <Button title='Start' />
      </article>
    </>
  );
}

export default Intro;