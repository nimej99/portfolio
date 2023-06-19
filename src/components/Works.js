import React from 'react';
import Button from './Button';

function Works(props) {
  return (
    <div className='works'>
      <div className='work'>
        <img src={process.env.PUBLIC_URL + `/images/portfolio/${props.thumb}`} alt={props.title} />
        <ul className='work_desc'>
          <li>
            {props.title}
          </li>
          <li>
            {props.term}
          </li>
          <li>
            {props.desc}
          </li>
        </ul>
        <Button title={'자세히보기'} />
      </div>
    </div>
  );
}

export default Works;