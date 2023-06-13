import React from 'react';

import '../css/contact.css';
import Button from './Button';
import Globe from "react-globe.gl";

function Contact() {
  const globeEl = React.useRef();

  React.useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

  }, []);

  const gWidth = 500;

  return (
    <article>
      <h2>
        Contact
      </h2>
      <ul className='cont_half flex'>
        <li className='flex flex_center'>
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor='#0F111D'
            width={gWidth}
            height={gWidth}
          />
        </li>
        <li>
          <ul className='call_me flex'>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/photos/jamm.png'} alt="jamm" width='350' height='350' />
            </li>
            <li className='thx'>
              <p>방문해 주셔서 감사합니다.</p>
              <p>관심이 있으시거나, 궁금한 점이 있다면,</p>
            </li>
            <li>
              <Button title='Say Hello' />
            </li>
            <li>
              언제든지 연락해주세요.
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
}

export default Contact;