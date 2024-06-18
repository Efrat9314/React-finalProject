import axios from 'axios'

const baseUrl = "http://localhost:4000/product"

export const fetchAllProducts = async () => {
    const { data } = await axios.get(`${baseUrl}`)
    return data;
}
export const getProductById = async (id) => {
    const { data } = await axios.get(`${baseUrl}/${id}`)
    return data;
}

export const addProduct = async (product) => {
    const { data } = await axios.post(`${baseUrl}`, product)
    return data;
}

export const deleteProduct = async (id) => {
    console.log(' delete api', id)
    const { data } = await axios.delete(`${baseUrl}/${id}`)
    console.log('data', data)
    return data;
}

export const updateProduct = async (product, id) => {
    console.log("i've got",product,"and",id)
    const response = await axios.put(`${baseUrl}/${id}`, product)
    return response.data
}
