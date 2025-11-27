import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { addContactAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import Background from '../components/Background'
import Footer from '../components/Footer'


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

const textFieldStyles = {
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.6)", // softer gray for better look
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "white",
  },

  "& .MuiInputBase-input": {
    color: "white",
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.05)", // subtle glass layer
    borderRadius: "10px",

    "& fieldset": {
      borderColor: "rgba(255,255,255,0.25)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
};


  return (
<section style={{height:"auto",width:"100%",backgroundColor:"#000000ff",minHeight: "100vh",  display: "flex",flexDirection: "column",justifyContent: "center",  }}>


{/* <div className='row' >
<div className="col-md-1"></div>
<div style={{marginTop:"150px"}} className="col-md-10"> */}
       <div
  className="card w-100 position-relative overflow-hidden rounded-5 shadow p-5 border-0 "
  style={{ backgroundColor: "transparent" }}
>

            <Background/>
          <div style={{position: "relative", zIndex: 1 }} className="card-body mt-5 ">
      
          <div >
            <h1
  className="text-center mt-2 fw-bolder"
  style={{
    fontSize: "clamp(18px, 6vw, 50px)",
    color: "gray",
    textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
    // letterSpacing: "1px",
  }}
>
  Enter Contact Details
</h1>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "50vh" }}>
  
          <Box sx={{ width: 500, maxWidth: '100%', display: "flex", justifyContent: "center", flexDirection: 'column', height: '0vh', gap: 2 }}>
            <TextField  sx={textFieldStyles} value={contactDetails.contactname} onChange={e => setContactDetails({ ...contactDetails, contactname: e.target.value })} fullWidth label="Name" id="fullWidth"  />
            <TextField  sx={textFieldStyles} value={contactDetails.email} onChange={e => setContactDetails({ ...contactDetails, email: e.target.value })} fullWidth label="Email" id="fullWidth" />
            <TextField  sx={textFieldStyles} value={contactDetails.phonenumber} onChange={e => setContactDetails({ ...contactDetails, phonenumber: e.target.value })} fullWidth label="phone Number" id="fullWidth" />
            <TextField  sx={textFieldStyles} value={contactDetails.address} onChange={e => setContactDetails({ ...contactDetails, address: e.target.value })} fullWidth label="Address" id="fullWidth" />
  
          </Box>
        </Box>
  
        <div className=' d-flex justify-content-center  mt-3' >
        <button  onClick={handleAddcontact} style={{width:"90px"}} className='btn btn-dark text-white rounded-5 '  >  Save</button>
        </div>
      </div>
      </div>
       </div>

{/* 
</div>
<div className="col-md-1"></div>

</div> */}

      <Footer/>

</section>
  )
}

export default ContactGenerator