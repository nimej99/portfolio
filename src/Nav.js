import React from 'react';

import Logo from './components/Logo';
import Gnb from './components/Gnb';
import Game from './components/Game';
import Board from './components/Board';

function Nav() {
  return (
    <>
      <nav className='nav flex'>
        <Logo />
        <Gnb />
        <Game />
        <Board />
      </nav>
    </>
  );
}

export default Nav;