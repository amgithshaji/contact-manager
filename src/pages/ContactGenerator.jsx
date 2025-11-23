import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addContactAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';


function ContactGenerator() {
  const [contactDetails, setContactDetails] = useState({
    contactname: "",
    email: "",
    phonenumber: "",
    address: ""

  })
  console.log(contactDetails);

  const naviagte = useNavigate()

  const handleAddcontact = async () => {
    const { contactname, email, phonenumber, address } = contactDetails
    if (!contactname || !email || !phonenumber || !address) {
      alert("please fill the form completely...")
    } else {
      // api
      console.log(contactDetails);
      try {
        const result = await addContactAPI(contactDetails)
        console.log(result);
        if (result.status == 201) {
          alert("contact added successfully")
          // const { idd } = result.data
          naviagte("/preview")
        }
 
      } catch (error) {
        console.log(error);

      }
      // sucess redirect view page


    }


  }


  return (
<section style={{height:"100vh",width:"100%",backgroundColor:"#e9e9e9ff",minHeight: "100vh",  display: "flex",flexDirection: "column",justifyContent: "center",  }}>
      <div >
        <h1 className='text-center mt-5' >Enter contact details</h1>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "50vh" }}>
  
          <Box sx={{ width: 500, maxWidth: '100%', display: "flex", justifyContent: "center", flexDirection: 'column', height: '0vh', gap: 2 }}>
            <TextField value={contactDetails.contactname} onChange={e => setContactDetails({ ...contactDetails, contactname: e.target.value })} fullWidth label="Name" id="fullWidth" />
            <TextField value={contactDetails.email} onChange={e => setContactDetails({ ...contactDetails, email: e.target.value })} fullWidth label="Email" id="fullWidth" />
            <TextField value={contactDetails.phonenumber} onChange={e => setContactDetails({ ...contactDetails, phonenumber: e.target.value })} fullWidth label="phone Number" id="fullWidth" />
            <TextField value={contactDetails.address} onChange={e => setContactDetails({ ...contactDetails, address: e.target.value })} fullWidth label="Address" id="fullWidth" />
  
          </Box>
        </Box>
  
        <div onClick={handleAddcontact} style={{ marginLeft: "47%",width:"90px"}} className='btn btn-dark text-white rounded-5 ' >
          Save
        </div>
      </div>
</section>
  )
}

export default ContactGenerator