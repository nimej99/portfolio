import React from 'react';

function Knowledge(props) {
  let k_per = props.knowledge + '%';
  let k_progress = {
    width:k_per,
    height:'100%',
    borderRadius:'5px',
    backgroundColor:'#8892B0'
  }
  return (
    <div className='know_wrap flex'>
      <div className='k_bar'>
        <div style={k_progress} className='k_move_bar'>&nbsp;</div>
      </div>
      <span className='per_string'>
        {props.knowledge}%
      </span>
    </div>
  );
}

export default Knowledge;