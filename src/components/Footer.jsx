import { section } from 'motion/react-client'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandLinkedin} from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Footer() {
  return (
 <section style={{height:"65vh",width:"100%",backgroundColor:"#e9e9e9ff"}} className=' py-5' >
  <div className='row' >
    <div className='col-md-1' ></div>
 <div className='col-md-10' >
    <div className="card w-100 mb-3 rounded-5 shadow p-4 border-0">
    <div className="card-body">
    <div className='row' >
      <div className='col-md-5' >
        <img style={{width:"30%" }} src="/footerlogo.png" alt="no img" />
        <h6 className='mt-3 ms-3 ' >Manage your contacts smarter with Contact Manager — a simple, clean, and fast way to keep all your connections organized.</h6>
        <a href="https://www.linkedin.com/in/amgith-shaji-a47849323/"   target="_blank">< FaLinkedinIn className=' text-dark fs-2 mt-5 ms-4' /></a>
                <a href="">< FaInstagram className=' text-dark fs-2 mt-5 ms-3' /></a>
                        <a href="https://github.com/amgithshaji" target='_blank'>< FaGithub className=' text-dark fs-2 mt-5 ms-3' /></a>


      </div> 
      <div className='col-md-1'></div>
            <div className='col-md-2' >
              <h6  style={{lineHeight:"50px"}} className=' ms-5 fw-bold ' >Features</h6>
             <div className='mt-3' >
                <p className='text-center'>Add Contacts</p>
                <p className='text-center'>Manage Contacts</p>

  
             </div>

            </div>
                  <div className='col-md-2' >
                                     <h6  style={{lineHeight:"50px"}} className=' ms-5 fw-bold ' >resources</h6>
             <div className='mt-3' >
                <p className='text-center'>User Guide</p>
                <p className='text-center'>FAQs</p>
                 <p className='text-center'>API Docs</p>
                <p className='text-center'>Support</p>

  
             </div>

                  </div>
                        <div className='col-md-2' >
                                         <h6  style={{lineHeight:"50px"}} className=' ms-5 fw-bold ' >More</h6>
             <div className='mt-3' >
                <p className='text-center'></p>
                <p className='text-center'>Privacy Policy</p>
                 <p className='text-center'>Terms of Use</p>
                <p className='text-center'>Feedback</p>

  
             </div>

                        </div>




    </div>
    </div>
    <hr />
    <div style={{gap:"40%"}} className='d-flex align-items-center justify-content-around' >
<h6>© 2025 <span className='fst-italic' >Amgith Shaji</span>.Crafted with ❤ using React.</h6>
<h6>Terms of Service -- Privacy Policy</h6>
    </div>
  </div>
 </div>
    <div className='col-md-1' ></div>

</div>
 </section>
  )
}

export default Footer