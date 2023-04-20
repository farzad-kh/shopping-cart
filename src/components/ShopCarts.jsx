import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContextProvider';
import ShopCart from './ShopCart';
import { Link } from 'react-router-dom';
import CheckOutSuccess from './CheckOutSuccess';
const ShopCarts = () => {
    const { state, dispatch } = useContext(CartContext)
    const [loadAnime, setLoadAnime] = useState(false)

    const clearItem = () => {
        if (window.confirm("are you sure you want remove all items ?")) {
            dispatch({ type: "CLEAR" })
        }

    }
    const chekoutItem = () => {
        setLoadAnime(true)
        //   setTimeout(()=>  dispatch({type:"CHECKOUT"}),2000)
        setTimeout(() => {
            dispatch({ type: "CHECKOUT" })

        }, 2000)

        setTimeout(() => setLoadAnime(false), 1900)



    }
    // title, price, image, id, rate 
    console.log(state.selectedItems);
    return (
        <div className='shop-cart-container'>
            {state.selectedItems.length >= 1 &&
                <div className='flex-just-responsiv' style={{width:"100%"}}>



                    <div div className='checkout-container'>
                        <div className='justify'>total item:<p>{state.itemsCounter}</p></div>
                        <div className='justify'>total price:<p style={{ fontWeight: "700" }}>${state.total}</p></div>
                        <div className='justify'>
                            <button onClick={() => clearItem()} style={{ color: "#be4949" }}>Clear</button>
                            <button className={`btn-l ${loadAnime && "load"} `} onClick={() => chekoutItem()}>Checkout</button>
                        </div>
                    </div>

                </div>}
                
                {state.selectedItems.length >= 1 || state.checkout ? 
                 state.selectedItems.map(item => <ShopCart key={item.id} title={item.title} 
                     price={item.price} id={item.id} rate={item.rate} 
                     quantity={item.quantity} image={item.image} />)

                     :
                     <div className='empty-cart'>your cart is empty back to <Link to="/products">Products</Link></div>
                 }
                
               {/* {state.selectedItems.length ||  !state.checkout&&
             
               } */}


             {state.checkout   &&
               
                 <CheckOutSuccess/>
                 }

        </div >

    );
};

export default ShopCarts;



// {state.selectedItems.length >= 1 || state.checkout ?
//     state.selectedItems.map(item => <ShopCart key={item.id} title={item.title} price={item.price} id={item.id} rate={item.rate} quantity={item.quantity} image={item.image} />)
//     :
//     <div className='empty-cart'>your cart is empty back to <Link to="/products">Products</Link></div>}


// {state.checkout &&


//     // <div className='empty-cart' style={{ color: "#14bc14" }}>Checkout successfuly <Link to="/products">buy more</Link></div>
//     <CheckOutSuccess/>
//     }