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
      backgroundRepeat: 'no-repeat'
    };
  
    let control2 = {
      backgroundImage: `url(${process.env.PUBLIC_URL + conHov })`,
      backgroundRepeat: 'no-repeat'
    };
  
    let joyStick = {
      backgroundImage: `url(${process.env.PUBLIC_URL + joyImg })`,
      backgroundRepeat: 'no-repeat'
    };
  
    
    let joyStick2 = {
      backgroundImage: `url(${process.env.PUBLIC_URL + joyHov })`,
      backgroundRepeat: 'no-repeat'
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