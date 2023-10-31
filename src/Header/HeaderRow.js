import React, { useEffect } from 'react'
import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from 'typewriter-effect'



function HeaderRow() {


 



  return (
    <div>
     <section class="home"   >
    <div class="home-content"     >
        <h3>Hello , I am</h3>
        <h1> Jyoti Vyas</h1>
       <p> And I am  </p>
       <h2>
        <Typewriter options={{
          autoStart :true,
          loop:true,
          delay:50
        }}
        
        onInit = {(content)=>{
          content
          .typeString("Full Stack Developer")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Quick Learner")
          .pauseFor(1000)
          .deleteAll()
          .start()
        }}
        
        />
        
       </h2>
       <p>I'm a dedicated Full-Stack Developer with a passion for crafting innovative and functional digital solutions. I thrive on collaborative teamwork and approach every project with precision and care, ensuring exceptional results.</p>

       <div class="home-icon">
       <Link to="https://www.linkedin.com/in/jyoti-vyas-901993244/"><LinkedInIcon/></Link>
       <Link to = 'https://github.com/jyot4'><GitHubIcon/></Link>
       <Link to = ''><InstagramIcon/></Link>
      
       </div>
       {/* <a href="" class="btn">More About Me</a> */}
       <Link to= '/about' className='btn'>More About Me</Link>
    </div>
   </section> 
    </div>
  )
}

export default HeaderRow
