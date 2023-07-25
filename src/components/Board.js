import React from 'react';
import {useLocation} from 'react-router-dom';
import { useTypingText } from "./useTypingText";

import Button from './Button';

function Board() {
  const url = {
    github : 'https://github.com/nimej99',
    blog : 'https://velog.io/@nimej99',
    instagram : 'https://www.instagram.com/invites/contact/?i=1x6hm153b9t14&utm_content=o0u94i'
  }

  const { word } = useTypingText(
    ["Front-End", "활기찬", "UI/UX", "Web/App",  "소통하는"],
    130,
    20
  );

  const locations = useLocation();
  const FrontEnd = 'Front-End';

  return (
    <>
      <div className='board flex'>
        <ul className='b_text'>
          <li>
            안녕하세요.
          </li>
          <li className='word'>
            {locations.pathname === '/' ? FrontEnd : word}
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
            <span onClick={()=>{window.open(url.blog)}}>
              <img src={process.env.PUBLIC_URL + '/images/common/blog.svg'} alt="codepen" />
            </span>
          </li>
          <li>
            <span onClick={()=>{window.open(url.instagram)}}>
              <img src={process.env.PUBLIC_URL + '/images/common/instagram.svg'} alt="instagram" />
            </span>
          </li>
          <li>
            <a 
              href="/강재민_입사지원서.pdf"
              download="강재민_입사지원서"
              target="_blank"
              rel="noreferrer">
              <Button title='Resume' />
            </a>
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