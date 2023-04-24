import React,{useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import Confetti from './Confetti';





const shopIcon = <FontAwesomeIcon style={{ color: "#3bba3b", fontSize: "1.5rem" }} icon={faBagShopping} />

const CheckOutSuccess = () => {
  
    const {dispatch } = useContext(CartContext)
    return (
        <div>
         <confetti/>
            <div className='shop-cart-container dis-flex '>
                <div style={{width:"100%"}}>
                <div className='checkout-success-container'>
                    <div>
                        <i>{shopIcon}</i>
                    </div>
                    <div>
                        <p style={{ fontSize: "1.5rem", marginBottom: "5px", color: "#192f6f", fontWeight: "700" }}>Thank You For Your Purchase</p>
                        <p style={{ fontSize: "0.9rem", textAlign: "center", color: "var(--blackColor)" }} >Check your email for the receipt</p>
                    </div>
                    <div>
                        <Link onClick={()=> dispatch({type:"CECKOUT"})} to="/products" style={{ textTransform: "uppercase", borderRadius: "4px", lineHeight: "4", background: "rgb(25, 142, 212)", color: "#fff", padding: "10px 15px" }}>continue shopping</Link>
                    </div>
                </div>
                </div>
              
            </div>
            <Confetti/>
        </div>
    );
};

export default CheckOutSuccess;