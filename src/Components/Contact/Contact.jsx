import React, {useRef} from 'react'
import './Contact.css'
import walmartImg from '../../assets/assets/walmart.png';
import adobeImg from '../../assets/assets/adobe.png';
import microsoft from '../../assets/assets/microsoft.png';
import facebook from '../../assets/assets/facebook.png';
import facebookicone from '../../assets/assets/facebook-icon.png'
import twiteericone from '../../assets/assets/twitter.png'
import youtubeicone from '../../assets/assets/youtube.png'
import instgramicone from '../../assets/assets/instagram.png'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6x1vgx', 'template_ruibr9p', form.current, 'UU0O2_871Uf3T61qn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                Ihave had the opprtunity to work with a diverse group of companies some of the notable companies i have worked with includes. 
            </p>
            <div className="clientImgs">
                <img src= {walmartImg} alt="" className="clientImg" />
                <img src= {adobeImg} alt="" className="clientImg" />
                <img src= {microsoft} alt="" className="clientImg" />
                <img src= {facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'> Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any wor opprtunity</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
              <input type="text" className='name' placeholder='Your Name' name='your_name' />
              <input type="email" className='email' placeholder='Email Address' name="your_email"/>
              <textarea name="message" placeholder='Your Message' rows="5" className="msg"></textarea>
              <button type='submit' value='send'  className="submitBtn">Submit</button>
              <div className="links">
                <img src={facebookicone} alt="" className="link" />
                <img src={twiteericone} alt="" className="link" />
                <img src={youtubeicone} alt="" className="link" />
                <img src={instgramicone} alt="" className="link" />
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
