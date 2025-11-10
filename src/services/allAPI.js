
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

export const addContactAPI = async (contact)=>{
    return await commonAPI(`${serverURL}/contacts `,"POST",contact)
}


export const getContactAPI = async ()=>{
    return await commonAPI(`${serverURL}/contacts`,"GET")
}

export const deleteContactAPI = async (id)=>{
    return await commonAPI(`${serverURL}/contacts/${id}`,"DELETE")
}

export const updateContactAPI = async (id,contactDetails)=>{
    return await commonAPI(`${serverURL}/contacts/${id}`,"PUT",contactDetails)
}