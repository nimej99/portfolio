import React from 'react';
import { Link } from 'react-router-dom';

function Block() {
  return (
    <>
      <strong className='gnb_y'>
        <Link to='/'>
          #NimeJ
        </Link>
      </strong>
      <ul className='depth_1 flex flex_center'>
        <li>
          <Link to='/about'>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='/exp'>
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Block;