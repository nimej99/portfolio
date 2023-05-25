import React from 'react';

import Knowledge from './Knowledge';

function Status(props) {

  let l_per = props.status[props.myStat].like + '%';
  let l_progress = {
    width:l_per,
    height:'100%',
    borderRadius:'5px',
    backgroundColor:'#FFD70E'
  }

  return (
    <div className='status'>
      <strong className='s_top flex flex_center'>
        {props.status[props.myStat].title}
      </strong>
      <div className='stat'>
        <strong className='knowledge'>
          <img src={process.env.PUBLIC_URL + '/images/retro/pencil.png'} alt="pencil" width='50' height='33' />
          이해도
        </strong>
        <Knowledge knowledge={props.status[props.myStat].knowledge}/>
        <p className='like'>
        <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="pencil" width='24' height='20' />
        선호도
        </p>

        <div className='like_wrap flex'>
          <div className='k_bar'>
            <div style={l_progress}>&nbsp;</div>
          </div>
          <span className='per_string'>
            {props.status[props.myStat].like}%
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