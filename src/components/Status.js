import React from 'react';

import Knowledge from './Knowledge';

function Status(props) {
  return (
    <div className='status'>
      <ul className='s_top flex'>
        <li>
          <img src={process.env.PUBLIC_URL + '/images/common/logo.svg'} alt="logo" width="43.9" height='50' />
        </li>
        <li>
          {props.status[0].title}
        </li>
      </ul>
      <div className='stat'>
        <strong className='knowledge'>
          <img src={process.env.PUBLIC_URL + '/images/retro/pencil.png'} alt="pencil" width='50' height='33' />
          이해도
        </strong>
        <Knowledge knowledge={props.status[0].knowledge}/>
        <p>
        <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="pencil" width='24' height='20' />
        </p>
      </div>
    </div>
  );
}

export default Status;