import { GET_CONTACT, GET_CONTACTS, TOGGLE_FALSE, TOGGLE_TRUE } from "../types/ContactTypes"
import axios from 'axios'


export const getContacts=()=> async (dispatch)=>{
try {
    // Calling the backend
    const res= await axios.get('/contacts')
    // Calling the reducer
    dispatch({type:GET_CONTACTS, payload: res.data})
    console.log(res.data)
} catch (error) {
    console.log(error)
}
}

export const addcontact=(newContact, navigate)=>async(dispatch)=>{
try {
    const res= await axios.post('contacts', newContact)
    dispatch(getContacts())
    navigate('/contacts')
} catch (error) {
    console.log(error)
}
}

export const deletecontact = (id)=>async(dispatch)=>{
try {
    const res= await axios.delete(`/contacts/${id}`)
    dispatch(getContacts())
} catch (error) {
    console.log(error)
}
}

export const getcontact=(id)=>async(dispatch)=>{
    try {
        const res= await axios.get(`/contacts/${id}`)
        dispatch({type:GET_CONTACT, payload:res.data})
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

export const toggletrue=()=>{
    return {type:TOGGLE_TRUE}
}

export const togglefalse=()=>{
    return {type:TOGGLE_FALSE}
}

export const editcontact=(id, updatedinfo)=>async(dispatch)=>{
    try {
        const res= await axios.put(`/contacts/${id}`, updatedinfo )
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }
}