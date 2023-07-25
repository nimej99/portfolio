import React from 'react';
import {Link} from 'react-router-dom';

import '../css/intro.css';
import Button from './Button';
import Ast from './Ast';
import Back from './Back';
import Kurby from './Kurby';
import Packman from './Packman';
import IntroTxt from './IntroTxt';



function Intro() {

  const style = {
    cursor: `url(${process.env.PUBLIC_URL}/images/retro/irocket.png), pointer`
  }

  return (
    <>
      <article className='intro flex flex_center' style={style}>
        <Back />
        <Ast />
        <IntroTxt />
        <Link to='/about'>
          <Button title='Start' />
        </Link>
        <Packman />
        <Kurby />
        <img src={process.env.PUBLIC_URL + '/images/retro/star.png'} alt="star" width='150' height='150' className='star' />
        <p className='notice'>
          본 사이트는 상업용 목적이 아닌 개인 포트폴리오 용도로 만들어졌습니다.
            일부 내용 및 이미지의 저작권은 본인 소유가 아님을 밝힙니다.
        </p>
      </article>
    </>
  );
}

export default Intro;