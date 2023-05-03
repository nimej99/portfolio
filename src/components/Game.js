import React from 'react';

function Game() {

  let control = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/common/control.svg'})`,
    backgroundRepeat: 'no-repeat',
    width:'200px',
    height:'200px',
    marginRight:'100px'
  }

  let joyStick = {
    backgroundImage: `url(${process.env.PUBLIC_URL + '/images/common/joystick.svg'})`,
    backgroundRepeat: 'no-repeat',
    width:'200px',
    height:'200px'
  }

  return (
    <>
      <ul className='game flex'>
        <li style={control}>
        </li>
        <li style={joyStick}>
        </li>
      </ul>
    </>
  );
}

export default Game;