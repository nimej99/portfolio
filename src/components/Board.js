import React from 'react';
// import { Link } from 'react-router-dom';

import Button from './Button';

function Board() {
  return (
    <>
      <div className='board'>
        <ul>
          <li>
            안녕하세요.
          </li>
          <li>
            UI, Front, React
          </li>
          <li>
            개발자 강재민입니다.
          </li>
        </ul>
        <ul className='b_icons flex'>
          <li>
            {/* <Link> */}
              <img src={process.env.PUBLIC_URL + '/images/common/github.svg'} alt="github" />
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <img src={process.env.PUBLIC_URL + '/images/common/codepen.svg'} alt="codepen" />
            {/* </Link> */}
          </li>
          <li>
            {/* <Link> */}
              <img src={process.env.PUBLIC_URL + '/images/common/instagram.svg'} alt="instagram" />
            {/* </Link> */}
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Board;