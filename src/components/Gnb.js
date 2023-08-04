import React from 'react';
import {useLocation} from 'react-router-dom';

import None from './None';
import Block from './Block';

function Gnb() {
  const location = useLocation();
  return (
    <div className='gnb flex flex_center'>
      {location.pathname === '/' ? <None /> : <Block />}
    </div>
  );
}

export default Gnb;