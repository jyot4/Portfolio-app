import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
     
      <div className='aboutMain'>
      <h2>About</h2>
      </div>
      <div className='about-content'>
       <h1>Full Stack Developer</h1>
       <p>"I'm a full stack developer who loves creating websites and web apps. I'm good at making websites look great and work smoothly. I enjoy solving problems, whether it's making things load faster or making buttons look just right. I'm here to help bring your web projects to life!"</p>
       <div className='left'>

       </div>
       <div className='right'>
        <ul>
          <li><span>Birthday :</span> 31 October 2003</li>
          <li> <span>Age :</span>  20</li>
          <li> <span>Degree :</span> Bacholor</li>
          
          
        </ul>
        <br/>
        <ul>
          <li>  <span>Email :</span>  jyotivyass2000@gmail.com</li>
          <li> <span>Photo :</span> 91+ 8529423821</li>
          <li>  <span> City :</span> Makrana</li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default About
