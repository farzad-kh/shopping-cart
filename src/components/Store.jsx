import React, { useContext, useState } from 'react';

// get data useContext and use it here
import Product from './shared/Product';

import { ProductsContext } from "../context/ProductContextProvider"
import Search from './Search';
import Fiture from './Fiture';
const Store = () => {
    const ProductsData = useContext(ProductsContext)
    const [search, setSearch] = useState([])

    const searchHandler = (e) => {
       
        setSearch(e.target.value.toLowerCase())

    }
  
    let regex = /'/g;
    const searchProducts=ProductsData.filter(item=>item.title.replace(regex,"").toLowerCase().includes(search))
    return (
        <>
         
  
            <Fiture  />

      
            {ProductsData.length ? <Search searchHandler={searchHandler} search={search}/>
            
            
            :    ""  }
            <div style={{ marginTop: "0" }} className='shop-cart-container dis-flex '>

           
                {!ProductsData.length ? <div className='loading-container' ><span className='loading'></span></div>

                    :
                    searchProducts.length>=1 ?
                    searchProducts.map(item =>
                        
                        <Product key={item.id}
                            image={item.image}
                            title={item.title}
                            offerPrice={item.offer}
                            price={item.price}
                            id={item.id}
                            newOfferPrice={item.newOfferPrice}
                            rate={item["rating"].rate}

                        />)
                        : <p style={{minHeight:"500px"}}> No results found for <span style={{color:"#dc2c2c"}}>{search}</span>  🙄</p>

                }




            </div >
        </>
    );
};

export default Store;