import React from 'react'
import { Link } from 'react-router-dom'
import TextRotating from '../components/TextRotating'
import CardGrid from '../components/CardGrid'
import TextScroll from '../components/TextScroll'
import Cards from '../components/Cards'
import Header from '../components/Header'
import { div } from 'motion/react-client'

function LandingPage() {
  return (

  <section style={{height:"auto",width:"auto",backgroundColor:"#e9e9e9ff" }} >
      <div className='text-center ' >

 <section style={{height:"auto",width:"100%",backgroundColor:"#e9e9e9ff"}} className=''  >
    <div  className='row '>
      <div className="col-md-1"></div>
      <div style={{marginTop:"150px"}}  className="col-md-10 ">
          <div  className="card   w-100 rounded-5 shadow p-5 border-0">
    <div style={{height:"auto"}} className="card-body ">
        <h3 className="head-margin"  style={{fontSize:"50px"}} >Contact Manager <br />
            <span>Store. Manage.<span  style={{backgroundColor: "#e9e9e9ff",color: "white",border:"2px solid black",borderRadius: "35px",padding: "6px 12px",marginLeft: "8px",display: "inline-block"}} ><TextRotating/></span> <br/> Your contacts</span>
           </h3>
           <h6 style={{fontSize:"17px"}} className='mt-4' >Your personal contact assistant — organized, responsive, and secure.</h6>
      
      <Link to={'contact'} style={{marginTop:""}} className='btn btn-dark text-white mt-4 rounded-5 ' > Get Started — Its Free</Link>
    <Link to={'/preview'}>
        <button style={{width:"25vh"}}  className='btn border-dark text-dark rounded-5 mt-4 ms-2  ' > See Contacts</button>
      
    </Link> 
    </div>
    </div>
      </div>
   <div className="col-md-1"></div>
    </div>
 </section>

   <div className='row mb-5 ' >
     <div className='col-md-1' ></div>
        <div className='col-md-10' >
  {/* <img style={{objectFit:"cover", width:"90%"}} className='rounded-4 mt-5 ' src="/grid1.jpeg" alt="no img" /> */}
  
        </div>
     <div className='col-md-1' ></div>
         </div>

<div className='mt-5 mb-5 ' >
  <Cards/>
 


  </div>
      {/* <button  style={{width:"15vh",marginLeft:"110px"}} className='btn btn-dark text-white rounded-5 mt-5 ' >FAQs</button> */}
  {/* <div className='row' >
  <div className='col-md-6' > 
    <h1 style={{marginRight:"150px",fontSize:"50px"}} className='mt-5  ' >what is contact manager?</h1>
  </div>
  <div className='col-md-6' >
    <h6  className='mt-5' >A Contact Manager helps you store, organize, and manage contact details easily. It lets you add, edit, search, and delete contacts — keeping all your connections in one simple, organized place.</h6>
  </div>
  
  </div> */}
  
      <  TextScroll />


   <div className='row mt-5' > 
    <div className='col-md-1' ></div>
    <div style={{paddingLeft:"3%"}} className='col-md-10' > 
      <CardGrid/>
    </div>
         <div className='col-md-1' ></div>

   </div>

      </div>

  </section>
  )
}

export default LandingPage