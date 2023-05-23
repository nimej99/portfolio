import React, {useState, useEffect} from 'react';

function IntroTxt(props) {
  const completionWord1 = '"Making the web a better place,';
  const completionWord2 = 'one pixel at a time." ';
  const [introTxt1, setintroTxt1] = useState('');
  const [introTxt2, setintroTxt2] = useState('');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (count1 < completionWord1.length) {
        setintroTxt1((prevTitleValue) => {
          let result = prevTitleValue ? prevTitleValue + completionWord1[count1] : completionWord1[0];
          setCount1(count1 + 1);
          return result;
        });
      } else {
        setintroTxt2((prevTitleValue) => {
          let result = prevTitleValue ? prevTitleValue + completionWord2[count2] : completionWord2[0];
          setCount2(count2 + 1);
          if(count2 >= completionWord2.length){
            setCount1(0);
            setCount2(0);
            setintroTxt1('');
            setintroTxt2('');
          }
          return result;
        });
      }
    }, 150);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <ul className='intro_txt flex flex_center'>
      <li>
        {introTxt1}
      </li>
      <li>
        {introTxt2}
      </li>
    </ul>
  );
}

export default IntroTxt;