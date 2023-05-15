import React from 'react';

import '../css/Pack.css';

function Packman(props) {
  return (
    <>
      <div class="form">
        <div class="pac__man">
          <div class="mouth"></div>
          <div class="mouth2"></div>
          <div class="mouth_up"></div>
          <div class="mouth_down"></div>
        </div>
        <div class="food">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </>
  );
}

export default Packman;