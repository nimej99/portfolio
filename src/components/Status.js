import React from 'react';

import Knowledge from './Knowledge';

function Status(props) {

  let l_per = props.status[0].like + '%';
  let l_progress = {
    width:l_per,
    height:'100%',
    borderRadius:'5px',
    backgroundColor:'#FFD70E'
  }

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
        <p className='like'>
        <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="pencil" width='24' height='20' />
        선호도
        </p>

        <div className='like_wrap flex flex_center'>
          <div className='k_bar'>
            <div style={l_progress}>&nbsp;</div>
          </div>
          <span className='per_string'>
            {props.status[0].like}%
          </span>
        </div>
        
        <div className='s_btns flex'>
          <button>
            <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="heart" />
            UP
          </button>
          <button>
            DOWN
          </button>
        </div>

      </div>
    </div>
  );
}

export default Status;