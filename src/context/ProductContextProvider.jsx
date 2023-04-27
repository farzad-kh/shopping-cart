import React, { useState, useEffect, createContext } from 'react';

// get data and setState and use useEffect , use createContext for wrap and children
import { getData } from '../data/Api';


// in hamon data to tamem children ha hast ke baiad ba useContex begirm harja ke kastim
export const ProductsContext = createContext()
const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState([])
    // const [newP, setNewP] = useState({})

// const setNewP={newoffer:20}
 const newData=data.map(item=>{
    return {...item,offer:12}
})



    useEffect(() => {
        const getProducts =async () => {
          
         return   setData(await getData())

        }

        getProducts()
    }, [])


    return (
       
       <ProductsContext.Provider value={newData}>
       
        {children}
       </ProductsContext.Provider>
    );
};

export default ProductContextProvider;