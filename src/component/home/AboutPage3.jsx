import React from 'react'
import { useScrollClipPath, useScrollFadeIn } from '../../hooks';

const AboutPage3 = () => {
  const upScrollItem = {
    0: useScrollFadeIn('up', 1, 0),
    1: useScrollFadeIn('up', 1, 0.1),
    2: useScrollFadeIn('up', 1, 0.2),
    3: useScrollFadeIn('up', 1, 0.3),
    4: useScrollFadeIn('up', 1, 0.4),
  };

  const DownScrollItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('down', 1, 0.2),
    2: useScrollFadeIn('down', 1, 0.3),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.4),
    2: useScrollFadeIn('left', 1, 0.6),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.4),
    2: useScrollFadeIn('right', 1, 0.6),
  };

  const upClipPath = {
    0: useScrollClipPath('up', 1, 0),
    1: useScrollClipPath('up', 2, 0),
    2: useScrollClipPath('up', 3, 0),
    3: useScrollClipPath('up', 4, 0),
  }

  const downClipPath = {
    0: useScrollClipPath('down', 1, 0),
    1: useScrollClipPath('down', 2, 0),
    2: useScrollClipPath('down', 3, 0),
    3: useScrollClipPath('down', 4, 0),
  }

  const rightClipPath = {
    0: useScrollClipPath('right', 1, 0),
    1: useScrollClipPath('right', 2, 0),
    2: useScrollClipPath('right', 3, 0),
    3: useScrollClipPath('right', 4, 0),
  }

  const leftClipPath = {
    0: useScrollClipPath('left', 2, 0),
    1: useScrollClipPath('left', 4, 0),
    2: useScrollClipPath('left', 6, 0),
    3: useScrollClipPath('left', 8, 0),
  }
  return (
    <div style={{ width: '100%', height: '130vh', backgroundColor: 'white' }}>
      <div>
        <div style={{
          width: '90%',
          height: '110vh',
          backgroundColor: '#C5E2EB',
          float: 'right',
          marginTop: '70px',
          marginRight: '80px',
          textAlign: 'right',
          fontSize: '2rem',
          borderRadius: '30px'
        }}>
          <div {...leftScrollItem[0]}>
            <div style={{ marginRight: '70px', paddingTop: '100px' }}>
              <span style={{ fontSize: '1.5rem' }}>캐릭터</span><br />
              <span style={{ fontSize: '2rem' }}>
                <span>기후변화로 인해 태어난</span><br />
                <span>다섯가지 캐릭터와 함께</span><br />
                <span>다양한 미션을 수행해보세요</span>
              </span>
            </div>
          </div>
          <div className='MainTest4ImageLayout' style={{ marginTop: '70px' }}>
            <img src='./character/plas_lv4.png'  {...upScrollItem[0]} width={245} />
            <img src='./character/rash_lv4.png'  {...upScrollItem[1]} width={245} />
            <img src='./character/meta_lv5.png'  {...upScrollItem[2]} width={245} />
            <img src='./character/munji_lv4.png' {...upScrollItem[3]} width={245} />
            <img src='./character/ozoni_lv4.png' {...upScrollItem[4]} width={245} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage3