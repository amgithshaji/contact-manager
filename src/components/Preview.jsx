import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { deleteContactAPI, getContactAPI } from '../services/allAPI'
import Edit from './Edit'
import { MdDelete } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";


function preview() {



  // const { idd } = useParams()
  // console.log(id);

  const [contact, setContact] = useState([])

  useEffect(() => {
    getContactDetails()
  }, [])

  const getContactDetails = async () => {
    const result = await getContactAPI()
    // console.log(result);
    if (result.status == 200) {
      setContact(result.data)

    }

  }
  // console.log(contact);

// dltbutton
const deleteContactDetails = async (id) => {
  try {
    const results = await deleteContactAPI(id)
    console.log(results)
    if (results.status === 200) {
      setContact(Contacts => Contacts.filter(item => item.id !== id))
    }
  } catch (err) {
    console.log(err)
  }
}



  return (
 <section style={{backgroundColor:"#e9e9e9ff", paddingTop: "120px",paddingBottom:"10px"}} >
      <div className='text-center' >
  
  
        <div className="container mt-4 ">
          <h2>Contact List</h2>
     {contact.map((item)=>( 
      <div key={item.id} className="card text-center rounded-5 p-1 shadow m-4">
  <div className="card-header ">
<div className='d-flex align-items-center justify-content-center'>
   <IoMdPerson className='fs-3 me-2 mb-2'  /> <h5 className=' fw-bold' > {item?.contactname}</h5>  
  
</div>  </div>
  <div className="card-body">
<div className='d-flex align-items-center justify-content-center'>
      <FaPhoneAlt className='me-2 mb-2' />    <h6 className="card-title">{item?.phonenumber}</h6>
  
</div>
<div className='d-flex align-items-center justify-content-center' >
    <MdEmail className='me-2 mb-2 fs-5' />  <h6 className="card-title">{item?.email}</h6>
  
</div>   
<div className='d-flex align-items-center justify-content-center' >
  <FaAddressBook className='me-2  fs-5'  /> <h6 className="card-text">{item?.address}</h6>
  
</div> 
  <div className=' d-flex align-items-center justify-content-center ' >
      <  MdDelete className='fs-3 me-5 text-danger ' onClick={()=>deleteContactDetails(item.id)} />
       <Edit contactDetails={item} setContactDetails={setContact} />
   </div>
  </div>
  <div className="card-footer text-body-secondary">
    <img style={{width:"17vh"}} src="/footerlogo.png" alt="no img" />
  </div>
</div>))}
        </div>
  
  
      </div>
 </section>
  )
}

export default preview