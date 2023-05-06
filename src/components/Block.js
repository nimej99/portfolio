import React from 'react';
// import { Link } from 'react-router-dom';

function Block() {
  return (
    <>
      <strong className='gnb_y'>
        {/* <Link> */}
          #NimeJ
        {/* </Link> */}
      </strong>
      <ul className='depth_1 flex flex_center'>
        <li>
          {/* <Link> */}
            ABOUT
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            EXPERIENCE
          {/* </Link> */}
        </li>
        <li>
          {/* <Link> */}
            CONTACT
          {/* </Link> */}
        </li>
      </ul>
    </>
  );
}

export default Block;