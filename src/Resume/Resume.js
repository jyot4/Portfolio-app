import React from 'react'
import './Resume.css'
import jyoti from '../About/jyoti.pdf'

function Resume() {
  return (

<div className='resume'>
<h3>RESUME</h3>
  <div className='resumeLeft'>
  <h1>Summary</h1>
 <h2> JYOTI VYAS</h2>
 <p>A highly skilled and proficient full stack developer eager to learn by  collaborating on challenging projects  strive to adapt  different environments and work effectively with  the team</p>


 <ul>
     <li>Near Varadhawan garden,vasundhara nagar, makrana </li>
    <li>91+ 8529423821</li>
     <li>jyotivyass2000@gmail.com</li>
 </ul>


 <h1>Education</h1>

  <h2>FULL STACK DEVELOPMENT</h2>
  <h5>2022-2023</h5>

 <h4>KnwoledgeHut Upgrad</h4>
 


<h2>BACHELOR OF BUSINESS ADMINISTRATION</h2>
   <h5>2018-2021</h5>

 <h4>Poornima University, japiur</h4>



  </div>

  <div className='resumeRight'>
   
<h1>Project</h1>
  <h2>PHOTOFOLIO WEBSITE</h2>
   <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> <br/>

<h2>PASSWORD GENERTOR</h2>
   <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>


   <h1>Experience</h1>
  <h2>FULL STACK LEARNING</h2>
   <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
</div>

<a href={jyoti} className='download' download> Download</a>
  </div>




  )
}

export default Resume
