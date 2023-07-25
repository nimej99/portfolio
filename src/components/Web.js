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
      title:'RUSH Responsive Web Project',
      term:'2022.12 ~ 2023.01',
      desc:'HTML CSS JavaScript',
      href:'http://jamm.dothome.co.kr/Lush/index.html'
    },
    {
      thumb:'hana.png',
      title:'HANA Adaptive Web Project',
      term:'2023.02 ~ 2023.03',
      desc:'HTML CSS JavaScript PHP',
      href:'http://jamm.dothome.co.kr/하나금융그룹/index.html'
    },
    {
      thumb:'ofd_admin.png',
      title:'OFD STUDIO [ADMIN] Mobile Web Project',
      term:'2023.03 ~ 2023.04',
      desc:'HTML CSS JavaScript PHP',
      href:'http://jamm.dothome.co.kr/revolution/login.php'
    },
    {
      thumb:'ofd_user.png',
      title:'OFD STUDIO [USER] Mobile Web Project',
      term:'2023.04 ~ 2024.05',
      desc:'HTML CSS JavaScript PHP React.js',
      href:'http://jamm.dothome.co.kr/revolution_user/index.html'
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