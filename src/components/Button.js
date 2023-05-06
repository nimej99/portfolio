import React from 'react';

function Button(props) {
  return (
    <>
      <button className='btn'>
        {props.title}
      </button>
    </>
  );
}

export default Button;