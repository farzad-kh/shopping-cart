import React, { useContext, useEffect, useState } from 'react';
import style from "./Product.css"
import { Link } from 'react-router-dom';
import { shorter, newPrice } from '../../helpers/functions';
import StarRatings from 'react-star-ratings';
import { ProductsContext } from '../../context/ProductContextProvider';
import { rateStars, isInCart, quan, quantityCount, offer } from '../../helpers/functions';
import { CartContext } from "../../context/CartContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { OfferTenContext } from '../../context/CartContextProvider';
// import {faPlus } from '@fortawesome/free-regular-svg-icons'
const trashCan = <FontAwesomeIcon style={{ color: "#fff" }} icon={faTrashCan} />
const plusIcon = <FontAwesomeIcon style={{ color: "#fff" }} icon={faPlus} />
const minusIcon = <FontAwesomeIcon style={{ color: "#fff" }} icon={faMinus} />

const Product = ({ title, price, image, id, rate,offerPrice}) => {
    const dataProduct = { title, price, image, id, rate,offerPrice}

    const { state, dispatch } = useContext(CartContext)

    const { offerTen } = useContext(OfferTenContext)
    const data = useContext(ProductsContext)

    return (

        <div className='cart-container'>
            <div style={{ position: "relative" }} className='rate-container'>

                <StarRatings
                    rating={rate}
                    starDimension="15px"
                    starSpacing="1px"
                    starRatedColor={rateStars(rate)}
                />
                <div className='rate'>{rate}</div>
                <Link className='details' to={`/products/${id}`}>Details</Link>
            </div>

            <div className='img-container'>
                <img src={image} alt='product' />
            </div>
            <div style={{ width: "91%" }}>
                <h3 className='product-title'>{shorter(title)}</h3>
            </div>

            <div className={`price-container ${offerTen && "apply-offer"}`} >
                <div style={{ display: "flex", position: "relative" }}>
                    {/* className='offer-display   */}

                    {offerTen &&
                        <>
                            <span className="offer-display">{offerPrice}%</span>
                            <span className='offer-line'></span>
                        </>

                    }

                    <p style={{ flex: newPrice(price).length === 1 ? 1 : 0 }} className='first-price'>${newPrice(price)[0]}</p>
                    {newPrice(price).length >= 2 ? <p style={{ margin: "0 1px" }}>.</p> : ""}
                    <p className="sec-price">{newPrice(price)[1]}</p>
                </div>


                {offerTen ? <div className='new-offer'>  <p>${offerTen ? offer(dataProduct)  : null}</p></div>

                    : ""}



            </div>


{console.log(state)}
            <div>
                {/* {state.selectedItems[quan(state, id)].quantity */}
                <div className='quantity-btn-container btn-quan'>


                    {
                        isInCart(state, id) ?

                            <button className='margin-left btn-color-quan'
                                onClick={() => dispatch({ type: "INCREASE", payload: dataProduct })}>{plusIcon}</button>

                            : <button className='btn-color-quan'
                                onClick={() => dispatch({ type: "ADD_ITEM", payload: dataProduct })}>Add to cart</button>
                    }
                    {<div>{quantityCount(state, id)}</div>}

                    {quantityCount(state, id) > 1 && <button className='margin-right btn-color-quan'
                        onClick={() => dispatch({ type: "DECREASE", payload: dataProduct })}>{minusIcon}</button>}

                    {quantityCount(state, id) === 1 && <button className='margin-right trash-icon'
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: dataProduct })}>{trashCan}</button>}


                </div>
            </div>

        </div>
    );
};

export default Product;