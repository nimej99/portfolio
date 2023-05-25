import React from 'react';

import Skill from './Skill';

function Skills(props) {
  let js = props.status[2].title.split(',');
  let php = props.status[4].title.split(',');
  return (
    <ul className='skills flex'>
      <li onClick={() => props.setMyStat(0)}>
        <Skill first={props.status[0].title} />
      </li>
      <li onClick={() => props.setMyStat(1)}>
        <Skill first={props.status[1].title} />
      </li>
      <li onClick={() => props.setMyStat(2)}>
        <Skill first={js[0]} second={js[1]} />
      </li>
      <li onClick={() => props.setMyStat(3)}>
        <Skill first={props.status[3].title} />
      </li>
      <li onClick={() => props.setMyStat(4)}>
        <Skill first={php[0]} second={php[1]} />
      </li>
    </ul>
  );
}

export default Skills;