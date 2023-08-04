import React from 'react';

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
        <span onClick={()=>{window.open(props.href)}} className='btn flex flex_center'>
          자세히보기
        </span>
      </div>
    </div>
  );
}

export default Works;