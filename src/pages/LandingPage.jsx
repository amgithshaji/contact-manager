import React from 'react'
import { Link } from 'react-router-dom'
function LandingPage() {
  return (
    <div className='text-center ' >

     <h3 className="head-margin"  style={{fontSize:"50px"}} >Contact Manager
      <div>Store. Manage. Connect. <br/> Your contacts</div>
     </h3>
     <h6 style={{fontSize:"17px"}} className='mt-4' >Your personal contact assistant — organized, responsive, and secure.</h6>

<Link to={'contact'} style={{marginTop:""}} className='btn btn-dark text-white mt-4 rounded-5 ' > Get Started — Its Free</Link>
<button style={{width:"25vh"}}  className='btn border-dark text-dark rounded-5 mt-4 ms-2  ' > scroll Up</button>
  <div className='row' >
   <div className='col-md-1' ></div>
      <div className='col-md-10' >
<img className='rounded-4 mt-5 w-75' src="/grid1.jpeg" alt="no img" />

      </div>
   <div className='col-md-1' ></div>

  </div>
    </div>
  )
}

export default LandingPage