import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Block() {
  const [gnbTab, setGnbTab] = useState(1);

  const active = 'active';

  return (
    <>
      <strong className='gnb_y'>
        <Link to='/' onClick={() => setGnbTab(0)}>
          #NimeJ
        </Link>
      </strong>
      <ul className='depth_1 flex flex_center'>
        <li>
          <Link to='/about' className={gnbTab === 1 ? active : ''} onClick={() => setGnbTab(1)}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='/exp' className={gnbTab === 2 ? active : ''} onClick={() => setGnbTab(2)}>
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link to='/contact' className={gnbTab === 3 ? active : ''} onClick={() => setGnbTab(3)}>
            CONTACT
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Block;