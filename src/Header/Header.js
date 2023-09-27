import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'



function Header() {
  return (
    <div >
      <header className="header">
{/* <a href="index.html" className="Portfolio"><span>P</span>ortfolio</a> */}
<Link to= '/headerRow' className='Portfolio'><span>P</span>ortfolio</Link>
<nav className="navbar">

    <Link to= '/'>Home</Link>
    <Link to = '/about'> About</Link>
    <Link to = '/resume'>Resume</Link>
    <Link to ='/contact'> Contact</Link>
</nav>
   </header>
  
   </div>
  
  )
}

export default Header
