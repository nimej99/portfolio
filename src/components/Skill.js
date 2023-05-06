import React from 'react';

function Skill(props) {
  return (
    <>
      <button className='skill flex flex_center'>
        <span>
          {props.first}
        </span>
        <span>
          {props.second}
        </span>
      </button>
    </>
  );
}

export default Skill;