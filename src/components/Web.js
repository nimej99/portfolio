import React from 'react';

import Works from './Works';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



function Web() {

  const Worked = [
    {
      thumb:'lush.png',
      title:'RUSH WEB PROJECT',
      term:'2023.12 ~ 2024.01',
      desc:'VS Code HTML CSS JavaScript',
      href:'https://www.instagram.com/invites/contact/?i=1x6hm153b9t14&utm_content=o0u94i'
    },
    {
      thumb:'lush.png',
      title:'HANA WEB PROJECT',
      term:'2023.12 ~ 2024.01',
      desc:'VS Code HTML CSS JavaScript',
      href:'https://www.instagram.com/invites/contact/?i=1x6hm153b9t14&utm_content=o0u94i'
    },
    {
      thumb:'lush.png',
      title:'OFD STUDIO MOBILE WEB PROJECT',
      term:'2023.12 ~ 2024.01',
      desc:'VS Code HTML CSS JavaScript',
      href:'https://www.instagram.com/invites/contact/?i=1x6hm153b9t14&utm_content=o0u94i'
    }
  ]

  const style = {
    cursor: `url(${process.env.PUBLIC_URL}/images/retro/pointer.png), pointer`
  }

  return (
    <div className='web' style={style}>
      <ul className='w_intro flex'>
        <li className='flex flex_center'>
          <img src={process.env.PUBLIC_URL + '/images/retro/folder.svg'} alt="folder" width='40' height='40' />
          / PORTFOLIO /
        </li>
        <li className='pag'>
          <span></span>
          /
          <span></span>
        </li>
      </ul>
      <Swiper
        pagination={{
          el: '.pag',
          type: "fraction",
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {Worked.map((work) =>( 
          <SwiperSlide key={work.title}>
            <Works thumb={work.thumb} title={work.title} term={work.term} desc={work.desc} href={work.href} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Web;