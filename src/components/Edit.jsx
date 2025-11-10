import React, { useState } from 'react'
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { updateContactAPI } from '../services/allAPI';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({contactDetails,setContactDetails}) {

const [open, setOpen] = useState(false)
const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// update api call

const updatebtn = async ()=>{
  const{id,contactname, email, phonenumber, address}=contactDetails
  if (!contactname && !email && !phonenumber && !address) {
    alert("please add the contact details")
  }else{
  try{
const result = await updateContactAPI(id,contactDetails)
console.log(result);
   if (result.status==200) {
            alert("resumeupdated successfully")
            handleClose()
        }
  }catch(err){
console.log(err);

  }
  }


}

  return (
    <div>
        <button onClick={handleOpen} className='btn btn-primary' >edit</button>
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit contact details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "50vh" }}>

        <Box sx={{ width: 500, maxWidth: '100%', display: "flex", justifyContent: "center", flexDirection: 'column', height: '0vh', gap: 2 }}>
          <TextField value={contactDetails.contactname} onChange={e => setContactDetails({ ...contactDetails, contactname: e.target.value })} fullWidth label="Name" id="fullWidth" />
          <TextField value={contactDetails.email} onChange={e => setContactDetails({ ...contactDetails, email: e.target.value })} fullWidth label="Email" id="fullWidth" />
          <TextField value={contactDetails.phonenumber} onChange={e => setContactDetails({ ...contactDetails, phonenumber: e.target.value })} fullWidth label="phone Number" id="fullWidth" />
          <TextField value={contactDetails.address} onChange={e => setContactDetails({ ...contactDetails, address: e.target.value })} fullWidth label="Address" id="fullWidth" />

        </Box>
      </Box>
          </Box>
          <button onClick={updatebtn} className='btn btn-primary' >update</button>
        </Box>
      </Modal>
        </div>
  )
}

export default Edit