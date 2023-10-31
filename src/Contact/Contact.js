import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'


function Contact() {


  const [name , setName ] = useState()
  const [ email , setEmail] = useState()
  const [text , setText] = useState()

function handleSubmit(e){

e.preventDefault()

axios.post('http://localhost:8000/contactDetail' , {name ,email, text} )
.then((response)=>{
console.log(response.data)
})

}
  return (
    <div className='contact'>
      <h3> Contact</h3>
      <div className='contactLeft'>
        <h2>Talk To me</h2>
        <ul>
          <li><span>Location</span>Vasaundhara Nager,Makrana,Rajasthan</li>
          <li> <span>Email</span> jyotivyass2000@gmail.com</li>
          <li><span>Call</span>91+ 8529423821</li>
        </ul>
      </div>

      <div className='contactRight'>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>

        <textarea placeholder='Message' rows= '4' cols= '50' value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <button type='submit'>Send Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
