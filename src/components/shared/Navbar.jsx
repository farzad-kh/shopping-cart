import React, { useContext } from 'react';
import { CartContext } from "../../context/CartContextProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const shopIcon = <FontAwesomeIcon style={{ color: "#fff",height:"20px" }} icon={faCartShopping} />
    const { state } = useContext(CartContext)
    {
        console.log(state.itemsCounter);
    }

    return (
        <div style={{paddingBottom:"50px"}}>


            <div style={{ width: "100%", background: " rgba(0,0,0,.6)",position: "fixed",zIndex: "50",backdropFilter: "blur(1.5px) opacity(100%)" }}>

                <nav className='nav-container' style={{ display: "flex", alignContent: "center", justifyContent: "space-between", height: "3.2em" }}>
                    <div >
                        <ul>
                            <li>
                                <Link style={{ color: "#fff" }}  to={`/product`}>products</Link>
                            </li>
                            <li style={{ position: "relative" }}>
                                <Link to="/shopcart">{shopIcon}</Link>
                              {state.itemsCounter>=1 &&   <span style={{
                                    position: "absolute",
                                    top: "8px",
                                    right: "-13px",
                                    background: "#198ed4",
                                    borderRadius: " 50%",
                                    padding: "2px 5px",
                                    fontSize: " 0.72rem",
                                    aspectRatio: "1",
                                    color:"#FFf"

                                }}>{state.itemsCounter}</span>}
                            </li>
                        </ul>



                    </div>

                </nav>

                {/* {state.itemsCounter}
            
            {state.total}  */}
            </div >
        </div >
    );
};

export default Navbar;