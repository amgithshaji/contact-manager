import React, { useState } from 'react'
import Box from '@mui/material/Box';
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

function Edit({ contactDetails, setContactDetails }) {
  const [open, setOpen] = useState(false);
  const [editedContact, setEditedContact] = useState({ ...contactDetails }); 

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const updatebtn = async () => {
    const { id, contactname, email, phonenumber, address } = editedContact;

    if (!contactname || !email || !phonenumber || !address) {
      alert("Please fill all fields");
      return;
    }

    try {
      const result = await updateContactAPI(id, editedContact);
      if (result.status === 200) {
        alert("Contact updated successfully!");
        setContactDetails(prevContacts =>
          prevContacts.map(item =>
            item.id == id ? result.data : item
          )
        );
        handleClose();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className='btn btn-success mx-2'>Edit</button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Edit Contact Details
          </Typography>

          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField value={editedContact.contactname} onChange={e => setEditedContact({ ...editedContact, contactname: e.target.value })} fullWidth label="Name" />
            <TextField value={editedContact.email} onChange={e => setEditedContact({ ...editedContact, email: e.target.value })} fullWidth label="Email"/>
            <TextField value={editedContact.phonenumber} onChange={e => setEditedContact({ ...editedContact, phonenumber: e.target.value })} fullWidth label="Phone Number"/>
            <TextField value={editedContact.address} onChange={e => setEditedContact({ ...editedContact, address: e.target.value })} fullWidth label="Address"/>
            <button onClick={updatebtn} className='btn btn-primary mt-3'>Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;
