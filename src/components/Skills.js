import React from 'react';

import Skill from './Skill';

function Skills(props) {
  let js = props.status[2].title.split(',');
  let php = props.status[4].title.split(',');
  return (
    <ul className='skills flex'>
      <li onClick={() => props.setMyStat(0)}>
        <button className={props.myStat === 0 ? 'flex flex_center active' : 'flex flex_center'}>
          <Skill first={props.status[0].title} />
        </button>
      </li>
      <li onClick={() => props.setMyStat(1)}>
        <button className={props.myStat === 1 ? 'flex flex_center active' : 'flex flex_center'}>
          <Skill first={props.status[1].title} />
        </button>
      </li>
      <li onClick={() => props.setMyStat(2)}>
        <button className={props.myStat === 2 ? 'flex flex_center active' : 'flex flex_center'}>
          <Skill first={js[0]} second={js[1]} />
        </button>
      </li>
      <li onClick={() => props.setMyStat(3)}>
        <button className={props.myStat === 3 ? 'flex flex_center active' : 'flex flex_center'}>
          <Skill first={props.status[3].title} />
        </button>
      </li>
      <li onClick={() => props.setMyStat(4)}>
        <button className={props.myStat === 4 ? 'flex flex_center active' : 'flex flex_center'}>
          <Skill first={php[0]} second={php[1]} />
        </button>
      </li>
    </ul>
  );
}

export default Skills;