import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header/Header'
import HeaderRow from './Header/HeaderRow'
import About from './About/About'
import Resume from './Resume/Resume'
import Footer from './Footer/Footer'
import Contact from './Contact/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path='/'   element ={<HeaderRow/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path ='/resume' element = {<Resume/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
     
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
