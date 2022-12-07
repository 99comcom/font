import React from 'react'
import { useScrollClipPath } from '../../hooks'

const AboutPage5 = () => {
    const upClipPath = {
        0: useScrollClipPath('up', 0.3, 0),
        1: useScrollClipPath('up', 0.5, 0),
        2: useScrollClipPath('up', 0.7, 0),
        3: useScrollClipPath('up', 0.9, 0),
        4: useScrollClipPath('up', 1.1, 0),
      }
    
  return (
    <div>
    <div className='MainTest6RankLayout' {...upClipPath[0]}>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '2.8rem' }}>PLAS LV.4</span>
      </div>

      <img src='plas_lv4.png' width={250} /><br />
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '1.9rem' }}>플라스</span>
      </div>
    </div>
    <div className='MainTest6RankLayout' {...upClipPath[1]}>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '2.8rem' }}>RASH LV.4</span>
      </div>
      <img src='rash_lv4.png' width={250} /><br />
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '1.9rem' }}>래쉬</span>
      </div>
    </div>
    <div className='MainTest6RankLayout' {...upClipPath[2]}>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '2.8rem' }}>META LV.4</span>
      </div>
      <img src='meta_lv5.png' width={250} /><br />
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '1.9rem' }}>메타</span>
      </div>
    </div>
    <div className='MainTest6RankLayout' {...upClipPath[3]}>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '2.8rem' }}>MUNJI LV.4</span>
      </div>
      <img src='munji_lv4.png' width={250} /><br />
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '1.9rem' }}>먼지</span>
      </div>
    </div>
    <div className='MainTest6RankLayout' {...upClipPath[4]}>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '2.8rem' }}>OZONI LV.4</span>
      </div>
      <img src='ozoni_lv4.png' width={250} />
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '1.9rem' }}>오조니</span>
      </div>
    </div>
    <div>
      <div style={{ width: '80%', height: '50vh', textAlign: 'right', position:'relative', top:'-500px' }}>
        <div>
          <span style={{ fontSize: '1.5rem' }}>랭킹</span><br />
          <span style={{ fontSize: '2rem' }}>
            <span>미션으로 쌓은 포인트로</span><br />
            <span>랭킹을 올려보세요</span><br />
            <span>랭커가 되면 메인을 장식할 수 있습니다</span>
          </span>
        </div>
      </div>   
    </div>
  </div>
  )
}

export default AboutPage5