import React, {useState} from 'react';
import confetti from 'canvas-confetti';

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

  function firework() {
    var duration = 15 * 100;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 25, spread: 360, ticks: 100, zIndex: 0 };
    //  startVelocity: 범위, spread: 방향, ticks: 갯수
  
    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }
  
    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();
  
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
  
      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        })
      );
    }, 250);
  }

  const loveUp = () => {
    if(props.love >= 100){
      firework();
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

  const [mPer, setMPer] = useState(0);
  const perChange = () => {
    mPer === 0 ? setMPer(1) : setMPer(0);
  }

  return (
    <div className='status'>
      <strong className='s_top flex flex_center'>
        {props.status[props.myStat].title}
      </strong>
      <div className='stat flex flex_center'>
        <div className='per_wrap' onClick={perChange}>
          <div className={mPer === 0 ? 'per_card' : 'per_card back'}>
            <img src={process.env.PUBLIC_URL + '/images/photos/404.png'} alt="char" className='per_com per_front' />
            <p className='per_com per_back'>
              "협업을 좋아하고 소통하는 <br /> 프론트엔드 개발자가 되기 위해 <br /> 다양한 언어를 습득하고 있습니다!
            </p>
          </div>
        </div>
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
            <div style={l_progress} className='l_move_bar'>&nbsp;</div>
          </div>
          <span className='per_string'>
            {props.love}%
          </span>
        </div>
        
        <div className='s_btns flex flex_center'>
          <button onClick={loveUp}>
            <img src={process.env.PUBLIC_URL + '/images/retro/heart.png'} alt="heart" className={props.love === 100 ? 'hundred' : ''} />
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