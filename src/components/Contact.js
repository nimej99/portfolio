import React from 'react';

import '../css/contact.css';
import Button from './Button';

function Contact() {
  return (
    <article>
      <h2>
        Contact
      </h2>
      <ul className='cont_half flex'>
        <li>
          {/* three.js */}
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