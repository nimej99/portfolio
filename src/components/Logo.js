import React from 'react';
// import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <div className='logo'>
        {/* <Link to='/'> */}
          <img src={process.env.PUBLIC_URL + '/images/common/logo.svg'} alt="logo" width="43.9" height='50' />
        {/* </Link> */}
      </div>
    </>
  );
}

export default Logo;