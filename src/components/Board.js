import React from 'react';

import Button from './Button';

function Board() {
  const url = {
    github : 'https://github.com/nimej99',
    codepen : 'https://codepen.io/nimej99',
    instagram : 'https://www.instagram.com/invites/contact/?i=1x6hm153b9t14&utm_content=o0u94i'
  }
  return (
    <>
      <div className='board flex'>
        <ul className='b_text'>
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
            <span onClick={()=>{window.open(url.github)}}>
              <img src={process.env.PUBLIC_URL + '/images/common/github.svg'} alt="github" />
            </span>
          </li>
          <li>
            <span onClick={()=>{window.open(url.codepen)}}>
              <img src={process.env.PUBLIC_URL + '/images/common/codepen.svg'} alt="codepen" />
            </span>
          </li>
          <li>
            <span onClick={()=>{window.open(url.instagram)}}>
              <img src={process.env.PUBLIC_URL + '/images/common/instagram.svg'} alt="instagram" />
            </span>
          </li>
          <li>
            <Button title='Resume' />
          </li>
        </ul>
        <p>
          Designed & Built by NiemJ ⓒ 2023 All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Board;