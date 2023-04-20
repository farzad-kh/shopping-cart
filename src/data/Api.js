import axios from "axios";
const BASE_URL="https://fakestoreapi.com"

// get fetch data and export (axios.get)

const getData=async ()=>{
    const res= await axios.get(`${BASE_URL}/products/`)

    return res.data
}

const getDataID=async (id)=>{
    const res= await axios.get(`${BASE_URL}/products/${id}`)

    return res.data
}


export {getData,getDataID}