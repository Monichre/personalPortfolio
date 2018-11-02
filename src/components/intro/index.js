import React from 'react'
import EnterButton from '../enterButton'
import './index.css'

const Intro = () => {
  return (
    <div className='intro'>
      <div className='intro__box' />
      <a className='intro__logo'>
        <svg className='icon icon--arrowup'>
          <use xlinkHref='#icon-arrowup' />
        </svg>
      </a>
      <div className='intro__title-wrap'>
        <h1 className='intro__title animatable'>Liam Ellis</h1>
        <div className='intro__subtitle-wrap animatable'>
          <h3 className='intro__subtitle'>Software Engineer</h3>
        </div>
        <EnterButton />
      </div>
      <div className='intro__content intro__content--second animatable'>
        <h3 className='intro__content-title animatable'>Philosophy</h3>
        <br />

        <p className='intro__content-text animatable'>
          Lead when necesary, learn always
        </p>
      </div>
      <div className='intro__content intro__content--forth animatable'>
        <h3 className='intro__content-title animatable'>About</h3>
        <br />
        <p className='intro__content-text animatable'>
          ASCAP Published Song Writer <br /> <br />
          Software Engineer <br /> <br />
          Co-Founder & CTO of
          <a
            rel='noopener'
            target='_blank'
            href='https://www.soundpruf.com/'
            style={{ marginLeft: '10px' }}>
            <img src='/img/x.svg' alt='' height='15' width='15' /> Soundpruf
          </a>
        </p>
      </div>
      <div className='intro__location animatable'>liamhellis@gmail.com || liam@soundpruf.com</div>
      <div className='intro__social animatable'>

        <a
          className='intro__social-item animatable'
          href='https://angel.co/liam-hanley-ellis'
          target='_blank'
          rel='notarget'
          title='Liam Ellis, AngelList'>
          AngelList
        </a>
        <a
          className='intro__social-item animatable'
          href='https://angel.co/soundpruf'
          target='_blank'
          rel='notarget'
          title='Investor Link for AngelList'>
          Investors
        </a>
      </div>
      <a
        className='intro__github animatable'
        href='https://github.com/Monichre'
        target='_blank'
        rel='notarget'
        title='Find this project on GitHub'>
        GitHub
      </a>
    </div>
  )
}

export default Intro
