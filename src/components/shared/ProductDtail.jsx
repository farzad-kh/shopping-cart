import React,{useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import style from "./ProductDtail.css"
import StarRatings from 'react-star-ratings';
import { rateStars,offer } from '../../helpers/functions';
import { OfferTenContext } from '../../context/CartContextProvider';
const ProductDtail = ({ image, title, price, id, description, category, rate,offerPrice }) => {
    const [imgHover,setImgHover]=useState(false)
const data={price,offerPrice}
const {offerTen}=useContext(OfferTenContext)
console.log(data);
    return (
        <div className='de' >


            <div className={`img-hover ${imgHover && "a"}`} onMouseOver={()=>setImgHover(true)} onMouseLeave={()=>setImgHover(false)}>
                <img className='info-image-container ' src={image} />
            </div>
            
            <div className='info-container '>
                <div className='detail-container'>

                    <div className='text-detail-container'>
                        <StarRatings
                            rating={rate}
                            starDimension="17px"
                            starSpacing="2px"
                            starRatedColor={rateStars(rate)}
                        />


                        <div style={{ marginBottom: "12px" }}>
                            <h3>{title}</h3>
                        </div>
                        <p style={{ color: "var(--blackColor)", marginBottom: "20px", lineHeight: "1.3" }}>{description}</p>
                    </div>
                    <div className='category-container' style={{ display: "inline-flex", fontSize: "1rem", color: "#2b88da" }}>category:<h4 style={{ marginLeft: "5px", color: "#080808", fontWeight: "normal" }}>{category}</h4></div>



                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "30px", alignItems: "center" }}>
                        <span className='info-price'>${offerTen  ? offer(data):price }</span>
                
                        <Link to="/products">Back to shop</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductDtail;

