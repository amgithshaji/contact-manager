import React from 'react'
import { Link } from 'react-router-dom'
import TextRotating from '../components/TextRotating'
function LandingPage() {
  return (
  <section style={{height:"200vh",width:"100%",backgroundColor:"#e9e9e9ff"}} >
      <div className='text-center ' >
  
       <h3 className="head-margin"  style={{fontSize:"50px"}} >Contact Manager <br />
        <span>Store. Manage.<span  style={{backgroundColor: "#e9e9e9ff",color: "white",border:"1px solid black",borderRadius: "35px",padding: "6px 12px",marginLeft: "8px",display: "inline-block"}} ><TextRotating/></span> <br/> Your contacts</span>
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
      <button  style={{width:"15vh",marginLeft:"110px"}} className='btn btn-dark text-white rounded-5 mt-5 ' >FAQs</button>
  <div className='row' >
  <div className='col-md-6' > 
    <h1 style={{marginRight:"150px",fontSize:"50px"}} className='mt-5  ' >what is contact manager?</h1>
  </div>
  <div className='col-md-6' >
    <h6  className='mt-5' >A Contact Manager helps you store, organize, and manage contact details easily. It lets you add, edit, search, and delete contacts — keeping all your connections in one simple, organized place.</h6>
  </div>
  
  </div>
  
    </div>
      </div>
  </section>
  )
}

export default LandingPage