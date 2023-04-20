import React, { useState, useEffect, createContext } from 'react';

// get data and setState and use useEffect , use createContext for wrap and children
import { getData } from '../data/Api';


// in hamon data to tamem children ha hast ke baiad ba useContex begirm harja ke kastim
export const ProductsContext = createContext()
const ProductContextProvider = ({ children }) => {
    const [data, setData] = useState([])


    useEffect(() => {
        const getProducts =async () => {
            setData(await getData())

        }
     
        getProducts()
    }, [])


    return (
       
       <ProductsContext.Provider value={data}>
        {children}
       </ProductsContext.Provider>
    );
};

export default ProductContextProvider;