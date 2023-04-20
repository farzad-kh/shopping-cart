import React, { useContext } from 'react';
import style from "./Product.css"
import { Link } from 'react-router-dom';
import { shorter, newPrice } from '../../helpers/functions';
import StarRatings from 'react-star-ratings';
import { rateStars, isInCart, quan, quantityCount } from '../../helpers/functions';
import { CartContext } from "../../context/CartContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
// import {faPlus } from '@fortawesome/free-regular-svg-icons'
const trashCan = <FontAwesomeIcon style={{color:"#fff"}} icon={faTrashCan} />
const plusIcon = <FontAwesomeIcon style={{color:"#fff"}} icon={faPlus} />
const minusIcon = <FontAwesomeIcon style={{color:"#fff"}} icon={faMinus} />
const Product = ({ title, price, image, id, rate }) => {
    const dataProduct = { title, price, image, id, rate }
    const { state, dispatch } = useContext(CartContext)

    return (

        <div className='cart-container'>
            <div style={{position:"relative"}} className='rate-container'>
      
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
          <div style={{width: "91%"}}>
          <h3 className='product-title'>{shorter(title)}</h3>
          </div>
          

            <div style={{ display: "flex", marginTop: "10px" }}>
                <p className='first-price'>${newPrice(price)[0]}</p>
                {newPrice(price).length >= 2 ? <p style={{ margin: "0 1px" }}>.</p> : ""}
                <p className="sec-price">{newPrice(price)[1]}</p>
            </div>

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