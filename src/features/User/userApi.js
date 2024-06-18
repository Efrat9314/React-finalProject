import axios from 'axios'

const baseUrl="http://localhost:4000/user"

export const fetchUsers=async()=>{
    const {data}= await axios.get(`${baseUrl}`)
    console.log('api',data)
    return data;
}
export const userLogin=async(user)=>{
    console.log('api',user)
    const {data}= await axios.post(`${baseUrl}/login`,user)
    console.log('api',data)
    return data;
}

export const addUser=async(user)=>{
    console.log('api',user)
    const {data}= await axios.post(`${baseUrl}`,user)
    return data;
}
