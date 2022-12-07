import React, { useEffect, useState } from 'react'
import { useScrollFadeIn } from '../../hooks';
import AboutPage3 from './AboutPage3';

const AboutPage2 = () => {
    const [position, setPosition] = useState(0);
	const onScroll = () => {
		setPosition(window.scrollY);
	}

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

  const upScrollItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.4),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.1),
    2: useScrollFadeIn('left', 1, 0.2),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.1),
    2: useScrollFadeIn('right', 1, 0.2),
  };
  return (
    <div>
      <AboutPage3 />
      <div style={{ width: '100%', height: '120vh', paddingTop: '180px' }}>
        <div style={{ width: '100%', marginBottom: '100px', textAlign: 'left' }}>
          <div {...rightScrollItem[0]}>
            <div style={{ marginLeft: '200px' }}>
              <span style={{ fontSize: '1.5rem' }}>성장</span><br />
              <span style={{ fontSize: '2rem' }}>
                <span>나만의 캐릭터를 성장시켜보세요</span><br />
                <span>Lv4까지 성장시켰다면</span><br />
                <span>다른 캐릭터와 함께 할 수도 있습니다</span>
              </span>
            </div>
          </div>
          <div style={{width:'100%', marginLeft:'70px', marginTop:'70px'}}>
            <div className='MainTest3ImageLayout' style={{opacity: (position - 4000) / 100}}>
              <img src='./character/plas_lv1.png' width={300}/>
            </div>
            <div className='MainTest3ImageLayout' style={{opacity: (position - 4100) / 100}}>
              <img src='./character/plas_lv2.png' width={300} />
            </div>
            <div className='MainTest3ImageLayout' style={{opacity: (position - 4200) / 100}}>
              <img src='./character/plas_lv3.png' width={300} />
            </div>
            <div className='MainTest3ImageLayout' style={{opacity: (position - 4300) / 100}}>
              <img src='./character/plas_lv4.png' width={300} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutPage2