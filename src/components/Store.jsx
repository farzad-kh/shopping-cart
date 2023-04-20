import React, { useContext } from 'react';

// get data useContext and use it here
import Product from './shared/Product';
import { ProductsContext } from "../context/ProductContextProvider"
import Fiture from './Fiture';
const Store = () => {
    const ProductsData = useContext(ProductsContext)
   
    return (
        <>
        <Fiture />
        <div style={{marginTop:"0"}} className='shop-cart-container dis-flex '>


           {!ProductsData .length ? <div className='loading-container' ><span className='loading'></span></div>
           
            :
            ProductsData.map(item =>
                <Product key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    id={item.id}
                    rate={item["rating"].rate} />)
                  
            }
         
                
        
         
        </div >
        </>
    );
};

export default Store;