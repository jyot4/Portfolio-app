import React,{useEffect} from 'react'
import photofolio from './photofolio.PNG'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import todo from './todo.PNG'
import pizza from './pizza.PNG'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Portfolio() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <>
      <div className='mainDiv'>
        <div className='portfolio'>
          <h1>Portfolio</h1>
          <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila hello this is priya vyas </p>


          <div className='portfolioImage'>
            <div className='project'>

              <img src={photofolio} alt=''  ></img>
              <Link to='https://photofolio-sable.vercel.app/'>Please Visit</Link>
            </div>

            <div className='project'>
              <img src={todo} alt=''></img>
              <Link to=''>Please Visit</Link>
            </div>

            <div className='project'>
              <img src={pizza} alt=''></img>
              <Link to='https://react-pizza-company-five.vercel.app/'>Please Visit</Link>
            </div>
          </div>
        </div >
        <div className='skills'>
          <h1>Skills</h1>
          <div className='skillsLeft' >
            <div className='progress'>
              <h4>HTML</h4>
              
              <div className='progressDetail'>
                <progress id="file" value="95" max="100" > 32% </progress>
              </div>
            </div>
          </div>

          <div className='skillsLeft'>
            <div className='progress'>
              <h4>CSS</h4>
             
              <div className='progressDetail'>
                <progress id="file" value="90" max="100"> </progress>
              </div>
            </div>
          </div>

          <div className='skillsLeft'>
            <div className='progress'>
              <h4>JavaScript</h4>
         
              <div className='progressDetail'>
                <progress id="file" value="70" max="100"> 32% </progress>
              </div>
            </div>
          </div>

          <div className='skillsLeft'>
            <div className='progress'>
              <h4>React</h4>
              
              <div className='progressDetail'>
                <progress id="file" value="75" max="100"> 32% </progress>
              </div>
            </div>
          </div>

          <div className='skillsLeft'>
            <div className='progress'>
              <h4>Node</h4>
              
              <div className='progressDetail'>
                <progress id="file" value="50" max="100"> 32% </progress>
              </div>
            </div>
          </div>

          <div className='skillsLeft'>
            <div className='progress'>
              <h4>Express</h4>
             
              <div className='progressDetail'>
                <progress id="file" value="60" max="100"> 32% </progress>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Portfolio
