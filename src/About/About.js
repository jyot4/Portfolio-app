import React , {useEffect} from 'react'
import './About.css'
import image from "./img2.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function About() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className='about'>

      <div className='left' >
        <img src={image}  ></img>
        <div className='blog' >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F1C21B" d="M44,-66.2C52.2,-63.2,50.6,-42.8,50,-27.7C49.4,-12.5,49.8,-2.7,45.6,4.5C41.3,11.7,32.5,16.1,25.7,20.2C19,24.3,14.1,28.1,9.5,27.1C4.8,26.1,0.3,20.3,-12,24.3C-24.3,28.3,-44.3,42,-57.9,41.6C-71.4,41.3,-78.5,26.8,-75.1,14.1C-71.7,1.5,-57.8,-9.3,-50.3,-21.8C-42.8,-34.3,-41.6,-48.6,-34.3,-52C-27,-55.4,-13.5,-47.9,2.2,-51.3C17.9,-54.8,35.8,-69.2,44,-66.2Z" transform="translate(100 100)" />
</svg>

        </div>

      </div>


      <div className='right' data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="70"
    data-aos-duration="2000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="true"
    data-aos-anchor-placement="top-center">
        <h2 >About</h2>
        <div className='about-content'>
          <h1>Full Stack Developer</h1>
          <p>"I'm a full stack developer who loves creating websites and web apps. I'm good at making websites look great and work smoothly. I enjoy solving problems, whether it's making things load faster or making buttons look just right. I'm here to help bring your web projects to life!"</p>
        </div>
        <ul>
          <li><span>Birthday :</span> 31 October 2003</li>
          <li> <span>Age :</span>  20</li>
          <li> <span>Degree :</span> Bacholor</li>


        </ul>
        <br />
        <ul>
          <li>  <span>Email :</span>  jyotivyass2000@gmail.com</li>
          <li> <span>Photo :</span> 91+ 8529423821</li>
          <li>  <span> City :</span> Makrana</li>
        </ul>
      </div>
    </div>

  )
}

export default About
