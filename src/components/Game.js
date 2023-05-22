import React, { useState } from 'react';

function Game() {

  const [conHover, setConHover] = useState(true);
  const [joyHover, setJoyHover] = useState(true);

  let conImg = '/images/common/control.svg';
  const conHov = '/images/common/control_on.svg';
  let joyImg = '/images/common/joystick.svg';
  const joyHov = '/images/common/joystick_on.svg';

  let control = {
    backgroundImage: `url(${process.env.PUBLIC_URL + conImg })`,
    backgroundRepeat: 'no-repeat',
    width: '200px',
    height: '200px',
    marginRight: '100px',
    transition:'0.3s'
  };

  let control2 = {
    backgroundRepeat: 'no-repeat',
    width: '200px',
    height: '200px',
    marginRight: '100px',
    backgroundImage: `url(${process.env.PUBLIC_URL + conHov })`,
    transition:'0.3s'
  };

  let joyStick = {
    backgroundImage: `url(${process.env.PUBLIC_URL + joyImg })`,
    backgroundRepeat: 'no-repeat',
    width: '200px',
    height: '200px',
    transition:'0.3s'
  };

  
  let joyStick2 = {
    backgroundImage: `url(${process.env.PUBLIC_URL + joyHov })`,
    backgroundRepeat: 'no-repeat',
    width: '200px',
    height: '200px',
    transition:'0.3s'
  };

  return (
    <>
      <ul className='game flex'>
        <li style={conHover === true ? control : control2} onMouseEnter={() => setConHover(false)} onMouseLeave={() => setConHover(true)}>
        </li>
        <li style={joyHover === true ? joyStick : joyStick2} onMouseEnter={() => setJoyHover(false)} onMouseLeave={() => setJoyHover(true)}>
        </li>
      </ul>
    </>
  );
}

export default Game;