import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getContactAPI } from '../services/allAPI'


function preview() {


const {id} = useParams()
// console.log(id);

const [contact,setContact]= useState({})

useEffect(()=>{
getContactDetails()
},[])

const getContactDetails = async ()=>{
  const result = await getContactAPI (id)
  // console.log(result);
  if (result.status==200) {
    setContact(result.data)
    
  }
  
}
console.log(contact);


  return (
    <div className='text-center' >
<h2> Contact details</h2>
<h4>{contact?.contactname}</h4>
<h4>{contact?.email}</h4>
<h4>{contact?.phonenumber}</h4>
<h4>{contact?.address}</h4>

    </div>
  )
}

export default preview