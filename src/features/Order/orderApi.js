import axios from 'axios'

const baseUrl="http://localhost:4000/order"

export const fetchAllOrders=async()=>{
    const {data}= await axios.get(`${baseUrl}`)
    return data;
}

export const addOrder=async(order)=>{
    console.log('newOrder api',order)
    const {data}= await axios.post(`${baseUrl}`, order)
    return data;
}

export const getOrder=async(id)=>{
    const {data}= await axios.get(`${baseUrl}/${id}`)
    return data;
}