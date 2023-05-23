import React from 'react';
import {Link} from 'react-router-dom';

function None() {
  return (
    <Link to='/about'>
      <ul className='none flex'>
        <li>
          #NimeJ<span>&#x007B;</span>
        </li>
        <li>
          display<span>&#x003A;</span><strong>none</strong><span>&#x003B;</span>
        </li>
        <li>&#x007D;</li>
      </ul>
    </Link>
  );
}

export default None;