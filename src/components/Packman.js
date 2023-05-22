import React from 'react';

import '../css/Pack.css';

function Packman(props) {
  return (
    <>
      <div className="form">
        <div className="pac__man">
          <div className="mouth"></div>
          <div className="mouth2"></div>
          <div className="mouth_up"></div>
          <div className="mouth_down"></div>
        </div>
        <div className="food">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  );
}

export default Packman;