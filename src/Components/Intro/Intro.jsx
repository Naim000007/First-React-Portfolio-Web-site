import React from 'react'
import {Link} from 'react-scroll'
import './Intro.css'
import headerImg from '../../../public/1673605267435.jpeg'
import hireme from '../../assets/assets/hireme.png'

function Intro() {
  return (
    <div>
      <section className="header">
        <div className="intro">
           <h3>Hello,</h3>
           <h1>I'm <span className='dynamic-txts'>Naim</span></h1>
           <h1>Web Developer</h1>
           <p>I am a skilled and passionate web designer with experience <br /> in creating visually appealing and user-friendly websites.</p>
           <Link><button className="hireme"> <img src={hireme} alt="Hire Me" className='btn-img' /> Hire Me </button></Link>
        </div>
        <div className="intro-img"><img src={headerImg} alt="header image" className='img-header'/></div>
      </section>
    </div>
  )
}

export default Intro
