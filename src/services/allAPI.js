
import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

export const addContactAPI = async (contact)=>{
    return await commonAPI(`${serverURL}/contacts `,"POST",contact)
}


export const getContactAPI = async (id)=>{
    return await commonAPI(`${serverURL}/contacts/${id}`,"GET",{})
}