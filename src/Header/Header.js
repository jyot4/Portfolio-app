import React, { useState } from 'react'
import './Header.css'

import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {


  const [icons, setIcons] = useState(false)

  function starts(e) {
e.preventDefault();
    setIcons(true)

  }
  function stops(e) {
    e.preventDefault();
    setIcons(false)
  }

  return (
    <div >
      <header className="header">
        {/* <a href="index.html" className="Portfolio"><span>P</span>ortfolio</a> */}
        <Link to='/headerRow' className='Portfolio'><span>P</span>ortfolio</Link>
        <nav style={{ top: icons ? "80px" : "-170px" }} className="navbar">
          <ul>
            <li><Link to='/'>Home</Link></li>

            <li> <Link to='/about'> About</Link></li>
            <li>  <Link to='/resume'>Resume</Link></li>
            <li> <Link to='/portfolio'> Portfolio</Link></li>
            <li> <Link to='/contact'> Contact</Link>
            </li>
          </ul>


        </nav>
        {
          icons
            ?  <Link to='' className='close' onClick={stops} ><CloseIcon /></Link>
            :<Link to='' className='menu' onClick={starts}><MenuIcon /></Link>
        }



      </header>

    </div>

  )
}

export default Header
