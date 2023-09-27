import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <footer className='footerContent'>
        <p>© Copyright  <strong> PortFolio</strong>  All Rights Reserved</p>
        <h6>Designed By <Link to='https://www.linkedin.com/in/jyoti-vyas-901993244/'>Jyoti Vyas</Link></h6>
      </footer>
    </div>
  )
}

export default Footer
