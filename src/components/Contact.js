import React from 'react';

import '../css/contact.css';
import Button from './Button';
import Globe from "react-globe.gl";
import ChannelService from "./ChannelService";

function Contact() {
  const globeEl = React.useRef();

  React.useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.3;

  }, []);

  const gWidth = 650;

  const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

  // const gData = {
  //   lat: 37.5663490998,
  //   lng: 126.999730997,
  //   size: 7 + Math.random() * 30,
  //   color: '#64FFDA'
  // };
  const N = 1;
  const gData = [...Array(N).keys()].map(() => ({
    lat: 37.5663490998,
    lng: 126.999730997,
    size: 20,
    color: '#64FFDA'
  }));

  //  채널톡
  ChannelService.loadScript();
  ChannelService.boot({
    "pluginKey": "f039aab7-7152-400b-899a-a426a780a23e",
    "customLauncherSelector": ".hi",
    "hideChannelButtonOnBoot": true
  });

  return (
    <article>
      <h2>
        Contact
      </h2>
      <ul className='cont_half flex'>
        <li className='earth flex flex_center'>
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            backgroundColor='#0F111D'
            width={gWidth}
            height={gWidth}

            htmlElementsData={gData}
            htmlElement={d => {
              const el = document.createElement('div');
              el.innerHTML = markerSvg;
              el.style.color = d.color;
              el.style.width = `${d.size}px`;
              el.style['pointer-events'] = 'auto';
              el.style.cursor = 'pointer';
              el.onclick = () => console.info(d);
              return el;
            }}
          />
        </li>
        <li className='me'>
          <ul className='call_me flex'>
            <li>
              <img src={process.env.PUBLIC_URL + '/images/photos/jamm.png'} alt="jamm" />
            </li>
            <li className='thx'>
              <p>방문해 주셔서 감사합니다.</p>
              <p>관심이 있으시거나, 궁금한 점이 있다면,</p>
            </li>
            <li className='hi '>
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