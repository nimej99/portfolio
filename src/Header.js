import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
  const [headerTab, setHeaderTab] = useState(1);
  
  const location = useLocation();
  React.useEffect(()=>{

    if(location.pathname === '/'){
      setHeaderTab(0);
    } else if(location.pathname === '/about'){
      setHeaderTab(1);
    } else if(location.pathname === '/exp'){
      setHeaderTab(2);
    } else if(location.pathname === '/contact'){
      setHeaderTab(3);
    }
  },[location]);

  const active = 'active';
  return (
    <header>
      <Link to='/' className='s_logo'>
        <h1>
          <img src={process.env.PUBLIC_URL + '/images/common/logo.svg'} alt="logo" width="43.9" height='50' />
        </h1>
      </Link>
      <Link to='/' onClick={() => setHeaderTab(0)} className='name'>
        #NimeJ
      </Link>
      <ul className='s_gnb flex'>
        <li>
          <Link to='/about' className={headerTab === 1 ? active : ''} onClick={() => setHeaderTab(1)}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link to='/exp' className={headerTab === 2 ? active : ''} onClick={() => setHeaderTab(2)}>
            EXPERIENCE
          </Link>
        </li>
        <li>
          <Link to='/contact' className={headerTab === 3 ? active : ''} onClick={() => setHeaderTab(3)}>
            CONTACT
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;