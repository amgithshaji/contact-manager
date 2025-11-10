import React, { useState } from 'react'
import { useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import { deleteContactAPI, getContactAPI } from '../services/allAPI'
import Edit from './Edit'


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
    <div className='text-center' >


      <div className="container mt-4">
        <h2>Contact List</h2>
        <ul className="list-group">
          {contact.map((contact) => (
            <li key={contact?.id} className="list-group-item"> 
              <strong>{contact?.contactname}</strong> - {contact?.email} - {contact?.phonenumber} - {contact?.address} <button onClick={() => deleteContactDetails(contact.id)} className='btn btn-primary' >
                delete
              </button>
              <Edit  contactDetails={contact}  setContactDetails={setContact} />
            </li> 
           ))}
     </ul>
      </div>


    </div>
  )
}

export default preview