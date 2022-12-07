import React from 'react'
import { useScrollFadeIn } from '../../hooks';
const AboutPage = () => {
  const upScrollItem = {
    0: useScrollFadeIn('up', 1),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.4),
    3: useScrollFadeIn('up', 1, 0.6),
    4: useScrollFadeIn('up', 1, 0.8),
  };

  const rightScrollItem = {
    0: useScrollFadeIn('right', 1),
    1: useScrollFadeIn('right', 1, 0.2),
    2: useScrollFadeIn('right', 1, 0.4),
  };

  const leftScrollItem = {
    0: useScrollFadeIn('left', 1),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
  };
  return (
    <div className='MainTestDiv'>
      <div style={{ paddingTop: '150px', fontSize: '3rem' }}>
        <div>
          <div {...rightScrollItem[0]}>
            <div style={{ width: '30%', marginLeft: '330px', position: 'relative' }}>
              <h1 style={{ position: 'absolute', top: '250%', textAlign: 'left' }}>
                <span style={{ fontSize: '1.2rem' }}>미션</span><br />
                <span>환경보호미션</span><br />
                <span style={{ fontSize: '1.5rem' }}>기후변화를 늦출 수 있는</span><br />
                <span style={{ fontSize: '1.5rem' }}>확실하지만, 쉬운</span><br />
                <span style={{ fontSize: '1.5rem' }}>여러가지 미션</span><br />
              </h1>
            </div>
          </div>
          <div style={{ width: '30%' }}>
            <div className='iphoneImage' {...upScrollItem[0]}>
              <img src='iPhone12_Clay_Shadow2.png' width={500} />
            </div>
            <div className='iphoneImage2' {...leftScrollItem[0]}>
              <img src='iPhone12_Clay_Shadow2.png' width={500} />
            </div>
          </div>
          <div>
            <div {...upScrollItem[1]}>
              <div style={{ width: '30%', marginLeft: '850px', position: 'relative' }}>
                <h1 style={{ position: 'absolute', top: '250%', textAlign: 'left' }}>
                  <span style={{ fontSize: '1.2rem' }}>공유</span><br />
                  <span>게시글작성</span><br />
                  <span style={{ fontSize: '1.5rem' }}>완료한 미션을 게시글로 작성해</span><br />
                  <span style={{ fontSize: '1.5rem' }}>다른 유저와 공유해보세요</span><br />
                  <span style={{ fontSize: '1.5rem' }}>그룹을 맺고 추천을 눌러줄 수도 있어요</span><br />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage