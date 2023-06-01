import React, {useState, useEffect} from 'react';

import '../css/about.css';

import Skills from './Skills';
import Status from './Status';


function About() {
  const [myStat, setMyStat] = useState(0);
  const [love, setLove] = useState('');
  
  const status = [
    {
      title:'HTML5',
      knowledge:'85',
      like:95
    },
    {
      title:'CSS3',
      knowledge:'90',
      like:100
    },
    {
      title:'JS, JQUERY',
      knowledge:'60',
      like:80
    },
    {
      title:'React.js',
      knowledge:'60',
      like:100
    },
    {
      title:'PHP, SQL',
      knowledge:'50',
      like:70
    }
  ]
  
  useEffect(() => {
    const status = [
      {
        title:'HTML5',
        knowledge:'85',
        like:95
      },
      {
        title:'CSS3',
        knowledge:'90',
        like:100
      },
      {
        title:'JS, JQUERY',
        knowledge:'60',
        like:80
      },
      {
        title:'React.js',
        knowledge:'60',
        like:100
      },
      {
        title:'PHP, SQL',
        knowledge:'50',
        like:70
      }
    ]
    setLove(status[myStat].like);
  }, [myStat]);

  return (
    <article className='about'>
      <h2>
        About
      </h2>
      <div className='about_wrap flex'>
        <Skills status={status} myStat={myStat} setMyStat={setMyStat} />
        <div className='char'>
          <h3 className='a_h3'>SKILLS</h3>
          <img src={process.env.PUBLIC_URL + '/images/photos/404.png'} alt="char" width='400' height='400' />
        </div>
        <Status status={status} myStat={myStat} love={love} setLove={setLove} />
      </div>
      <p className='a_eng'>
        "We blend different languages to create the optimal development environment."
      </p>
      <strong className='a_kor'>
        "다양한 언어를 융합하여, 최적의 개발 환경을 조성합니다."
      </strong>
    </article>
  );
}

export default About;