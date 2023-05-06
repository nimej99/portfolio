import React from 'react';

import '../css/about.css';

import Skills from './Skills';
import Status from './Status';


function About() {
  const status = [
    {
      title:'HTML5',
      knowledge:'85',
      like:'95'
    },
    {
      title:'CSS3',
      knowledge:'90',
      like:'100'
    },
    {
      title:'JAVASCRIPT, JQUERY',
      knowledge:'60',
      like:'80'
    },
    {
      title:'React.js',
      knowledge:'60',
      like:'100'
    },
    {
      title:'PHP, SQL',
      knowledge:'50',
      like:'70'
    }
  ]
  return (
    <article>
      <h2>
        About
      </h2>
      <div className='about_wrap flex'>
        <Skills status={status} />
        <div className='char'>
          <h3 className='a_h3'>SKILLS</h3>
          <img src={process.env.PUBLIC_URL + '/images/photos/404.png'} alt="char" width='400' height='400' />
        </div>
        <Status status={status} />
      </div>
    </article>
  );
}

export default About;