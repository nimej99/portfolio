import React from 'react';

import Knowledge from './Knowledge';

function Status(props) {
  console.log(props.love);
  let l_per = props.love + '%';
  let l_progress = {
    width:l_per,
    height:'100%',
    borderRadius:'5px',
    backgroundColor:'#FFD70E'
  }

  const loveUp = () => {
    if(props.love >= 100){
      props.setLove(100);
    }else{
      props.setLove(parseInt(props.love, 10) + 1);
    }
  }

  const loveDown = () => {
    if(props.love <= 1){
      props.setLove(1);
    }else{
      props.setLove(props.love - 1);
    }
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
            {props.love}%
          </span>
        </div>
        
        <div className='s_btns flex'>
          <button onClick={loveUp}>
            <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="heart" />
            UP
          </button>
          <button onClick={loveDown}>
            DOWN
          </button>
        </div>

      </div>
    </div>
  );
}

export default Status;