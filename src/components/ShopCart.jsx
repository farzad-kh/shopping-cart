import React, { useContext, useState } from 'react';
import style from "./ShopCart.css"
import { quantityCount, isInCart, shorter, offer } from '../helpers/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../context/CartContextProvider';
import { ProductsContext } from '../context/ProductContextProvider';
import { OfferTenContext } from "../context/CartContextProvider"
// import {faPlus } from '@fortawesome/free-regular-svg-icons'
const trashCan = <FontAwesomeIcon style={{ color: "#fff" }} icon={faTrashCan} />
const plusIcon = <FontAwesomeIcon style={{ color: "#fff" }} icon={faPlus} />
const minusIcon = <FontAwesomeIcon style={{ color: "#fff" }} icon={faMinus} />
const ShopCart = ({ title, price, image, id, rate, quantity, offerPrice, newOfferPrice }) => {

    const { state, dispatch } = useContext(CartContext)
    const { offerTen } = useContext(OfferTenContext)



    const dataProduct = { title, price, image, id, rate, offerPrice, newOfferPrice }
    return (


        <div className='cart'>

            <div className='shop-cart'  >
                <div className='img-shop-cartcontainer'>
                    <img src={image} />
                </div>
                <div className="cart-title">
                    <h4>{shorter(title)}</h4>

                </div>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                    {offerTen ? <><p className='max-width' style={{ fontSize: "0.80rem", color: "#828282", margin: "0 20px" }}>
                        ${price} </p><span style={{ fontSize: "1rem ", fontWeight: "bold", marginTop: "2px" }}>${offer(dataProduct)}</span></> :
                        <p className='max-width' style={{ color: "var(--blackColor)", margin: "0 20px" }}>${price} </p>}


                </div>

                <div className='quntity-cart-container btn-quan'>
                    {quantity > 1 ? <button className='btn-color-quan' onClick={() => dispatch({ type: "DECREASE", payload: dataProduct })}>{minusIcon}</button>

                        : <button className=' trash-icon' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: dataProduct })}>{trashCan}</button>

                    }


                    <div>
                        {quantity}
                    </div>
                    <button className=' btn-color-quan'
                        onClick={() => dispatch({ type: "INCREASE", payload: dataProduct })}>{plusIcon}</button>
                </div>


            </div>

        </div>

    );
};

export default ShopCart;